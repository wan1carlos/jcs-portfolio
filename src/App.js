import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

// Add this new component for scroll management
const ScrollToTop = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <About />
            <Education />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
