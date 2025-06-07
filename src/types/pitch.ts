export interface GeneratedPitch {
  id?: string;
  name: string;
  tagline: string;
  hero_section: {
    headline: string;
    subtext: string;
    call_to_action: string;
  };
  features: string[];
  about_section: string;
  problem: string;
  solution: string;
  target_users: string;
  voice_pitch: string;
  testimonials: { name: string; role: string; quote: string }[];
  monetization: string;
  market_size: string;
  competition: string;
  user_email?: string;
  created_at?: string;
}

export interface PitchFormData {
  startup_idea: string;
}

export interface SavedPitch extends GeneratedPitch {
  id: string;
  user_email: string;
  created_at: string;
}