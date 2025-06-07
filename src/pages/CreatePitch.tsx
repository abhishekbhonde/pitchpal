import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { generatePitchFromIdea } from '@/lib/mockPitchGenerator';
import { GeneratedPitch } from '@/types/pitch';
import { Sparkles, Lightbulb, Target, Users, DollarSign, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

export function CreatePitch() {
  const [idea, setIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState<GeneratedPitch | null>(null);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      toast({
        title: "Please enter your startup idea",
        description: "Describe your startup idea to generate a pitch.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const pitch = await generatePitchFromIdea(idea);
      setGeneratedPitch(pitch);
      toast({
        title: "Pitch generated successfully!",
        description: "Your AI-powered pitch is ready. Review and save it to your dashboard."
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your pitch. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    if (!generatedPitch) return;

    // In a real app, this would save to Supabase
    const savedPitches = JSON.parse(localStorage.getItem('pitches') || '[]');
    const pitchWithId = {
      ...generatedPitch,
      id: Date.now().toString(),
      user_email: 'demo@example.com',
      created_at: new Date().toISOString()
    };
    
    savedPitches.push(pitchWithId);
    localStorage.setItem('pitches', JSON.stringify(savedPitches));
    
    toast({
      title: "Pitch saved!",
      description: "Your pitch has been saved to your dashboard."
    });
    
    navigate('/dashboard');
  };

  const examplePrompts = [
    "An AI co-founder that builds pitch decks automatically from startup ideas",
    "A sustainable food delivery app that connects local farmers with urban consumers",
    "A virtual reality fitness platform for home workouts with personal trainers",
    "A blockchain-based marketplace for digital art and collectibles"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-4">
              Create Your Pitch
            </h1>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Describe your startup idea and let AI transform it into a professional pitch deck
            </p>
          </div>

          <Card className="mb-6 lg:mb-12 border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
            <CardHeader className="pb-4 lg:pb-6">
              <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                <span>Your Startup Idea</span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Tell us about your startup idea in detail. The more information you provide, the better your pitch will be.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div>
                <Label htmlFor="idea" className="text-sm lg:text-base font-medium">Startup Idea</Label>
                <Textarea
                  id="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Describe your startup idea here... For example: 'An AI-powered platform that helps small businesses create professional marketing campaigns automatically. It analyzes their industry, target audience, and competition to generate personalized content, social media posts, and ad campaigns.'"
                  className="min-h-[120px] lg:min-h-[150px] mt-2 text-sm lg:text-base resize-none"
                  disabled={isGenerating}
                />
              </div>
              
              <div>
                <Label className="text-sm lg:text-base font-medium text-gray-700">Example prompts:</Label>
                <div className="flex flex-wrap gap-2 lg:gap-3 mt-2 lg:mt-3">
                  {examplePrompts.map((prompt, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors text-xs lg:text-sm p-2 lg:p-3 leading-relaxed"
                      onClick={() => setIdea(prompt)}
                    >
                      {prompt.length > 60 ? `${prompt.slice(0, 60)}...` : prompt}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !idea.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 lg:py-4 text-base lg:text-lg"
                size="lg"
              >
                {isGenerating ? (
                  <LoadingSpinner text="Generating your pitch..." />
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    Generate Pitch
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <AnimatePresence>
            {generatedPitch && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Header */}
                <Card className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <h2 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-3">{generatedPitch.name}</h2>
                        <p className="text-base lg:text-xl text-blue-100">{generatedPitch.tagline}</p>
                      </div>
                      <Button
                        onClick={handleSave}
                        variant="secondary"
                        className="w-full lg:w-auto bg-white text-purple-600 hover:bg-gray-100 py-2 lg:py-3 px-4 lg:px-6"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Pitch
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Hero Section */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader className="pb-4 lg:pb-6">
                    <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                      <Target className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                      <span>Hero Section</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 lg:space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Headline</h3>
                      <p className="text-base lg:text-xl">{generatedPitch.hero_section.headline}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Subtext</h3>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{generatedPitch.hero_section.subtext}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Call to Action</h3>
                      <Badge className="bg-blue-600 text-sm lg:text-base px-3 lg:px-4 py-1 lg:py-2">{generatedPitch.hero_section.call_to_action}</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader className="pb-4 lg:pb-6">
                      <CardTitle className="text-red-600 text-lg lg:text-xl">Problem</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{generatedPitch.problem}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader className="pb-4 lg:pb-6">
                      <CardTitle className="text-green-600 text-lg lg:text-xl">Solution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{generatedPitch.solution}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader className="pb-4 lg:pb-6">
                    <CardTitle className="text-lg lg:text-xl">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                      {generatedPitch.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Target Users & Monetization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader className="pb-4 lg:pb-6">
                      <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                        <Users className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                        <span>Target Users</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{generatedPitch.target_users}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader className="pb-4 lg:pb-6">
                      <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                        <DollarSign className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                        <span>Monetization</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{generatedPitch.monetization}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Testimonials */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader className="pb-4 lg:pb-6">
                    <CardTitle className="text-lg lg:text-xl">Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      {generatedPitch.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                          <p className="text-sm lg:text-base text-gray-600 italic mb-3 lg:mb-4">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</p>
                            <p className="text-xs lg:text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}