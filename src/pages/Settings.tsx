import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Bell, Shield, Palette, Globe, Download, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  const handleExportData = () => {
    toast.success('Data export initiated. You will receive an email shortly.');
  };

  const handleDeleteAccount = () => {
    toast.error('Account deletion requires email confirmation. Check your inbox.');
  };

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
            <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center">
              <SettingsIcon className="h-8 w-8 mr-3" />
              Settings
            </h1>
            <p className="text-slate-600">Customize your PitchPal experience</p>
          </div>

          <div className="space-y-8">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Manage how you receive updates and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications" className="text-base font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-slate-600">
                      Receive updates about your pitches and account
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications" className="text-base font-medium">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-slate-600">
                      Get instant alerts in your browser
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing-emails" className="text-base font-medium">
                      Marketing Emails
                    </Label>
                    <p className="text-sm text-slate-600">
                      Receive tips, updates, and special offers
                    </p>
                  </div>
                  <Switch
                    id="marketing-emails"
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Appearance
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="theme" className="text-base font-medium mb-3 block">
                    Theme
                  </Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Language & Region */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Language & Region
                </CardTitle>
                <CardDescription>
                  Set your preferred language and regional settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="language" className="text-base font-medium mb-3 block">
                    Language
                  </Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="zh">中文</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>
                  Manage your data and account security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" onClick={handleExportData}>
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <Button variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </div>
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
                Save All Settings
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}