import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '3rem', margin: '0.2rem 0', color: '#1f3a58' }}>Lab 02: React Navigation</h1>
          <p style={{ fontSize: '1.25rem', color: '#607286', margin: '0.25rem 0 1.25rem' }}>Switch between components using React Router</p>
        </header>

        <Navbar />

        <section style={{ borderLeft: '4px solid #1f3a58', backgroundColor: '#eaf3ff', padding: '1rem 1.25rem', borderRadius: '6px', margin: '1.2rem 0' }}>
          <strong>Lab Task:</strong> Click the buttons above. Notice how the URL changes without the page refreshing.
        </section>

        <section style={{ backgroundColor: '#fff', border: '1px solid #dde6f2', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#1f3a58' }}>Quick Concept Recap:</h2>
          <ul style={{ textAlign: 'left', lineHeight: '1.7', color: '#344050', margin: 0, paddingLeft: '1.2rem' }}>
            <li><strong>BrowserRouter:</strong> Keeps your UI in sync with the URL.</li>
            <li><strong>Routes & Route:</strong> Map a specific path (like <code>/about</code>) to a component.</li>
            <li><strong>Link:</strong> Used instead of <code>&lt;a&gt;</code> tags to prevent full page reloads.</li>
          </ul>
        </section>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;