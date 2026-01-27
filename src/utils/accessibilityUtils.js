/**
 * Accessibility Utilities
 * Helper functions for implementing WCAG 2.1 AA standards and reduced motion options
 */

import React from 'react';

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Hook to listen for reduced motion preference changes
export const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = React.useState(prefersReducedMotion());

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return reducedMotion;
};

// Apply reduced motion class to body when preferred
export const applyReducedMotionClass = () => {
  if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
  } else {
    document.body.classList.remove('reduce-motion');
  }
};

// Animation utility that respects reduced motion preference
export const conditionalAnimation = (animationClass, fallbackClass = '') => {
  return prefersReducedMotion() ? fallbackClass : animationClass;
};

// CSS class for reduced motion mode
export const reducedMotionStyles = `
.reduce-motion * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}

.reduce-motion * {
  scroll-behavior: auto !important;
}
`;