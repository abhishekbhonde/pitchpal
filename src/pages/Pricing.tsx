import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out PitchPal',
      icon: <Zap className="h-6 w-6" />,
      features: [
        '3 AI-generated pitches per month',
        'Basic templates',
        'Email support',
        'Standard voice generation',
        'Basic analytics'
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-slate-500 to-slate-600'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For serious entrepreneurs',
      icon: <Crown className="h-6 w-6" />,
      features: [
        'Unlimited AI-generated pitches',
        'Premium templates & themes',
        'Priority support',
        'Advanced voice generation',
        'Detailed analytics & insights',
        'Export to PowerPoint/PDF',
        'Custom branding',
        'Collaboration tools'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      icon: <Rocket className="h-6 w-6" />,
      features: [
        'Everything in Pro',
        'Team management',
        'Advanced integrations',
        'Custom AI training',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom deployment options',
        'Advanced security features'
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Pro plan comes with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.'
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
              <Zap className="h-4 w-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              Choose Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Start free and scale as you grow. All plans include our core AI pitch generation 
              with no hidden fees or surprise charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`h-full border-0 shadow-xl ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:shadow-2xl transition-all duration-300`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-6 mx-auto`}>
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-lg">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-slate-600 text-lg">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                      size="lg"
                    >
                      <Link to={plan.name === 'Enterprise' ? '/contact' : '/register'}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are already creating amazing pitches with PitchPal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}