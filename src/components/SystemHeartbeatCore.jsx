import React, { useState, useEffect, useRef } from 'react';
import { registerCtaHoverCallback, registerScrollCallback, updateScrollProgress, prefersReducedMotion as checkPrefersReducedMotion } from '../utils/motion';
import clsx from 'clsx';
import styles from '../css/industrial-styles.module.css';

/**
 * SystemHeartbeatCore component
 * A central industrial element that visually communicates platform vitality
 */
const SystemHeartbeatCore = ({ className }) => {
  const [pulseState, setPulseState] = useState('idle');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [ctaHovered, setCtaHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const coreRef = useRef(null);

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

  // Register CTA hover callback
  useEffect(() => {
    const unregister = registerCtaHoverCallback(setCtaHovered);
    return () => unregister();
  }, []);

  // Register scroll callback
  useEffect(() => {
    const unregister = registerScrollCallback(setScrollProgress);
    return () => unregister();
  }, []);

  // Handle mouse movement for pulse sync
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!coreRef.current) return;

      const rect = coreRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
      );

      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Adjust pulse state based on cursor proximity
      if (distance < 200) {
        setPulseState('sync');
      } else {
        setPulseState('idle');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll interaction
  useEffect(() => {
    const handleScroll = () => {
      if (!coreRef.current) return;

      const rect = coreRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollFraction = (windowHeight - rect.top) / (windowHeight + rect.height);
      const progress = Math.max(0, Math.min(1, scrollFraction));

      updateScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the current state class
  const getStateClass = () => {
    if (ctaHovered) return 'accelerated';
    if (pulseState === 'sync') return 'sync';
    return 'idle';
  };

  // Determine the scroll transformation state
  const getScrollState = () => {
    if (scrollProgress > 0.8) return 'transformed';
    return 'normal';
  };

  const stateClass = getStateClass();
  const scrollState = getScrollState();

  return (
    <div
      ref={coreRef}
      className={clsx(
        styles.systemHeartbeatCore,
        styles[`pulse-${stateClass}`],
        styles[`scroll-${scrollState}`],
        className,
        {
          [styles.reducedMotion]: prefersReducedMotion,
          [styles.cursorSync]: pulseState === 'sync',
          [styles.ctaHovered]: ctaHovered,
          [styles.scrollTransformed]: scrollState === 'transformed'
        }
      )}
      onMouseEnter={() => setPulseState('hover')}
      onMouseLeave={() => setPulseState('idle')}
    >
      {/* Core Element */}
      <div className={clsx(styles.coreElement, styles[`core-${stateClass}`])}>
        {/* Central Node */}
        <div className={clsx(styles.coreNode, styles[`node-${stateClass}`])}>
          {/* Concentric Rings */}
          <div className={clsx(styles.ring, styles.ring1)}></div>
          <div className={clsx(styles.ring, styles.ring2)}></div>
          <div className={clsx(styles.ring, styles.ring3)}></div>

          {/* Core Glow */}
          <div className={clsx(styles.coreGlow, styles[`glow-${stateClass}`])}></div>
        </div>

        {/* Grid Background */}
        <div className={styles.gridBackground}></div>

        {/* Radial Glow */}
        <div className={styles.radialGlow}></div>
      </div>

      {/* Messaging */}
      <div className={styles.coreMessaging}>
        <p className={styles.coreMessage}>A live Physical AI system — not a static course.</p>
        <p className={styles.microCopy}>System online</p>
      </div>
    </div>
  );
};

export default SystemHeartbeatCore;