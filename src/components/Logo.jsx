import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`custom-logo ${className}`}>
      <img 
        src="/LogoBiblioteca.png" 
        alt="Biblioteca Logo" 
        className="logo-image"
        onError={(e) => {
          // Fallback to emoji if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <span className="logo-emoji-fallback" style={{ display: 'none' }}>🏛️</span>
      <span className="logo-text">Biblioteca</span>
    </div>
  );
};

export default Logo; 