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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Pitch not found</h2>
            <p className="text-gray-600 mb-6">The pitch you're looking for doesn't exist.</p>
            <Button asChild>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button asChild variant="outline">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>

          {/* Hero Card */}
          <Card className="mb-8 border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{pitch.name}</h1>
                  <p className="text-xl text-blue-100 mb-4">{pitch.tagline}</p>
                  <p className="text-blue-100 mb-4">{pitch.hero_section.subtext}</p>
                  <Badge className="bg-white text-purple-600">
                    {pitch.hero_section.call_to_action}
                  </Badge>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8 text-right">
                  <p className="text-sm text-blue-200">Created</p>
                  <p className="text-lg font-semibold">{formatDate(pitch.created_at)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* About Section */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{pitch.about_section}</p>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-red-600">Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{pitch.problem}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-600">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{pitch.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>Core functionality and capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {pitch.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Target Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{pitch.target_users}</p>
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
                  <p className="text-gray-700 text-sm">{pitch.monetization}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span>Market</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{pitch.market_size}</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Testimonials</span>
                </CardTitle>
                <CardDescription>What people are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {pitch.testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
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
              <CardHeader>
                <CardTitle>Competition Analysis</CardTitle>
                <CardDescription>How we stand against the competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{pitch.competition}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}