import React from 'react';
import logoSrc from '../assets/BlogLogo.webp'

function Logo({ width = '100px' }) {
  // const logoSrc = "/path-to-your-logo/logo.png"; // Replace with the correct path

  return (
    <div className="flex items-center justify-center">
      <img
        src={logoSrc}
        alt="Company Logo"
        className="object-contain"
        style={{ width }}
        onError={(e) => {
          // Fallback to text if the image fails to load
          e.target.onerror = null;
          e.target.replaceWith(
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Logo</span>
          );
        }}
      />
    </div>
  );
}

export default Logo;
