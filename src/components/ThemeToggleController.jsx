import React, { useState, useEffect } from 'react';
import { useColorPalette } from './ColorPaletteProvider';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * ThemeToggleController Component
 * Provides UI for toggling between dark/light mode with smooth transitions
 */
const ThemeToggleController = ({
  className = '',
  showLabel = true,
  size = 'medium' // 'small', 'medium', 'large'
}) => {
  const { theme, toggleTheme } = useColorPalette();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Size classes
  const sizeClasses = {
    small: 'toggle-small',
    medium: 'toggle-medium',
    large: 'toggle-large'
  };

  const toggleClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelMedium,
    animationStyles.themeTransition,
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  const buttonClasses = [
    styles.kineticHighlight,
    animationStyles.themeTransition,
    'theme-toggle-button'
  ].join(' ');

  return (
    <div className={toggleClasses}>
      {showLabel && (
        <span className={`${colorStyles.steelText} theme-label`}>
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
      <button
        onClick={toggleTheme}
        className={buttonClasses}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        style={{
          background: theme === 'dark'
            ? 'var(--copper-medium)'
            : 'var(--light-copper-medium)',
          width: size === 'small' ? '40px' : size === 'large' ? '60px' : '50px',
          height: size === 'small' ? '20px' : size === 'large' ? '30px' : '25px',
          borderRadius: '15px',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s ease'
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: theme === 'dark' ? '2px' : size === 'small' ? '20px' : size === 'large' ? '30px' : '25px',
            width: size === 'small' ? '16px' : size === 'large' ? '26px' : '21px',
            height: size === 'small' ? '16px' : size === 'large' ? '26px' : '21px',
            borderRadius: '50%',
            background: theme === 'dark' ? '#fff' : '#333',
            transition: 'left 0.3s ease',
            content: ''
          }}
        />
      </button>
    </div>
  );
};

export default ThemeToggleController;