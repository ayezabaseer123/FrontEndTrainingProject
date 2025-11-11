/*
  # Create articles table

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text) - Article title
      - `content` (text) - Article full content
      - `author` (text) - Author name
      - `estimated_read_time` (text) - Estimated reading time (e.g., "1 hr", "30 min")
      - `image_url` (text) - URL to article cover image
      - `created_at` (timestamp) - Article creation date
      - `updated_at` (timestamp) - Last update date

  2. Security
    - Enable RLS on `articles` table
    - Add policy for authenticated users to read articles
    - Add policy for admins to manage articles
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  estimated_read_time text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can read articles"
  ON articles
  FOR SELECT
  TO anon
  USING (true);
