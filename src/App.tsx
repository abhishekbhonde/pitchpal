import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthProvider } from '@/contexts/AuthContext';
import { LandingPage } from '@/pages/LandingPage';
import { CreatePitch } from '@/pages/CreatePitch';
import { Dashboard } from '@/pages/Dashboard';
import { About } from '@/pages/About';
import { Blog } from '@/pages/Blog';
import { Contact } from '@/pages/Contact';
import { Help } from '@/pages/Help';
import { Pricing } from '@/pages/Pricing';
import { Templates } from '@/pages/Templates';
import { Terms } from '@/pages/Terms';
import { Privacy } from '@/pages/Privacy';
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
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/create" element={<CreatePitch />} />
              <Route path="/dashboard" element={<Dashboard />} />
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