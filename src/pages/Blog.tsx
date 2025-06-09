import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Blog() {
  const posts = [
    {
      title: 'How to Create a Compelling Pitch Deck in 2024',
      excerpt: 'Learn the essential elements that make investors pay attention to your startup pitch.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Pitch Tips',
      featured: true
    },
    {
      title: 'The Psychology Behind Successful Startup Presentations',
      excerpt: 'Understanding what drives investor decisions and how to leverage psychological principles.',
      author: 'Michael Torres',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Psychology'
    },
    {
      title: 'AI in Pitch Creation: The Future is Here',
      excerpt: 'How artificial intelligence is revolutionizing the way entrepreneurs create pitch decks.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      title: 'Common Pitch Deck Mistakes and How to Avoid Them',
      excerpt: 'Learn from the most frequent errors that cause pitch decks to fail with investors.',
      author: 'Alex Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Mistakes'
    },
    {
      title: 'Storytelling Techniques for Startup Founders',
      excerpt: 'Master the art of narrative to make your startup story unforgettable.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Storytelling'
    },
    {
      title: 'Funding Rounds Explained: From Pre-Seed to IPO',
      excerpt: 'A comprehensive guide to understanding different stages of startup funding.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '12 min read',
      category: 'Funding'
    }
  ];

  const categories = ['All', 'Pitch Tips', 'Psychology', 'Technology', 'Mistakes', 'Storytelling', 'Funding'];

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
              PitchPal Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
              Insights for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Successful Entrepreneurs
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Expert advice, industry insights, and practical tips to help you create compelling 
              pitches and grow your startup successfully.
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

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-16">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="bg-white text-purple-600 mb-4">
                      Featured Post
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      {posts[0].title}
                    </h2>
                    <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-blue-100 mb-6">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {posts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(posts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {posts[0].readTime}
                      </div>
                    </div>
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="h-16 w-16 text-white/60" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                      <Zap className="h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-3">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get the latest insights, tips, and strategies delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}