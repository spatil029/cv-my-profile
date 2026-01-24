import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SlidingWrapper.css'; // Import the CSS for sliding effect

const SlidingWrapper = ({ children }) => {
  const location = useLocation();
  const [direction, setDirection] = useState('slide-in');
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true); // Show overlay immediately on route change
    setDirection('slide-out');
    
    const timer = setTimeout(() => {
      setDirection('slide-in');
    }, 800); // Match this with the slide-out duration

    const overlayTimer = setTimeout(() => {
      setShowOverlay(false); // Hide overlay after slide-in completes
    }, 800); // Duration of slide-out + slide-in

    return () => {
      clearTimeout(timer);
      clearTimeout(overlayTimer);
    };
  }, [location]);

  return (
    <div className={`sliding-wrapper ${direction}`}>
      {showOverlay && <div className="overlay" />} {/* Overlay for smoother transition */}
      {children}
    </div>
  );
};

export default SlidingWrapper; 