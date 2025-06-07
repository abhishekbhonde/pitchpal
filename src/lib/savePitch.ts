import { toast } from 'sonner';
import { supabase } from './supabaseClient';
import type { GeneratedPitch } from './generatePitch';

export async function savePitchToSupabase(
  pitch: GeneratedPitch,
  userEmail: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('pitches')
      .insert([
        {
          user_email: userEmail,
          pitch_data: pitch,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error saving pitch:', error);
      toast.error('Failed to save pitch. Please try again.');
      return { success: false, error: error.message };
    }

    toast.success('Pitch saved successfully!');
    return { success: true };
  } catch (error) {
    console.error('Unexpected error saving pitch:', error);
    toast.error('An unexpected error occurred. Please try again.');
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
} 