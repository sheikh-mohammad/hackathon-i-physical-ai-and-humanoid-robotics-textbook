/**
 * Motion Utilities for Industrial Homepage
 * Provides staggered reveal and animation functions
 */

// Function to create staggered reveal animations for elements
export const staggerReveal = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';

      // Trigger reflow to ensure styles are applied
      element.offsetHeight;

      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * delay);
  });
};

// Hook-like function to apply staggered reveal to elements with a selector
export const useStaggeredReveal = (selector, delay = 100) => {
  if (typeof window !== 'undefined') {
    const elements = document.querySelectorAll(selector);
    staggerReveal(Array.from(elements), delay);
  }
};

// Animation function for pulsing effects
export const applyPulseAnimation = (element, duration = 2000) => {
  if (element) {
    element.style.animation = `pulse ${duration}ms infinite`;
  }
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Conditional animation wrapper that respects user preferences
export const conditionalAnimate = (animationFn, fallbackFn = () => {}) => {
  if (!prefersReducedMotion()) {
    animationFn();
  } else {
    fallbackFn();
  }
};

// Animation for grid item reveals
export const staggerGridReveal = (gridItems, delay = 50) => {
  if (prefersReducedMotion()) {
    // If user prefers reduced motion, just show items without animation
    gridItems.forEach(item => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
    return;
  }

  gridItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      // Force reflow and then apply animation
      item.offsetHeight;

      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * delay);
  });
};

// Track CTA hover state for SystemHeartbeatCore
let ctaHoverState = false;
const ctaCallbacks = [];

export const registerCtaHoverCallback = (callback) => {
  ctaCallbacks.push(callback);
  return () => {
    const index = ctaCallbacks.indexOf(callback);
    if (index > -1) {
      ctaCallbacks.splice(index, 1);
    }
  };
};

export const notifyCtaHoverChange = (isHovered) => {
  ctaHoverState = isHovered;
  ctaCallbacks.forEach(callback => callback(isHovered));
};

// Track scroll progress for SystemHeartbeatCore
let scrollProgress = 0;
const scrollCallbacks = [];

export const registerScrollCallback = (callback) => {
  scrollCallbacks.push(callback);
  return () => {
    const index = scrollCallbacks.indexOf(callback);
    if (index > -1) {
      scrollCallbacks.splice(index, 1);
    }
  };
};

export const updateScrollProgress = (progress) => {
  scrollProgress = progress;
  scrollCallbacks.forEach(callback => callback(progress));
};

// Export all functions as default
export default {
  staggerReveal,
  useStaggeredReveal,
  applyPulseAnimation,
  prefersReducedMotion,
  conditionalAnimate,
  staggerGridReveal,
  registerCtaHoverCallback,
  notifyCtaHoverChange,
  registerScrollCallback,
  updateScrollProgress
};