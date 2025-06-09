import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Users, Target, Award, ArrowRight, Heart, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function About() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former Y Combinator partner with 10+ years in startup acceleration.',
      avatar: 'AC'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'AI researcher from Stanford, previously at OpenAI and Google.',
      avatar: 'SR'
    },
    {
      name: 'Michael Kim',
      role: 'Head of Product',
      bio: 'Product leader with experience at Stripe and Figma.',
      avatar: 'MK'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Design director with a passion for user-centered experiences.',
      avatar: 'EJ'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI to help entrepreneurs succeed.',
      color: 'text-yellow-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Entrepreneur-Centric',
      description: 'Every feature we build is designed with the entrepreneur\'s journey in mind.',
      color: 'text-blue-600'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion for Impact',
      description: 'We believe great ideas deserve great presentations to change the world.',
      color: 'text-red-600'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Accessibility',
      description: 'Making professional pitch creation accessible to entrepreneurs worldwide.',
      color: 'text-green-600'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Entrepreneurs Served' },
    { number: '$100M+', label: 'Capital Raised' },
    { number: '50+', label: 'Countries' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2">
              <Zap className="h-4 w-4 mr-2" />
              About PitchPal
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              Empowering the Next
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Generation of Entrepreneurs
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We believe every great idea deserves a great presentation. PitchPal combines cutting-edge AI 
              with deep startup expertise to help entrepreneurs transform their visions into investor-ready pitches.
            </p>
            
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
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We started PitchPal because we saw too many brilliant entrepreneurs struggle to 
                communicate their vision effectively. Great ideas were being overlooked not because 
                they lacked merit, but because they lacked compelling presentation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our mission is to democratize access to professional pitch creation, giving every 
                entrepreneur the tools they need to tell their story with confidence and clarity.
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Link to="/create">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <Target className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  A world where every entrepreneur has the tools and confidence to share their 
                  vision with the world, regardless of their background or resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${value.color}`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate entrepreneurs and technologists dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are already using PitchPal to bring their visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}