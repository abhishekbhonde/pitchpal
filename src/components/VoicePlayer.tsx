import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Play, Pause, Volume2, VolumeX, Download, Settings, ChevronDown, Mic, Sparkles, Waveform } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { elevenLabsClient, type ElevenLabsVoice, type ElevenLabsConfig } from '@/lib/elevenlabsClient';
import { toast } from 'sonner';

interface VoicePlayerProps {
  text: string;
  className?: string;
}

export function VoicePlayer({ text, className = '' }: VoicePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [volume, setVolume] = useState([0.8]);
  const [showSettings, setShowSettings] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [currentAudioBlob, setCurrentAudioBlob] = useState<Blob | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // Voice settings
  const [selectedVoice, setSelectedVoice] = useState('EXAVITQu4vr4xnSDxMaL');
  const [stability, setStability] = useState([0.5]);
  const [similarityBoost, setSimilarityBoost] = useState([0.8]);
  const [style, setStyle] = useState([0.2]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const availableVoices = elevenLabsClient.getAvailableVoices();
  const isElevenLabsAvailable = elevenLabsClient.isAvailable();

  useEffect(() => {
    return () => {
      if (currentAudioUrl) {
        URL.revokeObjectURL(currentAudioUrl);
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentAudioUrl]);

  const updateProgress = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const startProgressTracking = () => {
    progressInterval.current = setInterval(updateProgress, 100);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const generateVoiceWithElevenLabs = async () => {
    setIsGenerating(true);
    
    try {
      const config: Partial<ElevenLabsConfig> = {
        voice_id: selectedVoice,
        voice_settings: {
          stability: stability[0],
          similarity_boost: similarityBoost[0],
          style: style[0],
          use_speaker_boost: true
        }
      };

      const result = await elevenLabsClient.generateSpeech(text, config);
      
      if (result) {
        // Clean up previous audio
        if (currentAudioUrl) {
          URL.revokeObjectURL(currentAudioUrl);
        }
        
        setCurrentAudioUrl(result.audioUrl);
        setCurrentAudioBlob(result.audioBlob);
        
        // Create new audio element
        const audio = new Audio(result.audioUrl);
        audio.volume = isMuted ? 0 : volume[0];
        
        audio.onloadedmetadata = () => {
          setDuration(audio.duration);
        };
        
        audio.onplay = () => {
          setIsPlaying(true);
          startProgressTracking();
        };
        
        audio.onpause = () => {
          setIsPlaying(false);
          stopProgressTracking();
        };
        
        audio.onended = () => {
          setIsPlaying(false);
          setProgress(0);
          stopProgressTracking();
        };
        
        audioRef.current = audio;
        
        // Auto-play the generated audio
        audio.play();
        
        toast.success('Voice generated successfully!');
      } else {
        throw new Error('Failed to generate voice');
      }
    } catch (error) {
      console.error('Voice generation failed:', error);
      toast.error('Voice generation failed. Trying fallback...');
      
      // Fallback to browser speech synthesis
      generateVoiceWithBrowser();
    } finally {
      setIsGenerating(false);
    }
  };

  const generateVoiceWithBrowser = () => {
    setIsGenerating(true);
    
    // Stop any current speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = isMuted ? 0 : volume[0];
    
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsGenerating(false);
    };
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsGenerating(false);
      toast.error('Speech synthesis failed');
    };
    
    speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    } else if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      if (isElevenLabsAvailable) {
        generateVoiceWithElevenLabs();
      } else {
        generateVoiceWithBrowser();
      }
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume[0];
    }
  };

  const handleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    
    if (audioRef.current) {
      audioRef.current.volume = newMuted ? 0 : volume[0];
    }
    
    if (isPlaying && !audioRef.current) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleDownload = () => {
    if (currentAudioBlob) {
      const url = URL.createObjectURL(currentAudioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pitch-voice.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Audio downloaded successfully!');
    } else {
      toast.error('No audio available for download');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const selectedVoiceInfo = availableVoices.find(v => v.voice_id === selectedVoice);

  return (
    <Card className={`${className} border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-xl hover:shadow-2xl transition-all duration-500`}>
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
            <motion.div
              animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
              className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-3"
            >
              <Mic className="h-6 w-6 text-white" />
            </motion.div>
            AI Voice Presentation
          </CardTitle>
          <div className="flex items-center space-x-2">
            {isElevenLabsAvailable && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                ElevenLabs
              </Badge>
            )}
            <Collapsible open={showSettings} onOpenChange={setShowSettings}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="p-2">
                  <Settings className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
        
        <AnimatePresence>
          {showSettings && (
            <Collapsible open={showSettings} onOpenChange={setShowSettings}>
              <CollapsibleContent>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-gray-50 rounded-lg space-y-4"
                >
                  {isElevenLabsAvailable && (
                    <>
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Voice Selection</Label>
                        <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {availableVoices.map((voice) => (
                              <SelectItem key={voice.voice_id} value={voice.voice_id}>
                                <div className="flex flex-col">
                                  <span className="font-medium">{voice.name}</span>
                                  <span className="text-xs text-gray-500">{voice.description}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm font-medium mb-2 block">
                            Stability: {stability[0].toFixed(1)}
                          </Label>
                          <Slider
                            value={stability}
                            onValueChange={setStability}
                            max={1}
                            min={0}
                            step={0.1}
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium mb-2 block">
                            Clarity: {similarityBoost[0].toFixed(1)}
                          </Label>
                          <Slider
                            value={similarityBoost}
                            onValueChange={setSimilarityBoost}
                            max={1}
                            min={0}
                            step={0.1}
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium mb-2 block">
                            Style: {style[0].toFixed(1)}
                          </Label>
                          <Slider
                            value={style}
                            onValueChange={setStyle}
                            max={1}
                            min={0}
                            step={0.1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Volume: {Math.round(volume[0] * 100)}%
                    </Label>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleMute}
                        className="p-2"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                      <Slider
                        value={volume}
                        onValueChange={handleVolumeChange}
                        max={1}
                        min={0}
                        step={0.1}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </motion.div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </AnimatePresence>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Text Preview */}
        <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
          <p className="text-sm lg:text-base text-gray-700 line-clamp-4 leading-relaxed">
            {text}
          </p>
        </div>
        
        {/* Audio Controls */}
        <div className="space-y-4">
          {/* Progress Bar */}
          {audioRef.current && (
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{formatTime((progress / 100) * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}
          
          {/* Main Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={handlePlayPause}
              disabled={isGenerating}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Generating...</span>
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="h-5 w-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  <span>
                    {currentAudioUrl ? 'Play' : 'Generate Voice'}
                  </span>
                </>
              )}
            </Button>
            
            {currentAudioBlob && (
              <Button
                onClick={handleDownload}
                variant="outline"
                className="p-3"
                title="Download Audio"
              >
                <Download className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Voice Info */}
        {selectedVoiceInfo && isElevenLabsAvailable && (
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Using <span className="font-semibold">{selectedVoiceInfo.name}</span> voice
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {selectedVoiceInfo.description}
            </p>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            {isElevenLabsAvailable 
              ? 'Powered by ElevenLabs AI voice synthesis' 
              : 'Using browser speech synthesis • Add ElevenLabs API key for premium voices'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
}