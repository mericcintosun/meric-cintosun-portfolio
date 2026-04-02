import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function extractFirstParagraph(markdown: string): string {
  const blocks = markdown.split(/\n\n+/);
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("```")) {
      continue;
    }
    return trimmed
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1")
      .replace(/^[-*>]\s+/gm, "")
      .trim()
      .substring(0, 300);
  }
  return "";
}

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json([]);
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { data, error } = await supabase
    .from("articles")
    .select("title, slug, content, publish_date, devto_url, hashnode_url")
    .eq("status", "published")
    .order("publish_date", { ascending: false });

  if (error || !data) {
    return NextResponse.json([]);
  }

  const blogs = data
    .filter((a) => a.devto_url || a.hashnode_url)
    .map((a) => ({
      title: a.title,
      first_paragraph: extractFirstParagraph(a.content),
      read_more_url: a.devto_url || a.hashnode_url,
      date: a.publish_date,
      author: { name: "Meriç Cintosun", photo: "/main-image.webp" },
      language: "en",
      main_image: "/blogImages/blog-1.webp",
      tags: [],
      source: "auto",
    }));

  return NextResponse.json(blogs);
}
