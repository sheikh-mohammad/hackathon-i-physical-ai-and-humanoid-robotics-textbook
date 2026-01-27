import React from 'react';
import styles from './GlassContainer.module.css';

/**
 * GlassContainer Component
 * Implements glassmorphism effect with backdrop-filter for the holographic aesthetic
 */
const GlassContainer = ({ children, className = '', ...props }) => {
  const containerClassName = `${styles.glassContainer} ${className}`;

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  );
};

export default GlassContainer;