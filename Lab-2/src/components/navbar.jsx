import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const btn = {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '8px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Link to="/" style={{ ...btn, background: '#3b82f6' }}>Home</Link>
      <Link to="/about" style={{ ...btn, background: '#22c55e' }}>About</Link>
      <Link to="/contact" style={{ ...btn, background: '#a855f7' }}>Contact</Link>
    </div>
  );
}

export default Navbar;