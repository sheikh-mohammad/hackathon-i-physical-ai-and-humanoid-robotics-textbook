import { useState, useEffect } from 'react';
import { useColorPalette } from './ColorPaletteProvider';
import animationStyles from '../css/animations.module.css';

/**
 * ThemeTransitionAnimator Component
 * Handles smooth transitions when switching between themes
 */
const ThemeTransitionAnimator = ({ children }) => {
  const { theme } = useColorPalette();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevTheme, setPrevTheme] = useState(theme);

  useEffect(() => {
    if (theme !== prevTheme) {
      setIsTransitioning(true);
      setPrevTheme(theme);

      // Reset transitioning state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [theme, prevTheme]);

  // Apply transition class to the entire app
  const appClasses = [
    animationStyles.themeTransition,
    isTransitioning ? 'theme-transition-active' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={appClasses}>
      {children}
    </div>
  );
};

export default ThemeTransitionAnimator;