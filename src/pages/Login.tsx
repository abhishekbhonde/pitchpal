import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    const result = await signIn(email, password);
    setIsLoading(false);

    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PitchPal
                </span>
                <span className="text-sm text-slate-500 font-medium -mt-1">AI Co-Founder</span>
              </div>
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Sign in to continue building amazing pitches with AI
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold text-slate-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-12 h-12 text-base border-2 border-slate-200 focus:border-blue-500 transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-base font-semibold text-slate-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-12 pr-12 h-12 text-base border-2 border-slate-200 focus:border-blue-500 transition-colors"
                      required
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-slate-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading || !email || !password}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Sign In</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-slate-600">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">
                  By signing in, you agree to our{' '}
                  <Link to="/terms" className="underline hover:text-slate-700">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}