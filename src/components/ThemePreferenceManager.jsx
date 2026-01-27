import { useEffect } from 'react';
import { useColorPalette } from './ColorPaletteProvider';

/**
 * ThemePreferenceManager Component
 * Manages storage and retrieval of user theme preferences
 */
const ThemePreferenceManager = () => {
  const { theme, setTheme } = useColorPalette();

  useEffect(() => {
    // Load theme preference from localStorage on mount
    const savedTheme = localStorage.getItem('theme-preference');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to system preference if no saved preference
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme-preference')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme-preference', theme);

    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content',
        theme === 'dark' ? '#1a1a1a' : '#ffffff'
      );
    }
  }, [theme]);

  return null; // This component doesn't render anything visible
};

export default ThemePreferenceManager;