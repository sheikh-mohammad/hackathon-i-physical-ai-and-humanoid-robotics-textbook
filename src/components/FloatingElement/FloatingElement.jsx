import React from 'react';
import styles from './FloatingElement.module.css';
import clsx from 'clsx';

/**
 * FloatingElement Component
 * Creates animated floating elements for botanical motifs and tech schematics
 */
const FloatingElement = ({
  type = 'botanical',
  size = 'medium',
  animationComplexity = 'simple',
  className = '',
  children,
  ...props
}) => {
  const elementClassNames = clsx(
    styles.floatingElement,
    styles[`floatingElement--${type}`],
    styles[`floatingElement--${size}`],
    animationComplexity === 'complex' ? styles['floatingElement--complex'] : styles['floatingElement--simple'],
    className
  );

  const renderElementContent = () => {
    switch (type) {
      case 'botanical':
        return (
          <svg viewBox="0 0 100 100" className={styles.botanicalIcon}>
            <path
              d="M50,20 C60,35 70,35 80,20 C90,35 90,65 80,80 C70,65 60,65 50,80 C40,65 30,65 20,80 C10,65 10,35 20,20 C30,35 40,35 50,20 Z"
              fill="none"
              stroke="var(--holographic-teal)"
              strokeWidth="2"
            />
          </svg>
        );
      case 'tech':
        return (
          <svg viewBox="0 0 100 100" className={styles.techIcon}>
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--holographic-blue)" strokeWidth="2"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--holographic-blue)" strokeWidth="2"/>
          </svg>
        );
      case 'particle':
        return (
          <div className={styles.particleDot} />
        );
      default:
        return children;
    }
  };

  return (
    <div className={elementClassNames} {...props}>
      {renderElementContent()}
    </div>
  );
};

export default FloatingElement;