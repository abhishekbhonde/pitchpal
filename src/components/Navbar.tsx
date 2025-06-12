import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, Zap, User, LogOut, Settings, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navItems = [
    { name: 'Features', path: '/#features' },
    { name: 'How it Works', path: '/#how-it-works' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Templates', path: '/templates' },
  ];

  const userNavItems = [
    { name: 'Create Pitch', path: '/create', icon: <Zap className="h-4 w-4" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <BarChart3 className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

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
            
            {user && (
              <>
                {userNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg flex items-center space-x-2 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-border hover:ring-primary/50 transition-all duration-200">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                        {getInitials(user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
                  <div className="flex items-center justify-start gap-3 p-3 bg-muted/50 rounded-lg mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {getInitials(user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-semibold text-sm text-foreground">{user.user_metadata?.full_name || 'User'}</p>
                      <p className="w-[180px] truncate text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/dashboard" className="flex items-center">
                      <BarChart3 className="mr-3 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-3 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-3 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="mr-3 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button asChild variant="ghost" className="text-foreground/80 hover:text-foreground">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="btn-premium">
                  <Link to="/register">Get Started Free</Link>
                </Button>
              </div>
            )}
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
                
                {/* User nav items (if logged in) */}
                {user && userNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Auth section for mobile */}
                {user ? (
                  <div className="px-4 py-2 border-t border-border/50 mt-2">
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-muted/50 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                          {getInitials(user.email || '')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{user.user_metadata?.full_name || 'User'}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    
                    {/* Mobile user menu items */}
                    <div className="space-y-2 mb-4">
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      >
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                      <Link
                        to="/settings"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </div>
                    
                    <Button
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="px-4 py-2 border-t border-border/50 mt-2 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/login">Sign In</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full btn-premium"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/register">Get Started Free</Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}