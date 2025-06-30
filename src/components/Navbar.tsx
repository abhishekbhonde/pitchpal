import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Features', path: '/#features' },
    { name: 'How it Works', path: '/#how-it-works' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Templates', path: '/templates' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text">
                PitchPal
              </span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">AI Co-Founder</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              >
                {item.name}
              </Link>
            ))}

            {/* Built with Bolt.new Badge */}
            <motion.a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Zap className="h-3 w-3" />
              <span>Built with Bolt.new</span>
            </motion.a>
          </div>

          {/* Demo Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="btn-premium">
              <Link to="/create">Try Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-muted/50 rounded-lg"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/50 py-4 bg-background/95 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-2">
                {/* Regular nav items */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}

                {/* Built with Bolt.new Badge - Mobile */}
                <div className="px-4 py-2">
                  <a
                    href="https://bolt.new"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Built with Bolt.new</span>
                  </a>
                </div>
                
                {/* Demo button for mobile */}
                <div className="px-4 py-2 border-t border-border/50 mt-2">
                  <Button
                    asChild
                    className="w-full btn-premium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/create">Try Demo</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}