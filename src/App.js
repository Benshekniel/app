import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import './App.css'; // Import the global CSS file

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
