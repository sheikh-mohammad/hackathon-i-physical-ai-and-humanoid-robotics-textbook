import React, { useState, useEffect, useRef } from 'react';
import { registerCtaHoverCallback, registerScrollCallback, updateScrollProgress, prefersReducedMotion as checkPrefersReducedMotion } from '../utils/motion';
import clsx from 'clsx';
import styles from '../css/industrial-styles.module.css';

/**
 * AutonomousRoboticArm component
 * Embedded industrial robotic arm that appears to calibrate and align within the hero area
 */
const AutonomousRoboticArm = ({ className }) => {
  const [armPosition, setArmPosition] = useState({ joint1: 0, joint2: 0, joint3: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const armRef = useRef(null);

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

  // Register scroll callback
  useEffect(() => {
    const unregister = registerScrollCallback(setScrollProgress);
    return () => unregister();
  }, []);

  // Handle mouse movement for orientation change
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!armRef.current) return;

      const rect = armRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle towards cursor
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      // Update arm joints based on cursor position (subtle orientation change)
      setArmPosition(prev => ({
        ...prev,
        joint1: prev.joint1 + (angle * 0.01), // Small adjustment based on cursor
        joint2: prev.joint2 + (Math.sin(Date.now() * 0.001) * 0.02), // Subtle micro-movement
        joint3: prev.joint3 + (Math.cos(Date.now() * 0.0008) * 0.015) // Additional micro-movement
      }));

      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll interaction for blueprint mode transition
  useEffect(() => {
    const handleScroll = () => {
      if (!armRef.current) return;

      const rect = armRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollFraction = (windowHeight - rect.top) / (windowHeight + rect.height);
      const progress = Math.max(0, Math.min(1, scrollFraction));

      // Update scroll progress for the motion utils
      updateScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate idle calibration movements
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setArmPosition(prev => ({
        joint1: prev.joint1 + (Math.sin(Date.now() * 0.0005) * 0.02),
        joint2: prev.joint2 + (Math.cos(Date.now() * 0.0007) * 0.015),
        joint3: prev.joint3 + (Math.sin(Date.now() * 0.0006) * 0.01)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Determine the scroll state for blueprint mode
  const isBlueprintMode = scrollProgress > 0.5;

  // Get the appropriate classes based on state
  const getArmClass = () => {
    return clsx(
      styles.autonomousRoboticArm,
      className,
      {
        [styles.reducedMotion]: prefersReducedMotion,
        [styles.blueprintMode]: isBlueprintMode,
        [styles.calibrating]: !isBlueprintMode
      }
    );
  };

  return (
    <div
      ref={armRef}
      className={getArmClass()}
    >
      {/* Robotic Arm SVG */}
      <svg
        className={clsx(styles.roboticArmSvg, {
          [styles.wireframeMode]: isBlueprintMode
        })}
        viewBox="0 0 200 200"
        width="200"
        height="200"
        style={{
          transform: `rotate(${armPosition.joint1}rad)`,
          transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease'
        }}
      >
        {/* Base */}
        <circle cx="100" cy="180" r="15" fill="#374151" stroke="#4B5563" strokeWidth="2" />

        {/* Lower Arm */}
        <g
          transform={`rotate(${armPosition.joint2 * 20}, 100, 160)`}
          style={{
            transition: prefersReducedMotion ? 'none' : 'transform 0.5s ease'
          }}
        >
          <rect x="95" y="100" width="10" height="80" fill="#4B5563" stroke="#6B7280" strokeWidth="1" />

          {/* Joint 1 */}
          <circle cx="100" cy="100" r="8" fill="#374151" stroke="#4B5563" strokeWidth="1" />

          {/* Middle Arm */}
          <g
            transform={`rotate(${armPosition.joint3 * 15}, 100, 60)`}
            style={{
              transition: prefersReducedMotion ? 'none' : 'transform 0.4s ease'
            }}
          >
            <rect x="97" y="40" width="6" height="60" fill="#4B5563" stroke="#6B7280" strokeWidth="1" />

            {/* Joint 2 */}
            <circle cx="100" cy="40" r="6" fill="#374151" stroke="#4B5563" strokeWidth="1" />

            {/* End Effector */}
            <circle cx="100" cy="20" r="4" fill="#6B7280" stroke="#9CA3AF" strokeWidth="1" />
          </g>
        </g>

        {/* Wireframe overlays - visible in blueprint mode or always for hybrid rendering */}
        {!prefersReducedMotion && (
          <>
            <g className={clsx(styles.wireframeOverlay, { [styles.visible]: isBlueprintMode || true })}>
              <rect x="95" y="100" width="10" height="80" fill="none" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2,2" opacity={isBlueprintMode ? 0.8 : 0.3} />
              <rect x="97" y="40" width="6" height="60" fill="none" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2,2" opacity={isBlueprintMode ? 0.8 : 0.3} />
              <circle cx="100" cy="100" r="8" fill="none" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2,2" opacity={isBlueprintMode ? 0.8 : 0.3} />
              <circle cx="100" cy="40" r="6" fill="none" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2,2" opacity={isBlueprintMode ? 0.8 : 0.3} />
            </g>
          </>
        )}
      </svg>

      {/* Optional microcopy */}
      <div className={styles.armMicrocopy}>
        <p className={clsx(styles.microcopyText, { [styles.blueprintText]: isBlueprintMode })}>
          {isBlueprintMode ? "System in blueprint mode" : "Calibration active"}
        </p>
      </div>
    </div>
  );
};

export default AutonomousRoboticArm;