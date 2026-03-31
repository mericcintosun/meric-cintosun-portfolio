import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function publishToDevto(article: Article, canonicalUrl: string) {
  if (!process.env.DEVTO_API_KEY) {
    return null;
  }

  const response = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEVTO_API_KEY,
    },
    body: JSON.stringify({
      article: {
        title: article.title,
        body_markdown: article.content,
        published: true,
        canonical_url: canonicalUrl,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Dev.to publish failed for ${article.slug}: ${body}`);
    return null;
  }

  const data = (await response.json()) as { url?: string };
  return data.url ?? null;
}

async function publishToHashnode(article: Article, canonicalUrl: string) {
  if (!process.env.HASHNODE_PAT || !process.env.HASHNODE_PUBLICATION_ID) {
    return null;
  }

  const query = `
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post {
          url
        }
      }
    }
  `;

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASHNODE_PAT,
    },
    body: JSON.stringify({
      query,
      variables: {
        input: {
          title: article.title,
          contentMarkdown: article.content,
          publicationId: process.env.HASHNODE_PUBLICATION_ID,
          originalArticleURL: canonicalUrl,
        },
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Hashnode publish failed for ${article.slug}: ${body}`);
    return null;
  }

  const data = (await response.json()) as {
    data?: { publishPost?: { post?: { url?: string } } };
    errors?: Array<{ message?: string }>;
  };

  if (data.errors?.length) {
    console.error(
      `Hashnode GraphQL errors for ${article.slug}: ${data.errors
        .map((error) => error.message ?? "unknown")
        .join(", ")}`,
    );
    return null;
  }

  return data.data?.publishPost?.post?.url ?? null;
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    return NextResponse.json(
      { error: "NEXT_PUBLIC_SITE_URL is missing." },
      { status: 500 },
    );
  }

  try {
    const { data: articles, error } = await supabase
      .from("articles")
      .select("id,title,slug,content")
      .eq("status", "scheduled")
      .lte("publish_date", new Date().toISOString());

    if (error) {
      throw error;
    }

    if (!articles || articles.length === 0) {
      return NextResponse.json({ message: "No scheduled articles to publish." });
    }

    const results: Array<{
      id: string;
      devtoUrl: string | null;
      hashnodeUrl: string | null;
    }> = [];

    for (const article of articles as Article[]) {
      const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`;

      const devtoUrl = await publishToDevto(article, canonicalUrl);
      const hashnodeUrl = await publishToHashnode(article, canonicalUrl);

      const { error: updateError } = await supabase
        .from("articles")
        .update({
          status: "published",
          devto_url: devtoUrl,
          hashnode_url: hashnodeUrl,
        })
        .eq("id", article.id);

      if (updateError) {
        throw updateError;
      }

      results.push({
        id: article.id,
        devtoUrl,
        hashnodeUrl,
      });
    }

    revalidateTag("articles");

    return NextResponse.json({
      success: true,
      count: results.length,
      published: results,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected cron publish error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
