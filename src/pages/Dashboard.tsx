import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Plus, FileText, Calendar, TrendingUp, Zap, BarChart3, Users, Target, Sparkles, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Dashboard() {
  const [loading, setLoading] = useState(false);

  // Mock data for demo purposes
  const stats = [
    {
      title: 'Demo Pitches',
      value: 5,
      icon: <FileText className="h-6 w-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%',
      changeColor: 'text-emerald-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'This Month',
      value: 3,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      change: '+8%',
      changeColor: 'text-emerald-600',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Avg. Features',
      value: 5,
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+15%',
      changeColor: 'text-emerald-600',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Success Rate',
      value: '94%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '+3%',
      changeColor: 'text-emerald-600',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'AI Pitch Generator',
      description: 'Create new pitch in minutes',
      icon: <Zap className="h-6 w-6" />,
      gradient: 'from-blue-500 to-blue-600',
      href: '/create'
    },
    {
      title: 'Templates',
      description: 'Browse pitch templates',
      icon: <Target className="h-6 w-6" />,
      gradient: 'from-purple-500 to-purple-600',
      href: '/templates'
    },
    {
      title: 'About Project',
      description: 'Learn about this demo',
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: 'from-emerald-500 to-emerald-600',
      href: '/about'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <LoadingSpinner text="Loading dashboard..." size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="container-custom section-padding-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3"
              >
                Welcome to PitchPal Demo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Experience AI-powered pitch deck generation and explore the platform features
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild className="btn-premium px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl">
                <Link to="/create">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Demo Pitch
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="card-premium hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <div className={stat.color}>{stat.icon}</div>
                      </div>
                      <div className={`text-sm font-semibold ${stat.changeColor} flex items-center bg-emerald-50 px-2 py-1 rounded-full`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link to={action.href}>
                  <div className={`card-premium bg-gradient-to-br ${action.gradient} text-white cursor-pointer group hover-lift hover-glow`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                          {action.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{action.title}</h3>
                          <p className="text-white/80">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Demo Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="card-premium">
              <CardContent className="p-12 lg:p-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <Sparkles className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Experience AI-Powered Pitch Creation
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  This is a demonstration of PitchPal's capabilities. Try creating a pitch to see 
                  how AI can transform your startup ideas into professional presentations.
                </CardDescription>
                <div className="space-y-4">
                  <Button asChild className="btn-premium px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl">
                    <Link to="/create">
                      <Zap className="h-5 w-5 mr-2" />
                      Try the AI Generator
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    No sign-up required • Experience full functionality • Built with React & AI
                  </p>
                </div>
              </CardContent>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}