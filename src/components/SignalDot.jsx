import React from 'react';
import styles from '../css/industrial-styles.module.css';

/**
 * SignalDot Component
 * Pulsing visual indicator for industrial design motif
 */
const SignalDot = ({ isActive = true, isAdvanced = false, size = 12, style = {}, className = '' }) => {
  const dotStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: isActive ? (isAdvanced ? '#fb923c' : '#f97316') : '#64748b',
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(isActive ? { animation: 'pulse 2s infinite' } : {}),
    ...style
  };

  return <span className={`${styles.pulse} ${className}`} style={dotStyle}></span>;
};

export default SignalDot;