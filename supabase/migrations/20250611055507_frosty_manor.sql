/*
  # Create pitches table with RLS policies (Safe Migration)

  1. New Tables
    - `pitches`
      - `id` (uuid, primary key)
      - `user_email` (text, not null)
      - `pitch_data` (json)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `pitches` table
    - Add policies for authenticated users to manage their own pitches
    - Users can only access their own pitch data

  3. Performance
    - Add indexes for user_email and created_at columns

  4. Safety
    - Drop existing policies before creating new ones to avoid conflicts
    - Use IF NOT EXISTS where appropriate
*/

-- Create the pitches table if it doesn't exist
CREATE TABLE IF NOT EXISTS pitches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  pitch_data json,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security (safe to run multiple times)
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
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

-- Create indexes for better performance (safe to run multiple times)
CREATE INDEX IF NOT EXISTS pitches_user_email_idx ON pitches(user_email);
CREATE INDEX IF NOT EXISTS pitches_created_at_idx ON pitches(created_at DESC);