/**
 * Color Mode Utility
 * Manages user preference persistence for Dark/Light mode
 */

const COLOR_MODE_KEY = 'robocraft-color-mode';

/**
 * Get the current color mode from localStorage
 * @returns {string} 'dark' or 'light'
 */
export function getColorMode() {
  if (typeof window === 'undefined') {
    return 'dark'; // Default for SSR
  }

  try {
    const stored = localStorage.getItem(COLOR_MODE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    // Check system preference if no stored value
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'dark'; // Default to dark mode
  } catch (error) {
    console.error('Error reading color mode from localStorage:', error);
    return 'dark';
  }
}

/**
 * Set the color mode and persist to localStorage
 * @param {string} mode - 'dark' or 'light'
 */
export function setColorMode(mode) {
  if (typeof window === 'undefined') {
    return;
  }

  if (mode !== 'dark' && mode !== 'light') {
    console.error('Invalid color mode:', mode);
    return;
  }

  try {
    localStorage.setItem(COLOR_MODE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);
  } catch (error) {
    console.error('Error saving color mode to localStorage:', error);
  }
}

/**
 * Toggle between dark and light mode
 * @returns {string} The new color mode
 */
export function toggleColorMode() {
  const currentMode = getColorMode();
  const newMode = currentMode === 'dark' ? 'light' : 'dark';
  setColorMode(newMode);
  return newMode;
}

/**
 * Initialize color mode on page load
 */
export function initColorMode() {
  if (typeof window === 'undefined') {
    return;
  }

  const mode = getColorMode();
  document.documentElement.setAttribute('data-theme', mode);

  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem(COLOR_MODE_KEY)) {
        const newMode = e.matches ? 'dark' : 'light';
        setColorMode(newMode);
      }
    });
  }
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  initColorMode();
}
