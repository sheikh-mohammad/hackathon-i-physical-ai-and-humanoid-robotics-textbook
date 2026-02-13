import React from 'react';
import RadialGradient from './RadialGradient';
import { prefersReducedMotion } from '../utils/motion';
import responsiveStyles from '../css/responsive.module.css';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * IndustrialHomepage Component
 * Main container for the RoboCraft industrial-themed homepage
 */
const IndustrialHomepage = ({ children, className = '' }) => {
  return (
    <div className={`${styles.darkTheme} ${className}`}>
      {/* Mouse-tracking radial gradient orb effect (unless reduced motion is preferred) */}
      {!prefersReducedMotion() && <RadialGradient />}

      <div className={`${styles.container} ${responsiveStyles.mobileContainer}`}>
        {children}
      </div>
    </div>
  );
};

export default IndustrialHomepage;