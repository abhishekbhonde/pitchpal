interface ElevenLabsVoice {
  voice_id: string;
  name: string;
  category: string;
  description: string;
}

interface ElevenLabsConfig {
  voice_id: string;
  model_id: string;
  voice_settings: {
    stability: number;
    similarity_boost: number;
    style: number;
    use_speaker_boost: boolean;
  };
}

class ElevenLabsClient {
  private apiKey: string | null;
  private baseUrl = 'https://api.elevenlabs.io/v1';

  constructor() {
    this.apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY || null;
  }

  // Professional voices optimized for business presentations
  getAvailableVoices(): ElevenLabsVoice[] {
    return [
      {
        voice_id: 'EXAVITQu4vr4xnSDxMaL',
        name: 'Bella',
        category: 'Professional',
        description: 'Warm, confident female voice perfect for presentations'
      },
      {
        voice_id: 'pNInz6obpgDQGcFmaJgB',
        name: 'Adam',
        category: 'Professional', 
        description: 'Clear, authoritative male voice ideal for business pitches'
      },
      {
        voice_id: '21m00Tcm4TlvDq8ikWAM',
        name: 'Rachel',
        category: 'Professional',
        description: 'Articulate, engaging female voice for compelling narratives'
      },
      {
        voice_id: 'AZnzlk1XvdvUeBnXmlld',
        name: 'Domi',
        category: 'Professional',
        description: 'Confident, persuasive voice perfect for investor presentations'
      }
    ];
  }

  async generateSpeech(
    text: string, 
    config: Partial<ElevenLabsConfig> = {}
  ): Promise<{ audioUrl: string; audioBlob: Blob } | null> {
    if (!this.apiKey) {
      console.warn('ElevenLabs API key not found. Using fallback speech synthesis.');
      return null;
    }

    const defaultConfig: ElevenLabsConfig = {
      voice_id: 'EXAVITQu4vr4xnSDxMaL', // Bella by default
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.8,
        style: 0.2,
        use_speaker_boost: true
      }
    };

    const finalConfig = { ...defaultConfig, ...config };

    try {
      const response = await fetch(
        `${this.baseUrl}/text-to-speech/${finalConfig.voice_id}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': this.apiKey
          },
          body: JSON.stringify({
            text: text,
            model_id: finalConfig.model_id,
            voice_settings: finalConfig.voice_settings
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ElevenLabs API error: ${response.status} - ${errorText}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      return { audioUrl, audioBlob };
    } catch (error) {
      console.error('ElevenLabs generation failed:', error);
      throw error;
    }
  }

  async getVoiceInfo(voiceId: string) {
    if (!this.apiKey) return null;

    try {
      const response = await fetch(`${this.baseUrl}/voices/${voiceId}`, {
        headers: {
          'xi-api-key': this.apiKey
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to get voice info: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to get voice info:', error);
      return null;
    }
  }

  isAvailable(): boolean {
    return !!this.apiKey;
  }
}

export const elevenLabsClient = new ElevenLabsClient();
export type { ElevenLabsVoice, ElevenLabsConfig };