import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PitchCard } from '@/components/PitchCard';
import { Plus, FileText, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SavedPitch } from '@/types/pitch';
import { motion } from 'framer-motion';

export function Dashboard() {
  const [pitches, setPitches] = useState<SavedPitch[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from Supabase
    const savedPitches = JSON.parse(localStorage.getItem('pitches') || '[]');
    setPitches(savedPitches);
  }, []);

  const stats = [
    {
      title: 'Total Pitches',
      value: pitches.length,
      icon: <FileText className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'This Month',
      value: pitches.filter(p => {
        const createdDate = new Date(p.created_at);
        const currentDate = new Date();
        return createdDate.getMonth() === currentDate.getMonth() && 
               createdDate.getFullYear() === currentDate.getFullYear();
      }).length,
      icon: <Calendar className="h-5 w-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Avg. Features',
      value: pitches.length > 0 ? Math.round(pitches.reduce((acc, p) => acc + p.features.length, 0) / pitches.length) : 0,
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Pitches
              </h1>
              <p className="text-lg text-gray-600">
                Manage and view all your AI-generated startup pitches
              </p>
            </div>
            <Button asChild className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/create">
                <Plus className="h-4 w-4 mr-2" />
                Create New Pitch
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pitches */}
          {pitches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pitches.map((pitch, index) => (
                <PitchCard key={pitch.id} pitch={pitch} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    No pitches yet
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6 max-w-md mx-auto">
                    Get started by creating your first AI-powered startup pitch. Transform your ideas into professional presentations in minutes.
                  </CardDescription>
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Link to="/create">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Pitch
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}