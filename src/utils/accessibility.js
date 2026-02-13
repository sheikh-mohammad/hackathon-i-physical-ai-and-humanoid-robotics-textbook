/**
 * Accessibility Utilities for Industrial Homepage
 * Implements WCAG 2.1 AA compliance features
 */

// Function to add focus indicators to interactive elements
export const addFocusIndicators = () => {
  // Add focus styles to all focusable elements
  const style = document.createElement('style');
  style.textContent = `
    button:focus,
    a:focus,
    input:focus,
    textarea:focus,
    select:focus,
    *[tabindex]:focus {
      outline: 2px solid #f97316; /* Industrial orange */
      outline-offset: 2px;
      border-radius: 0; /* Match industrial design */
    }

    button:focus:not(:focus-visible),
    a:focus:not(:focus-visible),
    input:focus:not(:focus-visible),
    textarea:focus:not(:focus-visible),
    select:focus:not(:focus-visible),
    *[tabindex]:focus:not(:focus-visible) {
      outline: none;
    }

    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    textarea:focus-visible,
    select:focus-visible,
    *[tabindex]:focus-visible {
      outline: 2px solid #f97316; /* Industrial orange */
      outline-offset: 2px;
      border-radius: 0; /* Match industrial design */
    }
  `;
  document.head.appendChild(style);
};

// Function to validate color contrast according to WCAG 2.1 AA
export const validateColorContrast = (backgroundColor, textColor) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const bg = hexToRgb(backgroundColor);
  const text = hexToRgb(textColor);

  if (!bg || !text) return false;

  // Calculate relative luminance
  const luminance = (r, g, b) => {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const bgLum = luminance(bg.r, bg.g, bg.b);
  const textLum = luminance(text.r, text.g, text.b);
  const ratio = bgLum > textLum
    ? (bgLum + 0.05) / (textLum + 0.05)
    : (textLum + 0.05) / (bgLum + 0.05);

  // WCAG AA requires 4.5:1 for normal text, 3:1 for large text
  return ratio >= 4.5;
};

// Function to initialize accessibility features
export const initAccessibility = () => {
  // Add focus indicators
  addFocusIndicators();

  // Set up reduced motion listener
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    document.documentElement.classList.add('reduce-motion');
  }

  mediaQuery.addListener((event) => {
    if (event.matches) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  });

  // Enhance landmark roles for screen readers
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.setAttribute('role', 'main');
  }

  const bannerElement = document.querySelector('header');
  if (bannerElement) {
    bannerElement.setAttribute('role', 'banner');
  }

  const contentInfoElement = document.querySelector('footer');
  if (contentInfoElement) {
    contentInfoElement.setAttribute('role', 'contentinfo');
  }
};

// Export all functions
export default {
  addFocusIndicators,
  validateColorContrast,
  initAccessibility
};