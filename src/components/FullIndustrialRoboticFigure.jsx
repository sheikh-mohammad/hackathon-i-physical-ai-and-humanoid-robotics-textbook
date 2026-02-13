import React, { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion as checkPrefersReducedMotion } from '../utils/motion';
import clsx from 'clsx';
import styles from '../css/industrial-styles.module.css';

/**
 * FullIndustrialRoboticFigure component
 * Full robotic body on the right side of hero section that communicates Physical AI and robotics professionally
 */
const FullIndustrialRoboticFigure = ({ className }) => {
  const [idleMovement, setIdleMovement] = useState({ head: 0, torso: 0, arms: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const figureRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    setPrefersReducedMotion(checkPrefersReducedMotion());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Simulate extremely subtle idle movement
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIdleMovement(prev => ({
        head: prev.head + (Math.sin(Date.now() * 0.0003) * 0.01), // Very subtle head movement
        torso: prev.torso + (Math.cos(Date.now() * 0.0004) * 0.005), // Minimal torso movement
        arms: prev.arms + (Math.sin(Date.now() * 0.0002) * 0.008) // Subtle arm positioning
      }));
    }, 100); // Longer interval for even subtler movement

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Get the appropriate classes based on state
  const getFigureClass = () => {
    return clsx(
      styles.fullIndustrialRoboticFigure,
      className,
      {
        [styles.reducedMotion]: prefersReducedMotion,
        [styles.idleMovement]: !prefersReducedMotion
      }
    );
  };

  return (
    <div
      ref={figureRef}
      className={getFigureClass()}
    >
      {/* Robotic Figure SVG */}
      <svg
        className={clsx(styles.roboticFigureSvg, {
          [styles.subtleMovement]: !prefersReducedMotion
        })}
        viewBox="0 0 300 400"
        width="200"
        height="260"
        style={{
          transform: `rotate(${idleMovement.head}rad)`,
          transition: prefersReducedMotion ? 'none' : 'transform 0.5s ease'
        }}
      >
        {/* Head - Robotic with minimal facial structure */}
        <g
          transform={`translate(0, ${Math.sin(Date.now() * 0.0003) * 1})`}
          style={{
            transition: prefersReducedMotion ? 'none' : 'transform 0.8s ease'
          }}
        >
          <ellipse cx="150" cy="60" rx="25" ry="30" fill="#4B5563" stroke="#6B7280" strokeWidth="1.5" />
          {/* Simple sensor/optical modules instead of eyes */}
          <circle cx="140" cy="55" r="3" fill="#1F2937" />
          <circle cx="160" cy="55" r="3" fill="#1F2937" />
          {/* Simple line for mouth/communication port */}
          <line x1="142" y1="70" x2="158" y2="70" stroke="#1F2937" strokeWidth="1" />
        </g>

        {/* Torso - Functional, engineered appearance */}
        <rect x="130" y="90" width="40" height="80" rx="5" fill="#4B5563" stroke="#6B7280" strokeWidth="1.5" />

        {/* Chest panel details */}
        <rect x="135" y="100" width="30" height="15" rx="2" fill="#374151" stroke="#4B5563" strokeWidth="0.5" opacity="0.7" />
        <circle cx="150" cy="110" r="2" fill="#60A5FA" opacity="0.6" /> {/* Indicator light */}

        {/* Left Arm */}
        <g
          transform={`rotate(${idleMovement.arms}, 130, 120)`}
          style={{
            transition: prefersReducedMotion ? 'none' : 'transform 1s ease'
          }}
        >
          <line x1="130" y1="100" x2="100" y2="140" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
          <line x1="100" y1="140" x2="85" y2="160" stroke="#4B5563" strokeWidth="5" strokeLinecap="round" />
          {/* Hand - simple geometric shape */}
          <circle cx="85" cy="160" r="4" fill="#374151" />
        </g>

        {/* Right Arm */}
        <g
          transform={`rotate(${-idleMovement.arms}, 170, 120)`}
          style={{
            transition: prefersReducedMotion ? 'none' : 'transform 1s ease'
          }}
        >
          <line x1="170" y1="100" x2="200" y2="140" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
          <line x1="200" y1="140" x2="215" y2="160" stroke="#4B5563" strokeWidth="5" strokeLinecap="round" />
          {/* Hand - simple geometric shape */}
          <circle cx="215" cy="160" r="4" fill="#374151" />
        </g>

        {/* Neck connector */}
        <rect x="145" y="85" width="10" height="5" fill="#374151" />

        {/* Waist connector */}
        <rect x="140" y="170" width="20" height="5" fill="#374151" />

        {/* Left Leg */}
        <line x1="140" y1="175" x2="130" y2="220" stroke="#4B5563" strokeWidth="7" strokeLinecap="round" />
        <line x1="130" y1="220" x2="125" y2="240" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
        {/* Foot */}
        <rect x="120" y="240" width="10" height="5" rx="2" fill="#374151" />

        {/* Right Leg */}
        <line x1="160" y1="175" x2="170" y2="220" stroke="#4B5563" strokeWidth="7" strokeLinecap="round" />
        <line x1="170" y1="220" x2="175" y2="240" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" />
        {/* Foot */}
        <rect x="170" y="240" width="10" height="5" rx="2" fill="#374151" />
      </svg>

      {/* Optional technical indicator */}
      <div className={styles.figureIndicator}>
        <span className={clsx(styles.indicatorText, styles.monoFont)}>
          SYSTEM ACTIVE
        </span>
      </div>
    </div>
  );
};

export default FullIndustrialRoboticFigure;