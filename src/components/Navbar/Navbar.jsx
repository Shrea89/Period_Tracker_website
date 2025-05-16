import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Cycle Tracker Logo" />
            <span>CycleTracker</span>
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/symptoms" className="nav-link">Symptoms</Link>
          <Link to="/statistics" className="nav-link">Statistics</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>
        </div>
        
        <div className="navbar-buttons">
          <Link to="/demo" className="btn btn-secondary">Book Demo</Link>
          <Link to="/login" className="btn btn-text">Login</Link>
          <Link to="/signup" className="btn btn-primary">Try it free</Link>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/symptoms" className="nav-link" onClick={() => setMenuOpen(false)}>Symptoms</Link>
          <Link to="/statistics" className="nav-link" onClick={() => setMenuOpen(false)}>Statistics</Link>
          <Link to="/blogs" className="nav-link" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/demo" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>Book Demo</Link>
          <Link to="/login" className="btn btn-text" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Try it free</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 