import React from 'react';
import { useColorPalette } from './ColorPaletteProvider';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';

/**
 * IndustrialThemeManager Component
 * Controls dark industrial theme application across all components
 */
const IndustrialThemeManager = ({ children }) => {
  const { theme } = useColorPalette();

  // Apply theme-specific classes to the body
  const themeClasses = [
    theme === 'dark' ? styles.darkTheme : styles.lightTheme,
    'industrial-theme-applied'
  ].join(' ');

  // Apply theme to body element
  React.useEffect(() => {
    const body = document.body;
    body.className = body.className.replace(/industrial-theme-\w+/g, '');
    body.classList.add(`industrial-theme-${theme}`);

    return () => {
      body.classList.remove(`industrial-theme-${theme}`);
    };
  }, [theme]);

  return (
    <div className={themeClasses}>
      {children}
    </div>
  );
};

export default IndustrialThemeManager;