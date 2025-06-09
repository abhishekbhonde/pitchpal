/*
  # Create pitches table

  1. New Tables
    - `pitches`
      - `id` (uuid, primary key)
      - `user_email` (text, not null)
      - `pitch_data` (json, stores all pitch information)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `pitches` table
    - Add policies for authenticated users to manage their own pitches
*/

-- Create the pitches table if it doesn't exist
CREATE TABLE IF NOT EXISTS pitches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  pitch_data json,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Users can read own pitches"
  ON pitches
  FOR SELECT
  TO authenticated
  USING (user_email = auth.email());

CREATE POLICY "Users can insert own pitches"
  ON pitches
  FOR INSERT
  TO authenticated
  WITH CHECK (user_email = auth.email());

CREATE POLICY "Users can update own pitches"
  ON pitches
  FOR UPDATE
  TO authenticated
  USING (user_email = auth.email())
  WITH CHECK (user_email = auth.email());

CREATE POLICY "Users can delete own pitches"
  ON pitches
  FOR DELETE
  TO authenticated
  USING (user_email = auth.email());

-- Create an index for better performance
CREATE INDEX IF NOT EXISTS pitches_user_email_idx ON pitches(user_email);
CREATE INDEX IF NOT EXISTS pitches_created_at_idx ON pitches(created_at DESC);