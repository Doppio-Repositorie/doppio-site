import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CappPage from './pages/CappPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import PortfolioMayssa from './pages/PortfolioMayssa';
import PortfolioMatheus from './pages/PortfolioMatheus';
import MatheusProjectDetails from './pages/matheus/MatheusProjectDetails';
import MayssaProjectDetails from './pages/mayssa/MayssaProjectDetails';
import FitYouSwimPage from './pages/FitYouSwimPage';
import DeliciasDaMayPage from './pages/DeliciasDaMayPage';
import KCollectPage from './pages/KCollectPage';
import './index.css';

// ScrollToTop component to ensure pages start at top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/capp" element={<CappPage />} />
            <Route path="/capp/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fityouswim" element={<FitYouSwimPage />} />
            <Route path="/delicias" element={<DeliciasDaMayPage />} />
            <Route path="/k-collect" element={<KCollectPage />} />
            <Route path="/mayssa" element={<PortfolioMayssa />} />
            <Route path="/mayssa/:id" element={<MayssaProjectDetails />} />
            <Route path="/matheus" element={<PortfolioMatheus />} />
            <Route path="/matheus/:id" element={<MatheusProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
