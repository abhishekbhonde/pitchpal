/*
  # Fix RLS policies for pitches table

  1. Tables
    - Ensure pitches table exists with proper structure
    - Add indexes for performance

  2. Security
    - Drop existing policies if they exist
    - Create new RLS policies for authenticated users
    - Enable RLS on pitches table

  3. Performance
    - Add indexes on user_email and created_at columns
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

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own pitches" ON pitches;
DROP POLICY IF EXISTS "Users can insert own pitches" ON pitches;
DROP POLICY IF EXISTS "Users can update own pitches" ON pitches;
DROP POLICY IF EXISTS "Users can delete own pitches" ON pitches;

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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS pitches_user_email_idx ON pitches(user_email);
CREATE INDEX IF NOT EXISTS pitches_created_at_idx ON pitches(created_at DESC);