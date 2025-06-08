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