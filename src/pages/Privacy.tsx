import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export function Privacy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This includes your name, email address, and any content you create using our platform.`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and comply with legal obligations. We do not sell your personal information to third parties.`
    },
    {
      title: '3.  AI Training and Content Processing',
      content: `Your pitch content may be processed by our AI systems to provide personalized recommendations and improve our services. We implement strict data isolation to ensure your business ideas remain confidential and are not used to train models for other users.`
    },
    {
      title: '4. Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest using industry-standard encryption protocols.`
    },
    {
      title: '5. Data Retention',
      content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your account and associated data at any time through your account settings.`
    },
    {
      title: '6. Sharing of Information',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our platform.`
    },
    {
      title: '7. Your Rights and Choices',
      content: `You have the right to access, update, or delete your personal information. You may also opt out of certain communications and control how your information is used. Contact us to exercise these rights.`
    },
    {
      title: '8. Cookies and Tracking',
      content: `We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.`
    },
    {
      title: '9. International Data Transfers',
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.`
    },
    {
      title: '10. Children\'s Privacy',
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.`
    },
    {
      title: '11. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.`
    },
    {
      title: '12. Contact Us',
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@pitchpal.ai or through our contact form.`
    }
  ];

  const principles = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Data Encryption',
      description: 'All your data is encrypted both in transit and at rest using industry-standard protocols.',
      color: 'text-blue-600'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Transparency',
      description: 'We are transparent about what data we collect and how we use it.',
      color: 'text-emerald-600'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Minimization',
      description: 'We only collect and retain data that is necessary for providing our services.',
      color: 'text-purple-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Your Control',
      description: 'You have full control over your data and can delete it at any time.',
      color: 'text-orange-600'
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
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Security
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Privacy
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Your privacy is fundamental to everything we do. Learn how we protect and handle your data.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-slate-600">
                <strong>Last updated:</strong> January 1, 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide how we handle your data and protect your privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${principle.color}`}>
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                  Questions About Your Privacy?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please don't hesitate to contact our privacy team.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>Email:</strong> privacy@pitchpal.ai</p>
                  <p><strong>Data Protection Officer:</strong> dpo@pitchpal.ai</p>
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