import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VoicePlayer } from '@/components/VoicePlayer';
import { ArrowLeft, Edit, Share2, Download, Star, Users, DollarSign, Target } from 'lucide-react';
import { SavedPitch } from '@/types/pitch';
import { motion } from 'framer-motion';

export function PitchDetails() {
  const { id } = useParams<{ id: string }>();
  const [pitch, setPitch] = useState<SavedPitch | null>(null);

  useEffect(() => {
    if (id) {
      // In a real app, this would fetch from Supabase
      const savedPitches = JSON.parse(localStorage.getItem('pitches') || '[]');
      const foundPitch = savedPitches.find((p: SavedPitch) => p.id === id);
      setPitch(foundPitch || null);
    }
  }, [id]);

  if (!pitch) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg max-w-md w-full">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 lg:mb-4">Pitch not found</h2>
            <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg">The pitch you're looking for doesn't exist.</p>
            <Button asChild className="w-full lg:w-auto">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-12 space-y-4 lg:space-y-0">
            <Button asChild variant="outline" className="w-full lg:w-auto">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm lg:text-base">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm lg:text-base">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm lg:text-base">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>

          {/* Hero Card */}
          <Card className="mb-6 lg:mb-12 border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
            <CardContent className="p-6 lg:p-10">
              <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">{pitch.name}</h1>
                  <p className="text-lg lg:text-2xl text-blue-100 mb-3 lg:mb-6">{pitch.tagline}</p>
                  <p className="text-blue-100 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">{pitch.hero_section.subtext}</p>
                  <Badge className="bg-white text-purple-600 text-sm lg:text-base px-3 lg:px-4 py-1 lg:py-2">
                    {pitch.hero_section.call_to_action}
                  </Badge>
                </div>
                <div className="w-full lg:w-auto lg:ml-8 text-left lg:text-right">
                  <p className="text-sm lg:text-base text-blue-200">Created</p>
                  <p className="text-lg lg:text-xl font-semibold">{formatDate(pitch.created_at)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 lg:space-y-10">
            {/* About Section */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{pitch.about_section}</p>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader className="pb-4 lg:pb-6">
                  <CardTitle className="text-red-600 text-lg lg:text-xl">Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{pitch.problem}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader className="pb-4 lg:pb-6">
                  <CardTitle className="text-green-600 text-lg lg:text-xl">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{pitch.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">Key Features</CardTitle>
                <CardDescription className="text-sm lg:text-base">Core functionality and capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  {pitch.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 lg:p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader className="pb-4 lg:pb-6">
                  <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                    <Users className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                    <span>Target Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{pitch.target_users}</p>
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
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{pitch.monetization}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader className="pb-4 lg:pb-6">
                  <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                    <Target className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                    <span>Market</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{pitch.market_size}</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                  <Star className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500" />
                  <span>Testimonials</span>
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">What people are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                  {pitch.testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-4 lg:p-6 rounded-lg"
                    >
                      <div className="flex items-center space-x-1 mb-3 lg:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</p>
                        <p className="text-xs lg:text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Voice Pitch */}
            <VoicePlayer text={pitch.voice_pitch} />

            {/* Competition */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">Competition Analysis</CardTitle>
                <CardDescription className="text-sm lg:text-base">How we stand against the competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{pitch.competition}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}