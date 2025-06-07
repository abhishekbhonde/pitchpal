import { GeneratedPitch } from '@/types/pitch';

// Mock AI pitch generator for demonstration
export async function generatePitchFromIdea(idea: string): Promise<GeneratedPitch> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Extract key concepts from the idea for more relevant generation
  const isEcommerce = idea.toLowerCase().includes('shop') || idea.toLowerCase().includes('buy') || idea.toLowerCase().includes('sell');
  const isAI = idea.toLowerCase().includes('ai') || idea.toLowerCase().includes('artificial') || idea.toLowerCase().includes('machine learning');
  const isSaaS = idea.toLowerCase().includes('software') || idea.toLowerCase().includes('platform') || idea.toLowerCase().includes('app');

  let category = 'Tech Startup';
  if (isEcommerce) category = 'E-commerce';
  if (isAI) category = 'AI/ML';
  if (isSaaS) category = 'SaaS';

  // Generate contextual content based on the idea
  const nameWords = idea.split(' ').slice(0, 3);
  const baseName = nameWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  
  return {
    name: baseName.length > 15 ? `${baseName.slice(0, 12)}Pro` : `${baseName}Hub`,
    tagline: `Revolutionizing ${category.toLowerCase()} with innovative solutions`,
    hero_section: {
      headline: `Transform Your ${category} Experience`,
      subtext: `Discover the future of ${category.toLowerCase()} with our cutting-edge platform designed to solve real-world problems.`,
      call_to_action: 'Get Started Today'
    },
    features: [
      'Intuitive user interface designed for maximum productivity',
      'Advanced analytics and real-time insights dashboard',
      'Seamless integration with existing tools and workflows',
      'Enterprise-grade security and data protection',
      '24/7 customer support and onboarding assistance'
    ],
    about_section: `Our platform addresses the core challenges in ${category.toLowerCase()} by providing innovative solutions that streamline operations, enhance user experience, and drive measurable results. Built with cutting-edge technology and user-centric design principles.`,
    problem: `Traditional ${category.toLowerCase()} solutions are often complex, expensive, and fail to meet the evolving needs of modern businesses. Users struggle with outdated interfaces, limited functionality, and poor integration capabilities.`,
    solution: `We've developed a comprehensive platform that simplifies ${category.toLowerCase()} operations through automation, intelligent features, and seamless user experience. Our solution reduces complexity while increasing efficiency and ROI.`,
    target_users: `Small to medium businesses, entrepreneurs, and enterprise teams looking for modern ${category.toLowerCase()} solutions that scale with their growth.`,
    voice_pitch: `Imagine a world where ${category.toLowerCase()} operations are effortless, intuitive, and highly effective. Our platform makes this vision a reality by combining powerful features with elegant design. Join thousands of satisfied customers who have transformed their business with our solution.`,
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'CEO, InnovateCorp',
        quote: 'This platform has completely transformed how we operate. The results speak for themselves.'
      },
      {
        name: 'Michael Chen',
        role: 'Founder, TechFlow',
        quote: 'Incredible value and functionality. Our productivity has increased by 300%.'
      },
      {
        name: 'Emma Rodriguez',
        role: 'Operations Director, ScaleUp',
        quote: 'The best investment we\'ve made for our business. Highly recommend!'
      }
    ],
    monetization: 'Freemium model with premium subscriptions starting at $29/month, plus enterprise plans and professional services.',
    market_size: `The global ${category.toLowerCase()} market is valued at $12.4 billion and growing at 15% annually, presenting significant opportunity for innovation.`,
    competition: `While established players exist, our unique approach to user experience and innovative features set us apart in the competitive landscape.`
  };
}