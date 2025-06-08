import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PitchCard } from '@/components/PitchCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Plus, FileText, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SavedPitch } from '@/types/pitch';
import { useAuth } from '@/contexts/AuthContext';
import { fetchUserPitches } from '@/lib/supabasePitches';
import { motion } from 'framer-motion';

export function Dashboard() {
  const [pitches, setPitches] = useState<SavedPitch[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const loadPitches = async () => {
      if (user?.email) {
        setLoading(true);
        const userPitches = await fetchUserPitches(user.email);
        setPitches(userPitches);
        setLoading(false);
      }
    };

    loadPitches();
  }, [user]);

  const stats = [
    {
      title: 'Total Pitches',
      value: pitches.length,
      icon: <FileText className="h-5 w-5 lg:h-6 lg:w-6" />,
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
      icon: <Calendar className="h-5 w-5 lg:h-6 lg:w-6" />,
      color: 'text-green-600'
    },
    {
      title: 'Avg. Features',
      value: pitches.length > 0 ? Math.round(pitches.reduce((acc, p) => acc + p.features.length, 0) / pitches.length) : 0,
      icon: <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6" />,
      color: 'text-purple-600'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <LoadingSpinner text="Loading your pitches..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-12 space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Your Pitches
              </h1>
              <p className="text-base lg:text-xl text-gray-600">
                Manage and view all your AI-generated startup pitches
              </p>
            </div>
            <Button asChild className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 lg:py-4 px-6 lg:px-8 text-base lg:text-lg">
              <Link to="/create">
                <Plus className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                Create New Pitch
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-6 lg:mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 lg:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm lg:text-base font-medium text-gray-600 mb-1 lg:mb-2">
                          {stat.title}
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gray-100 ${stat.color}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                <CardContent className="p-8 lg:p-16 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <FileText className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 lg:mb-4">
                    No pitches yet
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6 lg:mb-8 max-w-md mx-auto text-base lg:text-lg leading-relaxed">
                    Get started by creating your first AI-powered startup pitch. Transform your ideas into professional presentations in minutes.
                  </CardDescription>
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 lg:py-4 px-6 lg:px-8 text-base lg:text-lg">
                    <Link to="/create">
                      <Plus className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
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