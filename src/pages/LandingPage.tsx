import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Brain, Mic, Sparkles, CheckCircle, Star, Users, TrendingUp, Shield, Play, Award, Globe, Rocket, Target, BarChart3, Clock, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingPage() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Generation',
      description: 'Advanced AI transforms your ideas into comprehensive pitch decks with market analysis, competitive insights, and investor-ready content.',
      gradient: 'from-blue-500 to-indigo-600',
      delay: 0.1
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Voice Narration',
      description: 'Professional AI-generated voice narration brings your pitch to life with natural speech synthesis and perfect timing.',
      gradient: 'from-purple-500 to-pink-600',
      delay: 0.2
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Complete Ecosystem',
      description: 'Get everything you need: pitch decks, landing pages, business models, financial projections, and go-to-market strategies.',
      gradient: 'from-emerald-500 to-teal-600',
      delay: 0.3
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Entrepreneurs', icon: <Users className="h-5 w-5" />, color: 'text-blue-600' },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="h-5 w-5" />, color: 'text-emerald-600' },
    { number: '$100M+', label: 'Capital Raised', icon: <Award className="h-5 w-5" />, color: 'text-purple-600' },
    { number: '50+', label: 'Countries', icon: <Globe className="h-5 w-5" />, color: 'text-orange-600' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      company: 'Series A - $5M Raised',
      content: 'PitchPal helped us create a compelling narrative that resonated with investors. We closed our Series A in just 6 weeks.',
      rating: 5,
      avatar: 'SC',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Michael Torres',
      role: 'Founder, DataSync',
      company: 'Seed Round - $2M Raised',
      content: 'The AI-generated market analysis was incredibly accurate. It saved us months of research and gave us confidence in our pitch.',
      rating: 5,
      avatar: 'MT',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Co-founder, GreenTech',
      company: 'Pre-Seed - $500K Raised',
      content: 'The voice narration feature made our virtual pitch meetings so much more engaging. Investors loved the professional presentation.',
      rating: 5,
      avatar: 'ER',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Describe Your Vision',
      description: 'Share your startup idea, target market, and business model. Our AI understands context and nuance.',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      step: '02',
      title: 'AI Creates Your Pitch',
      description: 'Advanced algorithms analyze your idea and generate a comprehensive pitch deck with market insights.',
      icon: <Brain className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      step: '03',
      title: 'Launch & Scale',
      description: 'Present to investors with confidence using your professional pitch deck and supporting materials.',
      icon: <Rocket className="h-8 w-8" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ];

  const socialProof = [
    'TechCrunch', 'Forbes', 'Entrepreneur', 'Y Combinator', 'Product Hunt'
  ];

  const benefits = [
    { icon: <Clock className="h-5 w-5" />, text: 'Save 100+ hours of work' },
    { icon: <Target className="h-5 w-5" />, text: 'Investor-ready in minutes' },
    { icon: <BarChart3 className="h-5 w-5" />, text: 'Data-driven insights' },
    { icon: <Shield className="h-5 w-5" />, text: 'Enterprise security' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-12 lg:pt-32 lg:pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                <span className="text-sm font-semibold text-slate-700">Trusted by 10,000+ entrepreneurs</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 transition-colors">
                <TrendingUp className="h-3 w-3 mr-1" />
                95% Success Rate
              </Badge>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Your AI-Powered
              <span className="block gradient-text">
                Pitch Partner
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your startup idea into investor-ready pitch decks, complete with market analysis, 
              financial projections, and AI-generated voice narration—all in minutes, not months.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 text-slate-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50"
                >
                  <div className="text-blue-600">{benefit.icon}</div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
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
                  Create Your Pitch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats Grid */}
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
                  className="card-premium p-6 hover-lift"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className={`${stat.color} mr-2`}>{stat.icon}</div>
                    <div className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.number}</div>
                  </div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-medium text-slate-500 mb-6">Featured in</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
              {socialProof.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
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
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-premium h-full hover-lift hover-glow">
                  <CardContent className="p-8 lg:p-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Simple Process
            </Badge>
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
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} border-2 ${step.borderColor} text-2xl font-bold ${step.color} mb-6 shadow-lg relative`}>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg`}>
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

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Success Stories
            </Badge>
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
                className="group"
              >
                <div className="card-premium h-full hover-lift">
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
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                        <p className="text-slate-600">{testimonial.role}</p>
                        <p className="text-emerald-600 font-semibold text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
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
              Ready to Transform Your
              <span className="block">Startup Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of successful entrepreneurs. Create your first pitch deck 
              in minutes and start building the future you envision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Link to="/create">
                  <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Creating Now
                  <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-glass border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
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