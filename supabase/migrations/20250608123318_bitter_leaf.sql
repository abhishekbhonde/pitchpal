/*
  # Enable Row Level Security for Pitches Table

  1. Security
    - Enable RLS on `pitches` table
    - Add policy for users to only access their own pitches
    - Add policy for authenticated users to insert their own pitches
    - Add policy for users to update their own pitches
    - Add policy for users to delete their own pitches

  2. Changes
    - Enable Row Level Security
    - Create comprehensive CRUD policies
    - Ensure data privacy and security
*/

-- Enable Row Level Security on pitches table
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own pitches
CREATE POLICY "Users can read own pitches"
  ON pitches
  FOR SELECT
  TO authenticated
  USING (user_email = auth.email());

-- Policy: Users can insert their own pitches
CREATE POLICY "Users can insert own pitches"
  ON pitches
  FOR INSERT
  TO authenticated
  WITH CHECK (user_email = auth.email());

-- Policy: Users can update their own pitches
CREATE POLICY "Users can update own pitches"
  ON pitches
  FOR UPDATE
  TO authenticated
  USING (user_email = auth.email())
  WITH CHECK (user_email = auth.email());

-- Policy: Users can delete their own pitches
CREATE POLICY "Users can delete own pitches"
  ON pitches
  FOR DELETE
  TO authenticated
  USING (user_email = auth.email());