import { supabase } from './supabaseClient';
import { GeneratedPitch, SavedPitch } from '@/types/pitch';
import { toast } from 'sonner';

export async function savePitchToSupabase(
  pitch: GeneratedPitch,
  userEmail: string
): Promise<{ success: boolean; error?: string; data?: SavedPitch }> {
  try {
    console.log('Saving pitch for user:', userEmail);
    console.log('Pitch data:', pitch);

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
      toast.error(`Failed to save pitch: ${error.message}`);
      return { success: false, error: error.message };
    }

    console.log('Pitch saved successfully:', data);

    const savedPitch: SavedPitch = {
      id: data.id,
      user_email: data.user_email,
      created_at: data.created_at,
      ...data.pitch_data,
    };

    toast.success('Pitch saved successfully!');
    return { success: true, data: savedPitch };
  } catch (error) {
    console.error('Unexpected error saving pitch:', error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    toast.error(`An unexpected error occurred: ${message}`);
    return {
      success: false,
      error: message,
    };
  }
}

export async function fetchUserPitches(userEmail: string): Promise<SavedPitch[]> {
  try {
    console.log('Fetching pitches for user:', userEmail);

    const { data, error } = await supabase
      .from('pitches')
      .select('*')
      .eq('user_email', userEmail)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching pitches:', error);
      toast.error(`Failed to load pitches: ${error.message}`);
      return [];
    }

    console.log('Fetched pitches:', data);

    return data.map((item) => ({
      id: item.id,
      user_email: item.user_email,
      created_at: item.created_at,
      ...item.pitch_data,
    }));
  } catch (error) {
    console.error('Unexpected error fetching pitches:', error);
    toast.error('An unexpected error occurred while loading pitches.');
    return [];
  }
}

export async function fetchPitchById(id: string): Promise<SavedPitch | null> {
  try {
    console.log('Fetching pitch by ID:', id);

    const { data, error } = await supabase
      .from('pitches')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching pitch:', error);
      toast.error(`Failed to load pitch: ${error.message}`);
      return null;
    }

    console.log('Fetched pitch:', data);

    return {
      id: data.id,
      user_email: data.user_email,
      created_at: data.created_at,
      ...data.pitch_data,
    };
  } catch (error) {
    console.error('Unexpected error fetching pitch:', error);
    toast.error('An unexpected error occurred while loading the pitch.');
    return null;
  }
}

export async function updatePitch(
  id: string,
  pitch: GeneratedPitch
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Updating pitch:', id, pitch);

    const { error } = await supabase
      .from('pitches')
      .update({ pitch_data: pitch })
      .eq('id', id);

    if (error) {
      console.error('Error updating pitch:', error);
      toast.error(`Failed to update pitch: ${error.message}`);
      return { success: false, error: error.message };
    }

    toast.success('Pitch updated successfully!');
    return { success: true };
  } catch (error) {
    console.error('Unexpected error updating pitch:', error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    toast.error(`An unexpected error occurred: ${message}`);
    return {
      success: false,
      error: message,
    };
  }
}

export async function deletePitch(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Deleting pitch:', id);

    const { error } = await supabase
      .from('pitches')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting pitch:', error);
      toast.error(`Failed to delete pitch: ${error.message}`);
      return { success: false, error: error.message };
    }

    toast.success('Pitch deleted successfully!');
    return { success: true };
  } catch (error) {
    console.error('Unexpected error deleting pitch:', error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    toast.error(`An unexpected error occurred: ${message}`);
    return {
      success: false,
      error: message,
    };
  }
}