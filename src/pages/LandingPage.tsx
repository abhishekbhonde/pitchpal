import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Brain, Mic, Sparkles, CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingPage() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Generation',
      description: 'Advanced AI transforms your ideas into comprehensive pitch decks with market analysis, competitive insights, and investor-ready content.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Voice Narration',
      description: 'Professional AI-generated voice narration brings your pitch to life with natural speech synthesis and perfect timing.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Complete Ecosystem',
      description: 'Get everything you need: pitch decks, landing pages, business models, financial projections, and go-to-market strategies.',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Pitches Created', icon: <TrendingUp className="h-5 w-5" /> },
    { number: '95%', label: 'Success Rate', icon: <CheckCircle className="h-5 w-5" /> },
    { number: '500+', label: 'Funded Startups', icon: <Users className="h-5 w-5" /> },
    { number: '24/7', label: 'AI Support', icon: <Shield className="h-5 w-5" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      company: 'Series A - $5M Raised',
      content: 'PitchPal helped us create a compelling narrative that resonated with investors. We closed our Series A in just 6 weeks.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Torres',
      role: 'Founder, DataSync',
      company: 'Seed Round - $2M Raised',
      content: 'The AI-generated market analysis was incredibly accurate. It saved us months of research and gave us confidence in our pitch.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Co-founder, GreenTech',
      company: 'Pre-Seed - $500K Raised',
      content: 'The voice narration feature made our virtual pitch meetings so much more engaging. Investors loved the professional presentation.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Describe Your Vision',
      description: 'Share your startup idea, target market, and business model. Our AI understands context and nuance.',
      color: 'text-blue-600'
    },
    {
      step: '02',
      title: 'AI Creates Your Pitch',
      description: 'Advanced algorithms analyze your idea and generate a comprehensive pitch deck with market insights.',
      color: 'text-purple-600'
    },
    {
      step: '03',
      title: 'Launch & Scale',
      description: 'Present to investors with confidence using your professional pitch deck and supporting materials.',
      color: 'text-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-2 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Entrepreneurs
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Your AI-Powered
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Pitch Partner
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your startup idea into investor-ready pitch decks, complete with market analysis, 
              financial projections, and AI-generated voice narration—all in minutes, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/create">
                  Create Your Pitch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-blue-600 mr-2">{stat.icon}</div>
                    <div className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.number}</div>
                  </div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to
              <span className="block text-blue-600">Raise Capital</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From initial concept to investor presentation, our AI platform provides all the tools 
              and insights you need to build a compelling case for your startup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-8 lg:p-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              From Idea to Investment
              <span className="block text-purple-600">In Three Steps</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process transforms your startup concept into a professional, 
              investor-ready presentation that tells your story compellingly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center lg:text-left"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform translate-x-8" />
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 text-2xl font-bold ${step.color} mb-6 shadow-lg`}>
                  {step.step}
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

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Successful
              <span className="block text-emerald-600">Entrepreneurs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of founders who've successfully raised capital using PitchPal. 
              Our platform has helped secure over $100M in funding.
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                        <p className="text-slate-600">{testimonial.role}</p>
                        <p className="text-emerald-600 font-semibold text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block">Startup Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of successful entrepreneurs. Create your first pitch deck 
              in minutes and start building the future you envision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/create">
                  Start Creating Now
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-blue-100 text-sm">
                No credit card required • Free to start • 14-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}