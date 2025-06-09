import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PitchCard } from '@/components/PitchCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Plus, FileText, Calendar, TrendingUp, Zap, BarChart3, Users, DollarSign } from 'lucide-react';
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
      icon: <FileText className="h-6 w-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%',
      changeColor: 'text-emerald-600'
    },
    {
      title: 'This Month',
      value: pitches.filter(p => {
        const createdDate = new Date(p.created_at);
        const currentDate = new Date();
        return createdDate.getMonth() === currentDate.getMonth() && 
               createdDate.getFullYear() === currentDate.getFullYear();
      }).length,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      change: '+8%',
      changeColor: 'text-emerald-600'
    },
    {
      title: 'Avg. Features',
      value: pitches.length > 0 ? Math.round(pitches.reduce((acc, p) => acc + p.features.length, 0) / pitches.length) : 0,
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+15%',
      changeColor: 'text-emerald-600'
    },
    {
      title: 'Success Rate',
      value: '94%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '+3%',
      changeColor: 'text-emerald-600'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <LoadingSpinner text="Loading your pitches..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 space-y-6 lg:space-y-0">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
                Welcome back, {user?.user_metadata?.full_name || 'Entrepreneur'}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Manage your AI-generated pitch decks and track your startup journey
              </p>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/create">
                <Plus className="h-5 w-5 mr-2" />
                Create New Pitch
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                        <div className={stat.color}>{stat.icon}</div>
                      </div>
                      <div className={`text-sm font-semibold ${stat.changeColor} flex items-center`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 text-white cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AI Pitch Generator</h3>
                      <p className="text-blue-100">Create new pitch in minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Analytics</h3>
                      <p className="text-emerald-100">Track pitch performance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Investor Network</h3>
                      <p className="text-purple-100">Connect with investors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Pitches Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Your Pitch Decks</h2>
              {pitches.length > 0 && (
                <Button variant="outline" className="border-2">
                  View All
                </Button>
              )}
            </div>

            {pitches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {pitches.map((pitch, index) => (
                  <PitchCard key={pitch.id} pitch={pitch} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-12 lg:p-16 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      Ready to Create Your First Pitch?
                    </CardTitle>
                    <CardDescription className="text-slate-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                      Transform your startup idea into a professional, investor-ready pitch deck 
                      with the power of AI. Get started in just a few clicks.
                    </CardDescription>
                    <div className="space-y-4">
                      <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link to="/create">
                          <Plus className="h-5 w-5 mr-2" />
                          Create Your First Pitch
                        </Link>
                      </Button>
                      <p className="text-sm text-slate-500">
                        No credit card required • Generate unlimited pitches
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}