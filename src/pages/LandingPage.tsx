import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Brain, Mic, Sparkles, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingPage() {
  const features = [
    {
      icon: <Brain className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: 'AI-Powered Generation',
      description: 'Transform your raw ideas into professional pitch decks instantly using advanced AI.'
    },
    {
      icon: <Mic className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: 'Voice Narration',
      description: 'Get AI-generated voice pitches that bring your startup story to life.'
    },
    {
      icon: <Sparkles className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: 'Complete Package',
      description: 'Landing pages, business models, target audience analysis, and more.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Startup Founder',
      content: 'PitchPal helped me create a professional pitch in minutes. Got funded in my first meeting!',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager',
      content: 'The AI-generated content was surprisingly accurate and saved me weeks of work.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Entrepreneur',
      content: 'Love the voice narration feature. It made my pitch presentation so much more engaging.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 lg:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-2 text-sm lg:text-base">
              <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
              AI-Powered Pitch Generation
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Your AI Startup
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline"> Co-Founder</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your startup idea into a complete launch package with AI-generated pitch decks, 
              landing pages, voice narration, and business strategies in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                <Link to="/create">
                  Create My Pitch
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 border-2">
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Everything You Need to Launch
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From idea to investor-ready pitch deck, we've got you covered with cutting-edge AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl text-white mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
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
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Three simple steps to transform your startup idea into a professional pitch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'Describe Your Idea',
                description: 'Simply tell us about your startup idea in plain English. No technical jargon needed.'
              },
              {
                step: '2',
                title: 'AI Creates Your Pitch',
                description: 'Our AI analyzes your idea and generates a complete pitch deck with all essential components.'
              },
              {
                step: '3',
                title: 'Launch & Present',
                description: 'Get your pitch deck, landing page, voice narration, and start presenting to investors.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-xl lg:text-2xl font-bold mb-4 lg:mb-6 mx-auto shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed px-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Loved by Entrepreneurs
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Join thousands of founders who've successfully launched their startups with PitchPal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center space-x-1 mb-4 lg:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 lg:mb-6 italic text-base lg:text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-base lg:text-lg">{testimonial.name}</p>
                      <p className="text-sm lg:text-base text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white shadow-2xl">
              <CardContent className="p-8 lg:p-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                  Ready to Build Your Startup?
                </h2>
                <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of entrepreneurs who've transformed their ideas into successful businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-white text-purple-600 hover:bg-gray-100">
                    <Link to="/create">
                      Start Creating Now
                      <Zap className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600">
                    <Link to="/dashboard">
                      View Dashboard
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}