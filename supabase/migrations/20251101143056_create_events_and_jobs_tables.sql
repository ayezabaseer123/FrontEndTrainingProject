/*
  # Create events and jobs tables

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `date` (timestamp) - Event date
      - `category` (text) - Event category
      - `description` (text) - Event description
      - `location` (text) - Event location
      - `attendees` (jsonb) - Array of attendee images
      - `created_at` (timestamp)

    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text) - Job title
      - `company_name` (text) - Company name
      - `company_logo` (text) - Company logo URL
      - `location` (text) - Job location
      - `salary` (text) - Salary range
      - `description` (text) - Job description
      - `tags` (jsonb) - Array of tags
      - `posted_date` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add public read policies
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date timestamptz NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  location text,
  attendees jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company_name text NOT NULL,
  company_logo text NOT NULL,
  location text NOT NULL,
  salary text NOT NULL,
  description text NOT NULL,
  tags jsonb DEFAULT '[]'::jsonb,
  posted_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can read events"
  ON events
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can read jobs"
  ON jobs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can read jobs"
  ON jobs
  FOR SELECT
  TO anon
  USING (true);
