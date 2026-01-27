import React from 'react';
import styles from './TechIcon.module.css';
import clsx from 'clsx';

/**
 * TechIcon Component
 * Creates animated tech schematics for the holographic aesthetic
 */
const TechIcon = ({
  type = 'circuit',
  size = 'medium',
  animationComplexity = 'simple',
  className = '',
  children,
  ...props
}) => {
  const iconClassNames = clsx(
    styles.techIcon,
    styles[`techIcon--${type}`],
    styles[`techIcon--${size}`],
    animationComplexity === 'complex' ? styles['techIcon--complex'] : styles['techIcon--simple'],
    className
  );

  const renderIconContent = () => {
    switch (type) {
      case 'circuit':
        return (
          <svg viewBox="0 0 100 100" className={styles.iconSvg}>
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="30" cy="30" r="5" fill="currentColor"/>
            <circle cx="70" cy="30" r="5" fill="currentColor"/>
            <circle cx="30" cy="70" r="5" fill="currentColor"/>
            <circle cx="70" cy="70" r="5" fill="currentColor"/>
            <path d="M30,30 L70,70 M70,30 L30,70" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'chip':
        return (
          <svg viewBox="0 0 100 100" className={styles.iconSvg}>
            <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="15" y="40" width="10" height="20" fill="currentColor"/>
            <rect x="85" y="40" width="10" height="20" fill="currentColor"/>
            <rect x="40" y="15" width="20" height="10" fill="currentColor" transform="rotate(90 50 20)"/>
            <rect x="40" y="85" width="20" height="10" fill="currentColor" transform="rotate(90 50 90)"/>
          </svg>
        );
      case 'neural':
        return (
          <svg viewBox="0 0 100 100" className={styles.iconSvg}>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="30" cy="30" r="5" fill="currentColor"/>
            <circle cx="70" cy="30" r="5" fill="currentColor"/>
            <circle cx="30" cy="70" r="5" fill="currentColor"/>
            <circle cx="70" cy="70" r="5" fill="currentColor"/>
            <circle cx="50" cy="20" r="5" fill="currentColor"/>
            <circle cx="50" cy="80" r="5" fill="currentColor"/>
            <path d="M30,30 L50,20 M50,20 L70,30 M30,30 L30,70 M30,70 L50,80 M50,80 L70,70 M70,70 L70,30 M30,70 L70,30 M30,30 L70,70" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case 'wave':
        return (
          <svg viewBox="0 0 100 100" className={styles.iconSvg}>
            <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3"/>
            <path d="M10,70 Q30,50 50,70 T90,70" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      default:
        return children;
    }
  };

  return (
    <div className={iconClassNames} {...props}>
      {renderIconContent()}
    </div>
  );
};

export default TechIcon;