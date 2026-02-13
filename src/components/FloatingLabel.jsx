import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * FloatingLabel Component
 * System labels and callouts for industrial design
 */
const FloatingLabel = ({ text, position = 'top-left', style = {}, className = '' }) => {
  const positionStyles = {
    'top-left': { top: '10px', left: '10px' },
    'top-right': { top: '10px', right: '10px' },
    'bottom-left': { bottom: '10px', left: '10px' },
    'bottom-right': { bottom: '10px', right: '10px' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  };

  const floatingStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(30, 41, 59, 0.9)', // Steel dark with transparency
    border: '1px solid rgba(249, 115, 22, 0.5)', // Industrial orange with transparency
    color: '#f97316', // Industrial orange
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    zIndex: 10,
    backdropFilter: 'blur(4px)',
    ...positionStyles[position],
    ...style
  };

  return (
    <span className={`${styles.technicalText} ${className}`} style={floatingStyle}>
      {text}
    </span>
  );
};

export default FloatingLabel;