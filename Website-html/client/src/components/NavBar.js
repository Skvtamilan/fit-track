import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem('fittrack_dark');
      if (v === null) return false;
      return v === '1';
    } catch (e) { return false; }
  });

  useEffect(() => {
    try {
      if (dark) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('fittrack_dark','1');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('fittrack_dark','0');
      }
    } catch (e) {
      // ignore
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="nav-logo">
          FitTrack
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/categories">
          Training
        </NavLink>
        <NavLink to="/profile">
          My Profile
        </NavLink>
        <NavLink to="/progress">
          Progress
        </NavLink>
        <NavLink to="/feedback">
          Feedback
        </NavLink>
        <div style={{marginLeft:12, display:'flex', alignItems:'center', gap:8}}>
          <label style={{fontSize:12, color:'var(--text-secondary)'}}>Dark</label>
          <button
            aria-label="Toggle dark mode"
            className="btn"
            onClick={() => setDark(d => !d)}
            style={{padding:'6px 10px'}}
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}