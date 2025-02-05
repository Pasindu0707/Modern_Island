import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BandMembers from './components/BandMembers';
import EventSection from './components/EventSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import BandMemberDetail from './components/BandMemberDetail';

function App() {
  return (
    <Router>
      <div className="relative">
        <BackgroundParticles /> 
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <BandMembers />
              <EventSection />
              <ContactForm />
            </>
          } />
          <Route path="/member/:id" element={<BandMemberDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
