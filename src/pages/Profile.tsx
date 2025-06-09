import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Calendar, Save, Crown, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function Profile() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Profile updated successfully!');
    setIsLoading(false);
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const memberSince = user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  }) : 'Unknown';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Profile Settings</h1>
            <p className="text-slate-600">Manage your account information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card className="lg:col-span-1">
              <CardContent className="p-8 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold">
                    {getInitials(user?.email || '')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {fullName || 'User'}
                </h3>
                <p className="text-slate-600 mb-4">{user?.email}</p>
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Pro Member
                </Badge>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Member since {memberSince}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        value={user?.email || ''}
                        disabled
                        className="bg-slate-50"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Email cannot be changed
                      </p>
                    </div>
                  </div>
                  <Button onClick={handleSave} disabled={isLoading}>
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Save className="h-4 w-4 mr-2" />
                    )}
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              {/* Account Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Statistics</CardTitle>
                  <CardDescription>Your PitchPal usage overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-slate-600">Pitches Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">8</div>
                      <div className="text-sm text-slate-600">This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">45</div>
                      <div className="text-sm text-slate-600">Total Features</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">94%</div>
                      <div className="text-sm text-slate-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscription */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Subscription
                  </CardTitle>
                  <CardDescription>Manage your PitchPal subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-slate-900">Pro Plan</h4>
                      <p className="text-sm text-slate-600">Unlimited pitches, voice generation, and premium features</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="outline">Manage Billing</Button>
                    <Button variant="outline">Download Invoice</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}