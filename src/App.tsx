import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AuthProvider } from '@/contexts/AuthContext';
import { LandingPage } from '@/pages/LandingPage';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { CreatePitch } from '@/pages/CreatePitch';
import { Dashboard } from '@/pages/Dashboard';
import { PitchDetails } from '@/pages/PitchDetails';
import { EditPitch } from '@/pages/EditPitch';
import { Profile } from '@/pages/Profile';
import { Settings } from '@/pages/Settings';
import { About } from '@/pages/About';
import { Blog } from '@/pages/Blog';
import { Contact } from '@/pages/Contact';
import { Help } from '@/pages/Help';
import { Pricing } from '@/pages/Pricing';
import { Templates } from '@/pages/Templates';
import { Terms } from '@/pages/Terms';
import { Privacy } from '@/pages/Privacy';
import { ForgotPassword } from '@/pages/ForgotPassword';
import { Toaster } from '@/components/ui/sonner';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route 
                path="/create" 
                element={
                  <ProtectedRoute>
                    <CreatePitch />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/pitch/:id" 
                element={
                  <ProtectedRoute>
                    <PitchDetails />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/pitch/:id/edit" 
                element={
                  <ProtectedRoute>
                    <EditPitch />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/settings" 
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;