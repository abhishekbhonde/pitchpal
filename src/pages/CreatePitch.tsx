import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { VoicePlayer } from '@/components/VoicePlayer';
import { generatePitchFromIdea } from '@/lib/mockPitchGenerator';
import { GeneratedPitch } from '@/types/pitch';
import { Sparkles, Lightbulb, Target, Users, DollarSign, Brain, Zap, TrendingUp, Star, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function CreatePitch() {
  const [idea, setIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState<GeneratedPitch | null>(null);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      toast.error('Please enter your startup idea');
      return;
    }

    setIsGenerating(true);
    try {
      const pitch = await generatePitchFromIdea(idea);
      setGeneratedPitch(pitch);
      toast.success('Pitch generated successfully!');
    } catch (error) {
      toast.error('Failed to generate pitch. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const examplePrompts = [
    "An AI-powered platform that helps small businesses automate their customer service with intelligent chatbots and sentiment analysis",
    "A sustainable food delivery service connecting local organic farmers directly with urban consumers through a carbon-neutral logistics network",
    "A virtual reality fitness platform offering immersive workout experiences with real-time biometric feedback and social challenges",
    "A blockchain-based marketplace for digital art and collectibles with integrated creator royalty management and fraud protection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="container-custom section-padding-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Brain className="h-4 w-4" />
              <span>AI-Powered Pitch Generation Demo</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Transform Your Idea Into an
              <span className="block gradient-text">
                Investor-Ready Pitch
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Describe your startup vision and watch our AI create a comprehensive pitch deck 
              with market analysis, competitive insights, and professional presentation materials.
            </motion.p>
          </div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-premium mb-12">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <span>Your Startup Vision</span>
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Share your startup idea in detail. Include your target market, unique value proposition, 
                  and business model. The more context you provide, the better your pitch will be.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="idea" className="text-base font-semibold text-foreground mb-3 block">
                    Describe Your Startup Idea
                  </Label>
                  <Textarea
                    id="idea"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Example: 'An AI-powered platform that helps small businesses create professional marketing campaigns automatically. It analyzes their industry, target audience, and competition to generate personalized content, social media posts, and ad campaigns. The platform uses machine learning to optimize campaign performance and provides detailed analytics to track ROI...'"
                    className="min-h-[150px] text-base resize-none border-2 border-border focus:border-primary transition-colors"
                    disabled={isGenerating}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">
                      {idea.length} characters
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Minimum 100 characters recommended
                    </span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-base font-semibold text-foreground mb-3 block">
                    Need inspiration? Try these examples:
                  </Label>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {examplePrompts.map((prompt, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 text-sm p-4 leading-relaxed text-left justify-start h-auto w-full"
                          onClick={() => setIdea(prompt)}
                        >
                          <div className="flex items-start space-x-2">
                            <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{prompt}</span>
                          </div>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !idea.trim() || idea.length < 50}
                  className="w-full btn-premium py-4 text-lg font-semibold shadow-xl hover:shadow-2xl"
                  size="lg"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-3">
                      <LoadingSpinner text="" size="sm" />
                      <span>Generating your pitch...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Generate Professional Pitch</span>
                    </div>
                  )}
                </Button>
              </CardContent>
            </div>
          </motion.div>

          {/* Generated Pitch Display */}
          <AnimatePresence>
            {generatedPitch && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Pitch Header */}
                <div className="card-premium bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-2xl">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
                      <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{generatedPitch.name}</h2>
                        <p className="text-xl lg:text-2xl text-blue-100 mb-6">{generatedPitch.tagline}</p>
                        <p className="text-blue-100 leading-relaxed text-lg">{generatedPitch.hero_section.subtext}</p>
                      </div>
                      <div className="flex flex-col space-y-3 w-full lg:w-auto">
                        <Badge className="bg-emerald-500 text-white border-0 py-2 px-4 text-center">
                          {generatedPitch.hero_section.call_to_action}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card-premium bg-gradient-to-br from-red-50 to-red-100">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-red-700 text-2xl flex items-center space-x-2">
                        <Target className="h-6 w-6" />
                        <span>Problem Statement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-800 leading-relaxed text-lg">{generatedPitch.problem}</p>
                    </CardContent>
                  </div>

                  <div className="card-premium bg-gradient-to-br from-emerald-50 to-emerald-100">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-emerald-700 text-2xl flex items-center space-x-2">
                        <Lightbulb className="h-6 w-6" />
                        <span>Our Solution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-emerald-800 leading-relaxed text-lg">{generatedPitch.solution}</p>
                    </CardContent>
                  </div>
                </div>

                {/* Key Features */}
                <div className="card-premium">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <span>Key Features & Benefits</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Core functionality that sets us apart from the competition
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {generatedPitch.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-foreground leading-relaxed">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Business Model */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="card-premium bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center space-x-2 text-blue-700">
                        <Users className="h-6 w-6" />
                        <span>Target Market</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800 leading-relaxed">{generatedPitch.target_users}</p>
                    </CardContent>
                  </div>

                  <div className="card-premium bg-gradient-to-br from-emerald-50 to-emerald-100">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center space-x-2 text-emerald-700">
                        <DollarSign className="h-6 w-6" />
                        <span>Revenue Model</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-emerald-800 leading-relaxed">{generatedPitch.monetization}</p>
                    </CardContent>
                  </div>

                  <div className="card-premium bg-gradient-to-br from-purple-50 to-purple-100">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center space-x-2 text-purple-700">
                        <TrendingUp className="h-6 w-6" />
                        <span>Market Size</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-800 leading-relaxed">{generatedPitch.market_size}</p>
                    </CardContent>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="card-premium">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-2 text-2xl">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <span>Customer Testimonials</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      What early adopters and beta users are saying about our solution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {generatedPitch.testimonials.map((testimonial, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl"
                        >
                          <div className="flex items-center space-x-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Voice Pitch Player */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <VoicePlayer text={generatedPitch.voice_pitch} />
                </motion.div>

                {/* Competition Analysis */}
                <div className="card-premium">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Competitive Landscape</CardTitle>
                    <CardDescription className="text-lg">
                      How we differentiate ourselves in the market
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed text-lg">{generatedPitch.competition}</p>
                  </CardContent>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}