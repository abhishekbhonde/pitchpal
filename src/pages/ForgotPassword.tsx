import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast.success('Password reset email sent!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Check Your Email
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Click the link in the email to reset your password.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/login">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Sign In
                    </Link>
                  </Button>
                  <p className="text-sm text-slate-500">
                    Didn't receive the email? Check your spam folder or{' '}
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-500 underline"
                    >
                      try again
                    </button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

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
                Forgot Password?
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                No worries! Enter your email and we'll send you a reset link.
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
                      placeholder="Enter your email address"
                      className="pl-12 h-12 text-base border-2 border-slate-200 focus:border-blue-500 transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading || !email}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}