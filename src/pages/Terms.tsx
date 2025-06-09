import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Terms() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using PitchPal ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: '2. Description of Service',
      content: `PitchPal is an AI-powered platform that helps entrepreneurs create professional pitch decks and presentations. Our service includes AI content generation, templates, voice synthesis, and collaboration tools.`
    },
    {
      title: '3. User Accounts',
      content: `To access certain features of the Service, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`
    },
    {
      title: '4. Acceptable Use',
      content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to create content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.`
    },
    {
      title: '5. Intellectual Property',
      content: `You retain ownership of all content you create using our Service. PitchPal retains ownership of the platform, AI models, and underlying technology. You grant us a limited license to process your content to provide the Service.`
    },
    {
      title: '6. Privacy and Data Protection',
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using PitchPal, you agree to the collection and use of information in accordance with our Privacy Policy.`
    },
    {
      title: '7. Subscription and Billing',
      content: `Some features of the Service require a paid subscription. Subscription fees are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, but no refunds will be provided for partial periods.`
    },
    {
      title: '8. AI-Generated Content',
      content: `Our AI generates content based on your inputs and training data. While we strive for accuracy, AI-generated content may contain errors or inaccuracies. You are responsible for reviewing and verifying all content before use.`
    },
    {
      title: '9. Limitation of Liability',
      content: `PitchPal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      title: '10. Termination',
      content: `We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.`
    },
    {
      title: '11. Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.`
    },
    {
      title: '12. Contact Information',
      content: `If you have any questions about these Terms, please contact us at legal@pitchpal.ai or through our contact form on the website.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2">
              <FileText className="h-4 w-4 mr-2" />
              Legal Information
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Terms of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Please read these terms carefully before using PitchPal
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-slate-600">
                <strong>Last updated:</strong> January 1, 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  If you have any questions about these Terms of Service, please don't hesitate to contact our legal team.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>Email:</strong> legal@pitchpal.ai</p>
                  <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}