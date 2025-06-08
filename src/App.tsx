import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LandingPage } from '@/pages/LandingPage';
import { CreatePitch } from '@/pages/CreatePitch';
import { Dashboard } from '@/pages/Dashboard';
import { PitchDetails } from '@/pages/PitchDetails';
import { Toaster } from '@/components/ui/sonner';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create" element={<CreatePitch />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pitch/:id" element={<PitchDetails />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;