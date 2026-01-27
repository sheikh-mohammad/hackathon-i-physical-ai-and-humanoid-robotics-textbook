import React, { useState, useEffect } from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * KineticMotionHandler Component
 * Controls interactive kinetic effects and motion responses
 */
const KineticMotionHandler = ({
  children,
  enabled = true,
  intensity = 'medium', // 'low', 'medium', 'high'
  trigger = 'hover', // 'hover', 'click', 'scroll', 'always'
  className = ''
}) => {
  const [isActive, setIsActive] = useState(false);

  // Intensity-based styling
  const intensityClass = {
    low: 'kinetic-intensity-low',
    medium: 'kinetic-intensity-medium',
    high: 'kinetic-intensity-high'
  };

  const motionClasses = [
    styles.kineticHighlight,
    enabled && isActive ? animationStyles.kineticMotion : '',
    intensityClass[intensity],
    className
  ].filter(Boolean).join(' ');

  // Handle different trigger types
  const handleMouseEnter = () => {
    if (trigger === 'hover' || trigger === 'always') {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsActive(false);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsActive(!isActive);
    }
  };

  // For scroll-triggered effects, we'd typically use Intersection Observer
  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsActive(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      const element = document.querySelector(`.${motionClasses}`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [motionClasses, trigger]);

  // Always active for 'always' trigger
  useEffect(() => {
    if (trigger === 'always') {
      setIsActive(true);
    }
  }, [trigger]);

  const eventHandlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  };

  return (
    <div
      className={motionClasses}
      {...eventHandlers}
    >
      {children}
    </div>
  );
};

export default KineticMotionHandler;