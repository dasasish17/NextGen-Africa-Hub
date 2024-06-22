import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import MentorshipSection from './components/MentorshipSection';
import DonateSection from './components/DonateSection';
import DonorInfoSection from './components/DonorInfoSection';
import PaymentInfoSection from './components/PaymentInfoSection';
import TaxInfoSection from './components/TaxInfoSection';
import ContactSection from './components/ContactSection';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/programs" element={<ProgramsSection />} />
          <Route path="/mentorship" element={<MentorshipSection />} />
          <Route path="/donate" element={<DonateSection />} />
          <Route path="/donor-info" element={<DonorInfoSection />} />
          <Route path="/payment-info" element={<PaymentInfoSection />} />
          <Route path="/tax-info" element={<TaxInfoSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
