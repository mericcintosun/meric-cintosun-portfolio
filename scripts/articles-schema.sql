CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('draft', 'scheduled', 'published')),
  publish_date TIMESTAMPTZ NOT NULL,
  devto_url TEXT,
  hashnode_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
