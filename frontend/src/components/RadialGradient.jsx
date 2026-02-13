import React, { useState, useEffect } from 'react';

/**
 * RadialGradient Component
 * Mouse-tracking radial gradient orb effect for industrial design
 */
const RadialGradient = ({ className = '', style = {} }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.1) 0%, transparent 70%)`,
    zIndex: -1,
    ...style
  };

  return <div className={className} style={gradientStyle}></div>;
};

export default RadialGradient;