import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const handleOpenSampleModal = () => {
    setIsSampleModalOpen(true);
  };

  const handleCloseSampleModal = () => {
    setIsSampleModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOHead />
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
        {/* Navigation Header */}
        <Header onOpenSampleModal={handleOpenSampleModal} />

        {/* Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenSampleModal={handleOpenSampleModal} />} />
            <Route path="/services" element={<ServicesPage onOpenSampleModal={handleOpenSampleModal} />} />
            <Route path="/work" element={<WorkPage onOpenSampleModal={handleOpenSampleModal} />} />
            <Route path="/process" element={<ProcessPage onOpenSampleModal={handleOpenSampleModal} />} />
            <Route path="/about" element={<AboutPage onOpenSampleModal={handleOpenSampleModal} />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Elements */}
        <FloatingWhatsApp />
        <EnquiryModal isOpen={isSampleModalOpen} onClose={handleCloseSampleModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
