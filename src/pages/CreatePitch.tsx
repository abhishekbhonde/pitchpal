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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Pitch
            </h1>
            <p className="text-lg text-gray-600">
              Describe your startup idea and let AI transform it into a professional pitch deck
            </p>
          </div>

          <Card className="mb-8 border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <span>Your Startup Idea</span>
              </CardTitle>
              <CardDescription>
                Tell us about your startup idea in detail. The more information you provide, the better your pitch will be.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="idea">Startup Idea</Label>
                <Textarea
                  id="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Describe your startup idea here... For example: 'An AI-powered platform that helps small businesses create professional marketing campaigns automatically. It analyzes their industry, target audience, and competition to generate personalized content, social media posts, and ad campaigns.'"
                  className="min-h-[120px] mt-2"
                  disabled={isGenerating}
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Example prompts:</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {examplePrompts.map((prompt, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors text-xs p-2"
                      onClick={() => setIdea(prompt)}
                    >
                      {prompt.length > 50 ? `${prompt.slice(0, 50)}...` : prompt}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !idea.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                size="lg"
              >
                {isGenerating ? (
                  <LoadingSpinner text="Generating your pitch..." />
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
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
                className="space-y-6"
              >
                {/* Header */}
                <Card className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{generatedPitch.name}</h2>
                        <p className="text-lg text-blue-100">{generatedPitch.tagline}</p>
                      </div>
                      <Button
                        onClick={handleSave}
                        variant="secondary"
                        className="bg-white text-purple-600 hover:bg-gray-100"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Pitch
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Hero Section */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span>Hero Section</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Headline</h3>
                        <p className="text-lg">{generatedPitch.hero_section.headline}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Subtext</h3>
                        <p className="text-gray-600">{generatedPitch.hero_section.subtext}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Call to Action</h3>
                        <Badge className="bg-blue-600">{generatedPitch.hero_section.call_to_action}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-red-600">Problem</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{generatedPitch.problem}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-green-600">Solution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{generatedPitch.solution}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {generatedPitch.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Target Users & Monetization */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span>Target Users</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{generatedPitch.target_users}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span>Monetization</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{generatedPitch.monetization}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Testimonials */}
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                  <CardHeader>
                    <CardTitle>Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {generatedPitch.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
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