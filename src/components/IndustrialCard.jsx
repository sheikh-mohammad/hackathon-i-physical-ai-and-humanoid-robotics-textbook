import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * IndustrialCard Component
 * Extended IndustrialContainer with card-specific styling and features
 */
const IndustrialCard = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  theme = 'dark',
  animate = false,
  ...props
}) => {
  const cardClasses = [
    styles.industrialCard,
    animate ? animationStyles.industrialFadeIn : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <IndustrialContainer
      className={cardClasses}
      variant="card"
      theme={theme}
      {...props}
    >
      {title && (
        <h3 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={colorStyles.steelText}>
          {subtitle}
        </p>
      )}
      <div className="card-content">
        {children}
      </div>
    </IndustrialContainer>
  );
};

export default IndustrialCard;