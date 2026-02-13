import React from 'react';
import styles from '../css/industrial-styles.module.css';

/**
 * GridOverlay Component
 * Background visual motif with grid pattern
 */
const GridOverlay = ({ style = {}, className = '' }) => {
  return (
    <div
      className={`${styles.gridOverlay} ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: 0.1,
        zIndex: 0,
        ...style
      }}
    />
  );
};

export default GridOverlay;