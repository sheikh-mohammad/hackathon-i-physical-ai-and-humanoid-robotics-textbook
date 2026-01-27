import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import MechIcon from './MechIcon';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * TechStackBadge Component
 * Displays technology stack items (ROS 2, NVIDIA Isaac, etc.) with industrial styling
 */
const TechStackBadge = ({
  tech = 'Technology',
  icon = 'gear',
  color = 'copper',
  size = 'medium',
  animate = true,
  theme = 'dark',
  className = ''
}) => {
  const badgeClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelLight,
    styles.kineticHighlight,
    animate ? animationStyles.themeTransition : '',
    className
  ].filter(Boolean).join(' ');

  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: '0.8rem' },
    medium: { padding: '6px 12px', fontSize: '0.9rem' },
    large: { padding: '8px 16px', fontSize: '1rem' }
  };

  return (
    <IndustrialContainer
      className={badgeClasses}
      variant="steel"
      theme={theme}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '20px',
        ...sizeStyles[size]
      }}
    >
      <MechIcon type={icon} size="small" color={color} animate={animate} />
      <span
        className={color === 'copper' ? colorStyles.copperMedium : colorStyles.holographicBlueMedium}
        style={{ fontWeight: 'bold' }}
      >
        {tech}
      </span>
    </IndustrialContainer>
  );
};

export default TechStackBadge;