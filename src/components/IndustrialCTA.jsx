import React from 'react';
import { notifyCtaHoverChange } from '../utils/motion';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * IndustrialCTA Component
 * Primary/secondary call-to-action buttons with industrial design
 */
const IndustrialCTA = ({ text, variant = 'primary', onClick, href, style = {}, className = '' }) => {
  const buttonClass = `${styles.industrialButton} ${
    variant === 'secondary' ? styles.secondary : ''
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        style={style}
        onClick={onClick}
        onMouseEnter={() => notifyCtaHoverChange(true)}
        onMouseLeave={() => notifyCtaHoverChange(false)}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      style={style}
      onMouseEnter={() => notifyCtaHoverChange(true)}
      onMouseLeave={() => notifyCtaHoverChange(false)}
    >
      {text}
    </button>
  );
};

export default IndustrialCTA;