import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, Book, Video, MessageCircle, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Help() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Getting Started',
      description: 'Learn the basics of creating your first pitch',
      articles: 12,
      color: 'text-blue-600'
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      articles: 8,
      color: 'text-purple-600'
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      articles: 15,
      color: 'text-emerald-600'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Best Practices',
      description: 'Tips from successful entrepreneurs',
      articles: 10,
      color: 'text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How do I create my first pitch deck?',
      answer: 'Creating your first pitch deck is easy! Simply click on "Create Pitch" in your dashboard, describe your startup idea in detail, and our AI will generate a comprehensive pitch deck for you. You can then customize and edit any section to match your vision.'
    },
    {
      question: 'Can I edit the AI-generated content?',
      answer: 'Absolutely! All AI-generated content is fully editable. You can modify text, add or remove sections, change the order of slides, and customize the design to match your brand. Think of the AI as your starting point, not your endpoint.'
    },
    {
      question: 'How does the voice generation feature work?',
      answer: 'Our voice generation feature uses advanced AI to create natural-sounding narration for your pitch. Simply provide the script (or use our AI-generated one), select your preferred voice style, and we\'ll create a professional audio presentation you can use for virtual meetings or practice sessions.'
    },
    {
      question: 'What file formats can I export my pitch to?',
      answer: 'You can export your pitch deck to multiple formats including PowerPoint (.pptx), PDF, and Google Slides. Pro users also get access to additional formats and high-resolution exports suitable for printing.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Yes, we take data security very seriously. All your pitch data is encrypted both in transit and at rest. We never share your business ideas or pitch content with third parties. You maintain full ownership of your intellectual property.'
    },
    {
      question: 'Can I collaborate with my team on pitches?',
      answer: 'Pro and Enterprise plans include collaboration features that allow you to invite team members to view, edit, and comment on your pitches. You can control permissions and track changes made by different team members.'
    },
    {
      question: 'How accurate is the market analysis feature?',
      answer: 'Our AI draws from a vast database of market research, industry reports, and startup data to provide relevant market insights. While it\'s a great starting point, we always recommend validating the information with your own research and industry expertise.'
    },
    {
      question: 'What if I need help with my pitch strategy?',
      answer: 'Beyond the AI-generated content, we offer strategic guidance through our help center, blog articles, and for Enterprise customers, access to pitch consultants who can provide personalized advice on your pitch strategy and presentation approach.'
    }
  ];

  const quickLinks = [
    { title: 'Create Your First Pitch', href: '/create' },
    { title: 'Understanding AI Features', href: '#' },
    { title: 'Customizing Your Pitch', href: '#' },
    { title: 'Exporting and Sharing', href: '#' },
    { title: 'Account Settings', href: '/settings' },
    { title: 'Billing and Subscriptions', href: '#' }
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
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              How Can We
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Help You Today?
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Find answers to your questions, learn how to use PitchPal effectively, 
              and get the most out of our AI-powered pitch creation platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="pl-12 h-14 text-lg border-2 border-slate-200 focus:border-blue-500 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find the help you need organized by topic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="text-sm">
                      {category.articles} articles
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Quick Links
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 group"
                    >
                      <span className="font-medium text-slate-900 group-hover:text-blue-600">
                        {link.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Need Personal Help?
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Can't find what you're looking for? Our support team is here to help you succeed with your pitch creation journey.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Link to="/contact">
                        Contact Support
                        <MessageCircle className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">
                        Schedule a Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about PitchPal
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}