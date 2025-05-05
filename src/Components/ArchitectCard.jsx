import React, { useState, useEffect } from 'react';
import '../Styles/ArchitectCard.css'; // CSS file for animations
import 'bootstrap/dist/css/bootstrap.min.css';

function ArchitectCard() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Wait for the home animation to finish (adjust timing as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-animation-container">
      {/* Home Animation */}
      <div className="left-block"></div>
      <div className="right-block"></div>
      <div className="triangle-roof"></div>
      <h2 className="title">Madav Architect</h2>

      {/* Left Side Points */}
      {animationComplete && (
        <div className="points-container left-points">
          <div className="point-1">Innovative Design Solutions</div>
          <div className="point-2">Sustainable Architecture</div>
          <div className="point-3">Experienced Professionals</div>
        </div>
      )}

      {/* Right Side Points */}
      {animationComplete && (
        <div className="points-container right-points">
          <div className="point-4">Modern Urban Planning</div>
          <div className="point-5">Residential and Commercial Projects</div>
          <div className="point-6">Global Architectural Influence</div>
        </div>
      )}
    </div>
  );
}

export default ArchitectCard;
