import React, { createContext, useContext, useState, useEffect } from 'react';
import { prefersReducedMotion, applyReducedMotionClass } from '../../utils/accessibilityUtils';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

/**
 * AccessibilityProvider Component
 * Provides accessibility context and manages preferences like reduced motion
 */
export const AccessibilityProvider = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Initialize reduced motion preference
    const initialReducedMotion = prefersReducedMotion();
    setReducedMotion(initialReducedMotion);
    applyReducedMotionClass();

    // Listen for changes to reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => {
      setReducedMotion(e.matches);
      applyReducedMotionClass();
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    if (typeof document !== 'undefined') {
      if (!reducedMotion) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (typeof document !== 'undefined') {
      if (!highContrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    }
  };

  const increaseFontSize = () => {
    setFontSize('large');
    if (typeof document !== 'undefined') {
      document.body.classList.remove('font-normal', 'font-small');
      document.body.classList.add('font-large');
    }
  };

  const decreaseFontSize = () => {
    setFontSize('small');
    if (typeof document !== 'undefined') {
      document.body.classList.remove('font-normal', 'font-large');
      document.body.classList.add('font-small');
    }
  };

  const resetFontSize = () => {
    setFontSize('normal');
    if (typeof document !== 'undefined') {
      document.body.classList.remove('font-large', 'font-small');
      document.body.classList.add('font-normal');
    }
  };

  const value = {
    reducedMotion,
    highContrast,
    fontSize,
    toggleReducedMotion,
    toggleHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize
  };

  return (
    <AccessibilityContext.Provider value={value}>
      <div className={`
        ${reducedMotion ? 'reduce-motion' : ''}
        ${highContrast ? 'high-contrast' : ''}
        font-${fontSize}
      `}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};