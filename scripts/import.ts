import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import "dotenv/config";

type ArticleInsert = {
  title: string;
  slug: string;
  content: string;
  status: "scheduled";
  publish_date: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function importArticles() {
  const articlesDir = path.join(process.cwd(), "_articles");

  if (!fs.existsSync(articlesDir)) {
    throw new Error("Missing _articles directory in project root.");
  }

  const files = fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log("No markdown files found in _articles.");
    return;
  }

  const articlesToInsert: ArticleInsert[] = [];
  const baseDate = new Date();

  for (const [index, file] of files.entries()) {
    const rawContent = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data, content } = matter(rawContent);

    const publishDate = new Date(baseDate);
    publishDate.setDate(baseDate.getDate() + index * 3);

    articlesToInsert.push({
      title:
        typeof data.title === "string" && data.title.trim().length > 0
          ? data.title.trim()
          : `Article ${index + 1}`,
      slug:
        typeof data.slug === "string" && data.slug.trim().length > 0
          ? data.slug.trim()
          : file.replace(/\.md$/i, ""),
      content,
      status: "scheduled",
      publish_date: publishDate.toISOString(),
    });
  }

  console.log(`${articlesToInsert.length} articles are being inserted...`);

  const { error } = await supabase.from("articles").insert(articlesToInsert);

  if (error) {
    throw new Error(`Import failed: ${error.message}`);
  }

  console.log("All articles imported and scheduled successfully.");
}

importArticles().catch((error) => {
  console.error(error);
  process.exit(1);
});
