import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import AethonPage from './pages/AethonPage';
import EBajaPage from './pages/EBajaPage';
import AlumniPage from './pages/AlumniPage';
import GalleryPage from './pages/ProjectGallery';
import LegacyPage from './pages/LegacyPage';
import AboutPage from './pages/AboutPage';
import SponsorsPage from './pages/SponsersPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LogoAnimation from './components/common/LogoAnimation';

function AppContent() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }

    setIsInitialLoad(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!showAnimation) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    window.scrollTo(0, 0);
  };

  if (isInitialLoad) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      {/* Global tight layout styling */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          background-color: black;
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        body {
          overflow-y: auto;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #7f1d1d;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
      `}</style>

      <div className="w-full bg-black text-white">
        {showAnimation ? (
          <LogoAnimation onAnimationComplete={handleAnimationComplete} />
        ) : (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects/aethon" element={<AethonPage />} />
                  <Route path="/projects/ebaja" element={<EBajaPage />} />
                  <Route path="/alumni" element={<AlumniPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/legacy" element={<LegacyPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/sponsors" element={<SponsorsPage />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
