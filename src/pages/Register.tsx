import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    if (password.length < 6) {
      return;
    }

    setIsLoading(true);
    const result = await signUp(email, password, fullName);
    setIsLoading(false);

    if (result.success) {
      navigate('/login');
    }
  };

  const passwordsMatch = password === confirmPassword;
  const isPasswordValid = password.length >= 6;

  const benefits = [
    'Unlimited AI-generated pitch decks',
    'Professional voice narration',
    'Market analysis & insights',
    'Investor-ready templates',
    '24/7 AI support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left side - Benefits */}
          <div className="hidden lg:block space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center space-x-3 group mb-8">
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
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Join 10,000+ Successful Entrepreneurs
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform your startup ideas into investor-ready pitch decks with the power of AI.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-1 bg-emerald-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <p className="text-slate-600 italic">
                "PitchPal helped us raise $2M in our seed round. The AI-generated pitch was incredibly professional and compelling."
              </p>
              <div className="mt-3">
                <p className="font-semibold text-slate-900">Sarah Chen</p>
                <p className="text-sm text-slate-500">CEO, TechFlow</p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Create Your Account
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Start building amazing pitches with AI in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-base font-semibold text-slate-700">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="pl-12 h-12 text-base border-2 border-slate-200 focus:border-blue-500 transition-colors"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

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
                        placeholder="Create a password"
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
                    {password && !isPasswordValid && (
                      <p className="text-sm text-red-600">
                        Password must be at least 6 characters long
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-base font-semibold text-slate-700">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="pl-12 pr-12 h-12 text-base border-2 border-slate-200 focus:border-blue-500 transition-colors"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-slate-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-slate-400" />
                        )}
                      </Button>
                    </div>
                    {confirmPassword && !passwordsMatch && (
                      <p className="text-sm text-red-600">
                        Passwords do not match
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isLoading || !fullName || !email || !password || !confirmPassword || !passwordsMatch || !isPasswordValid}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-600">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-slate-500">
                    By creating an account, you agree to our{' '}
                    <Link to="/terms" className="underline hover:text-slate-700">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}