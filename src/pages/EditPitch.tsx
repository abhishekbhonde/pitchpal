import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { SavedPitch } from '@/types/pitch';
import { fetchPitchById, updatePitch } from '@/lib/supabasePitches';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function EditPitch() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pitch, setPitch] = useState<SavedPitch | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadPitch = async () => {
      if (id) {
        setLoading(true);
        const pitchData = await fetchPitchById(id);
        setPitch(pitchData);
        setLoading(false);
      }
    };

    loadPitch();
  }, [id]);

  const handleSave = async () => {
    if (!pitch || !id) return;

    setSaving(true);
    const result = await updatePitch(id, {
      name: pitch.name,
      tagline: pitch.tagline,
      hero_section: pitch.hero_section,
      features: pitch.features,
      about_section: pitch.about_section,
      problem: pitch.problem,
      solution: pitch.solution,
      target_users: pitch.target_users,
      voice_pitch: pitch.voice_pitch,
      testimonials: pitch.testimonials,
      monetization: pitch.monetization,
      market_size: pitch.market_size,
      competition: pitch.competition
    });
    setSaving(false);

    if (result.success) {
      navigate(`/pitch/${id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <LoadingSpinner text="Loading pitch..." />
      </div>
    );
  }

  if (!pitch) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pitch not found</h2>
            <p className="text-gray-600 mb-8">The pitch you're trying to edit doesn't exist.</p>
            <Button asChild>
              <button onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </button>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={() => navigate(`/pitch/${id}`)}>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <LoadingSpinner text="" />
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Edit your pitch's core details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="name">Startup Name</Label>
                  <Input
                    id="name"
                    value={pitch.name}
                    onChange={(e) => setPitch({ ...pitch, name: e.target.value })}
                    placeholder="Enter startup name"
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={pitch.tagline}
                    onChange={(e) => setPitch({ ...pitch, tagline: e.target.value })}
                    placeholder="Enter tagline"
                  />
                </div>
                <div>
                  <Label htmlFor="about">About Section</Label>
                  <Textarea
                    id="about"
                    value={pitch.about_section}
                    onChange={(e) => setPitch({ ...pitch, about_section: e.target.value })}
                    placeholder="Describe your startup"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={pitch.problem}
                    onChange={(e) => setPitch({ ...pitch, problem: e.target.value })}
                    placeholder="Describe the problem you're solving"
                    className="min-h-[150px]"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={pitch.solution}
                    onChange={(e) => setPitch({ ...pitch, solution: e.target.value })}
                    placeholder="Describe your solution"
                    className="min-h-[150px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>Edit your key features (one per line)</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={pitch.features.join('\n')}
                  onChange={(e) => setPitch({ 
                    ...pitch, 
                    features: e.target.value.split('\n').filter(f => f.trim()) 
                  })}
                  placeholder="Enter each feature on a new line"
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>

            {/* Business Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Target Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={pitch.target_users}
                    onChange={(e) => setPitch({ ...pitch, target_users: e.target.value })}
                    placeholder="Describe your target users"
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monetization</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={pitch.monetization}
                    onChange={(e) => setPitch({ ...pitch, monetization: e.target.value })}
                    placeholder="Describe your revenue model"
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={pitch.market_size}
                    onChange={(e) => setPitch({ ...pitch, market_size: e.target.value })}
                    placeholder="Describe the market opportunity"
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Voice Pitch */}
            <Card>
              <CardHeader>
                <CardTitle>Voice Pitch</CardTitle>
                <CardDescription>The script for your voice presentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={pitch.voice_pitch}
                  onChange={(e) => setPitch({ ...pitch, voice_pitch: e.target.value })}
                  placeholder="Enter your voice pitch script"
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>

            {/* Competition */}
            <Card>
              <CardHeader>
                <CardTitle>Competition Analysis</CardTitle>
                <CardDescription>How you differentiate from competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={pitch.competition}
                  onChange={(e) => setPitch({ ...pitch, competition: e.target.value })}
                  placeholder="Describe your competitive landscape"
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}