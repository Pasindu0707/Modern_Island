import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BandMembers from './components/BandMembers';
import EventSection from './components/EventSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import BandMemberDetail from './components/BandMemberDetail';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease'
    });
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <div className="particles-container">
          <BackgroundParticles />
        </div>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main className="main-content">
                <HeroSection />
                <BandMembers />
                <EventSection />
                <ContactForm />
              </main>
            } />
            <Route path="/member/:id" element={<BandMemberDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;