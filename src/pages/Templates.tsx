import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, Star, Zap, TrendingUp, Users, Rocket, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Templates() {
  const templates = [
    {
      id: 1,
      name: 'SaaS Startup Template',
      description: 'Perfect for software-as-a-service businesses looking to showcase their platform and growth metrics.',
      category: 'SaaS',
      rating: 4.9,
      downloads: 1250,
      preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      icon: <Rocket className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-600',
      features: ['Revenue Metrics', 'User Analytics', 'Product Demo', 'Market Analysis']
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      description: 'Ideal for online retail and marketplace startups with focus on customer acquisition and sales.',
      category: 'E-commerce',
      rating: 4.8,
      downloads: 980,
      preview: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-emerald-500 to-teal-600',
      features: ['Sales Funnel', 'Customer Journey', 'Inventory Management', 'Growth Strategy']
    },
    {
      id: 3,
      name: 'AI/ML Technology',
      description: 'Designed for artificial intelligence and machine learning startups to explain complex technology.',
      category: 'Technology',
      rating: 4.9,
      downloads: 1100,
      preview: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      features: ['Algorithm Explanation', 'Data Visualization', 'Use Cases', 'Technical Architecture']
    },
    {
      id: 4,
      name: 'Healthcare Innovation',
      description: 'Tailored for healthcare and medical technology startups with regulatory considerations.',
      category: 'Healthcare',
      rating: 4.7,
      downloads: 750,
      preview: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      icon: <Users className="h-8 w-8" />,
      color: 'from-red-500 to-rose-600',
      features: ['Clinical Trials', 'Regulatory Pathway', 'Patient Outcomes', 'Market Access']
    },
    {
      id: 5,
      name: 'Fintech Solution',
      description: 'Built for financial technology companies focusing on security, compliance, and user trust.',
      category: 'Fintech',
      rating: 4.8,
      downloads: 920,
      preview: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-600',
      features: ['Security Features', 'Compliance Framework', 'User Trust', 'Financial Metrics']
    },
    {
      id: 6,
      name: 'Social Impact Startup',
      description: 'Perfect for startups focused on social good and environmental impact with mission-driven approach.',
      category: 'Social Impact',
      rating: 4.6,
      downloads: 650,
      preview: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg',
      icon: <Users className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      features: ['Impact Metrics', 'Social Mission', 'Sustainability', 'Community Engagement']
    }
  ];

  const categories = ['All', 'SaaS', 'E-commerce', 'Technology', 'Healthcare', 'Fintech', 'Social Impact'];

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
              Pitch Templates
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              Professional Templates
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                For Every Industry
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Choose from our collection of professionally designed pitch deck templates, 
              each tailored for specific industries and optimized for investor presentations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Badge 
                  variant={index === 0 ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    index === 0 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'hover:bg-slate-100'
                  }`}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  {/* Template Preview */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-90`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white">
                        {template.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-slate-900">
                        {template.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {template.name}
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {template.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {template.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{template.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{template.downloads} downloads</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3 mt-auto">
                      <Button variant="outline" className="flex-1" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button asChild className={`flex-1 bg-gradient-to-r ${template.color} hover:opacity-90 text-white`} size="sm">
                        <Link to="/create">
                          Use Template
                        </Link>
                      </Button>
                    </div>
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
              Can't Find the Perfect Template?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Our AI can create a custom pitch deck tailored specifically to your industry and business model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/create">
                  Create Custom Pitch
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/contact">
                  Request Template
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}