import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, Zap } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-6 lg:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-6 lg:mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="p-2 lg:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
            </div>
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PitchPal
            </span>
          </Link>
        </div>

        <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-xl">
          <CardHeader className="text-center pb-4 lg:pb-6">
            <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-sm lg:text-base text-gray-600">
              Join thousands of entrepreneurs building amazing pitches
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 lg:p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm lg:text-base font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="pl-10 lg:pl-12 h-10 lg:h-12 text-sm lg:text-base"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm lg:text-base font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 lg:pl-12 h-10 lg:h-12 text-sm lg:text-base"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm lg:text-base font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="pl-10 lg:pl-12 pr-10 lg:pr-12 h-10 lg:h-12 text-sm lg:text-base"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 lg:h-10 lg:w-10 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 lg:h-5 lg:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 lg:h-5 lg:w-5" />
                    )}
                  </Button>
                </div>
                {password && !isPasswordValid && (
                  <p className="text-xs lg:text-sm text-red-600">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm lg:text-base font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="pl-10 lg:pl-12 pr-10 lg:pr-12 h-10 lg:h-12 text-sm lg:text-base"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 lg:h-10 lg:w-10 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 lg:h-5 lg:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 lg:h-5 lg:w-5" />
                    )}
                  </Button>
                </div>
                {confirmPassword && !passwordsMatch && (
                  <p className="text-xs lg:text-sm text-red-600">
                    Passwords do not match
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-10 lg:h-12 text-sm lg:text-base font-medium"
                disabled={isLoading || !fullName || !email || !password || !confirmPassword || !passwordsMatch || !isPasswordValid}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4 w-4 lg:h-5 lg:w-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <div className="mt-6 lg:mt-8 text-center">
              <p className="text-sm lg:text-base text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}