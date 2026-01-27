import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * RobotJointElement Component
 * Creates animated robot joint motifs with realistic mechanical movement patterns
 */
const RobotJointElement = ({
  size = 'medium',
  color = 'copper',
  animate = true,
  className = '',
  type = 'rotary' // 'rotary', 'linear', 'pivot'
}) => {
  // Size classes
  const sizeClasses = {
    small: 'joint-size-small',
    medium: 'joint-size-medium',
    large: 'joint-size-large'
  };

  // Color classes
  const colorClasses = {
    copper: colorStyles.copperMedium,
    steel: colorStyles.steelMedium,
    blue: colorStyles.holographicBlueMedium,
    circuit: colorStyles.circuitBlue
  };

  // Type-specific styling
  const typeClasses = {
    rotary: 'joint-type-rotary',
    linear: 'joint-type-linear',
    pivot: 'joint-type-pivot'
  };

  const jointClasses = [
    styles.mechanicalElement,
    animate ? animationStyles.robotJointElement : '',
    colorClasses[color] || colorClasses.copper,
    sizeClasses[size] || sizeClasses.medium,
    typeClasses[type] || typeClasses.rotary,
    className
  ].filter(Boolean).join(' ');

  // Create SVG for the robot joint
  const jointSVG = (
    <svg
      viewBox="0 0 100 100"
      className={`robot-joint-svg ${animate ? animationStyles.gearElement : ''}`}
      style={{
        width: size === 'small' ? '20px' : size === 'large' ? '40px' : '30px',
        height: size === 'small' ? '20px' : size === 'large' ? '40px' : '30px',
      }}
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
        strokeWidth="5"
      />
      {/* Inner hub */}
      <circle
        cx="50"
        cy="50"
        r="20"
        fill={color === 'copper' ? 'var(--copper-dark)' : 'var(--steel-dark)'}
      />
      {/* Spokes */}
      <line x1="50" y1="30" x2="50" y2="70" stroke="#fff" strokeWidth="2" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="2" />
      {/* Pivot point */}
      <circle
        cx="50"
        cy="50"
        r="5"
        fill={color === 'copper' ? 'var(--copper-light)' : 'var(--steel-light)'}
      />
    </svg>
  );

  return (
    <div className={jointClasses}>
      {jointSVG}
    </div>
  );
};

export default RobotJointElement;