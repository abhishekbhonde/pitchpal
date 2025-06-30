import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Brain, Mic, CheckCircle, Star, Users, TrendingUp, Play, Clock, Target, BarChart3, Lightbulb, Rocket, FileText, Presentation as PresentationChart } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingPage() {
  const steps = [
    {
      step: '1',
      title: 'Describe Your Idea',
      description: 'Tell us about your startup in plain English',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      step: '2',
      title: 'AI Creates Your Pitch',
      description: 'Get a complete investor-ready presentation',
      icon: <Brain className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      step: '3',
      title: 'Present & Raise Funds',
      description: 'Use your professional pitch to secure investment',
      icon: <PresentationChart className="h-8 w-8" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Complete Pitch Decks',
      description: 'Problem, solution, market analysis, financials - everything investors want to see'
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: 'AI Voice Narration',
      description: 'Professional voice-over for your presentations and virtual meetings'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Market Insights',
      description: 'AI-powered market research and competitive analysis included'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Investor-Ready',
      description: 'Templates and content optimized for what investors actually want'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      amount: '$2M Raised',
      content: 'PitchPal helped us create a compelling story that investors loved. Closed our seed round in 4 weeks.',
      avatar: 'SC'
    },
    {
      name: 'Michael Torres',
      role: 'Founder, DataSync',
      amount: '$5M Series A',
      content: 'The market analysis was spot-on. Saved us months of research and gave us confidence.',
      avatar: 'MT'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Co-founder, GreenTech',
      amount: '$1M Pre-Seed',
      content: 'Virtual pitch meetings became so much more engaging with the AI voice feature.',
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Entrepreneurs', icon: <Users className="h-5 w-5" /> },
    { number: '$100M+', label: 'Capital Raised', icon: <TrendingUp className="h-5 w-5" /> },
    { number: '95%', label: 'Success Rate', icon: <Target className="h-5 w-5" /> },
    { number: '< 10 min', label: 'Time to Pitch', icon: <Clock className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {['SC', 'MT', 'ER'].map((initial, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                    >
                      {initial}
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">10,000+ entrepreneurs funded</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                $100M+ raised
              </Badge>
            </motion.div>
            
            {/* Main Headline - Simple without animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Turn Your Startup Idea Into
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Investor-Ready Pitches
              </span>
            </motion.h1>
            
            {/* Clear Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-xl lg:text-2xl text-slate-600 mb-6 leading-relaxed">
                <strong>AI creates complete pitch decks in minutes.</strong> Just describe your startup idea and get professional presentations with market analysis, financial projections, and voice narration.
              </p>
              
              {/* What You Get */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: <FileText className="h-5 w-5" />, text: 'Complete Pitch Deck' },
                  { icon: <BarChart3 className="h-5 w-5" />, text: 'Market Analysis' },
                  { icon: <Mic className="h-5 w-5" />, text: 'AI Voice Narration' },
                  { icon: <Target className="h-5 w-5" />, text: 'Investor Templates' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-2 text-slate-600 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200/50 text-sm"
                  >
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button asChild size="lg" className="btn-premium px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl group">
                <Link to="/create">
                  <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Try Demo Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See Example Pitch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-blue-600 mr-2">{stat.icon}</div>
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900">{stat.number}</div>
                  </div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Simple 3 Steps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              From Idea to Investment
              <span className="block text-blue-600">In 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No design skills needed. No market research required. Just your startup idea.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-16 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform translate-x-8" />
                )}
                
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.bgColor} border-2 border-slate-200 mb-6 shadow-lg relative`}>
                  <span className="text-2xl font-bold text-slate-700">
                    {step.step}
                  </span>
                  <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything Investors Want to See
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI creates comprehensive pitch decks with all the essential elements that investors expect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Real Results from Real Entrepreneurs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of founders who've successfully raised capital using PitchPal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{testimonial.name}</p>
                          <p className="text-slate-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 font-semibold">
                        {testimonial.amount}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block">AI-Powered Pitch Creation?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Try our demo and see how AI can transform your startup ideas into professional, 
              investor-ready pitch decks in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Link to="/create">
                  <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Try Demo Now - Free
                  <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-blue-100 text-sm">
                ✓ No sign-up required ✓ Full feature access ✓ Professional results in minutes
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}