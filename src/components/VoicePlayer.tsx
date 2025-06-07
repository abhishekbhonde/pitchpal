import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VoicePlayerProps {
  text: string;
  className?: string;
}

export function VoicePlayer({ text, className = '' }: VoicePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mock voice generation - in a real app, this would call ElevenLabs API
  const generateVoice = async () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demonstration, we'll use the browser's Speech Synthesis API
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = isMuted ? 0 : 1;
    
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsGenerating(false);
    };
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      generateVoice();
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <Card className={`${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Voice Pitch</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleMute}
              className="p-2"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 line-clamp-4">
            {text}
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <Button
            onClick={handlePlayPause}
            disabled={isGenerating}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            {isGenerating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span>
              {isGenerating ? 'Generating...' : isPlaying ? 'Pause' : 'Play Voice Pitch'}
            </span>
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          Powered by AI voice synthesis
        </p>
      </CardContent>
    </Card>
  );
}