import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      type: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@pitchpal.ai',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm PST',
      value: '+1 (555) 123-4567',
      color: 'text-emerald-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: 'San Francisco, CA',
      color: 'text-purple-600'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Response Time',
      description: 'We typically respond within',
      value: '24 hours',
      color: 'text-orange-600'
    }
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
              <MessageCircle className="h-4 w-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              We'd Love to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about PitchPal? Need help with your pitch? Want to explore enterprise options? 
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${info.color}`}>
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 mb-3">
                      {info.description}
                    </p>
                    <p className="font-semibold text-slate-900">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Inquiry Type</Label>
                        <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      How quickly can I get started?
                    </h4>
                    <p className="text-slate-600">
                      You can start creating pitches immediately after signing up. No setup required!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Do you offer custom enterprise solutions?
                    </h4>
                    <p className="text-slate-600">
                      Yes! We offer custom solutions for teams and enterprises. Contact our sales team to learn more.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Can I get help with my pitch strategy?
                    </h4>
                    <p className="text-slate-600">
                      Absolutely! Our team includes experienced entrepreneurs who can provide strategic guidance.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-xl font-bold text-slate-900">
                      Need Immediate Help?
                    </h4>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Check out our comprehensive help center with tutorials, guides, and FAQs.
                  </p>
                  <Button variant="outline" className="w-full">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}