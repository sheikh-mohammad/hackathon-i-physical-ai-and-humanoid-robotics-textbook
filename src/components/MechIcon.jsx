import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * MechIcon Component
 * Creates animated mechanical-themed icons with industrial aesthetic
 */
const MechIcon = ({
  type = 'gear', // 'gear', 'bolt', 'circuit', 'robot', 'engine', 'sensor'
  size = 'medium',
  color = 'copper',
  animate = true,
  className = ''
}) => {
  // Size classes
  const sizeClasses = {
    small: 'icon-size-small',
    medium: 'icon-size-medium',
    large: 'icon-size-large'
  };

  // Color classes
  const colorClasses = {
    copper: colorStyles.copperMedium,
    steel: colorStyles.steelMedium,
    blue: colorStyles.holographicBlueMedium,
    circuit: colorStyles.circuitBlue
  };

  const iconClasses = [
    styles.mechanicalElement,
    animate ? animationStyles.mechanicalElement : '',
    colorClasses[color] || colorClasses.copper,
    sizeClasses[size] || sizeClasses.medium,
    className
  ].filter(Boolean).join(' ');

  // Create SVG based on type
  const renderIcon = () => {
    const baseSize = size === 'small' ? 16 : size === 'large' ? 32 : 24;

    switch (type) {
      case 'gear':
        return (
          <svg
            viewBox="0 0 24 24"
            className={`mech-icon-svg ${animate ? animationStyles.gearElement : ''}`}
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <path
              d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.65-.07-.97l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.32-.07.65-.07.97 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
              fill={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
            />
          </svg>
        );

      case 'bolt':
        return (
          <svg
            viewBox="0 0 24 24"
            className="mech-icon-svg"
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <path
              d="M11 2 2 11h3v10h6V13h2v8h6V11h3L13 2h-2Z"
              fill={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
            />
          </svg>
        );

      case 'circuit':
        return (
          <svg
            viewBox="0 0 24 24"
            className={`mech-icon-svg ${animate ? animationStyles.circuitPathway : ''}`}
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              fill="none"
              stroke={color === 'copper' ? 'var(--circuit-blue)' : 'var(--holographic-blue-medium)'}
              strokeWidth="2"
            />
            <circle cx="8" cy="8" r="1" fill={color === 'copper' ? 'var(--circuit-green)' : 'var(--holographic-blue-highlight)'} />
            <circle cx="16" cy="8" r="1" fill={color === 'copper' ? 'var(--circuit-red)' : 'var(--holographic-blue-highlight)'} />
            <circle cx="8" cy="16" r="1" fill={color === 'copper' ? 'var(--circuit-yellow)' : 'var(--holographic-blue-highlight)'} />
            <circle cx="16" cy="16" r="1" fill={color === 'copper' ? 'var(--circuit-blue)' : 'var(--holographic-blue-highlight)'} />
            <path
              d="M8 9v6M16 9v6M9 8h6M9 16h6"
              stroke={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
              strokeWidth="1"
            />
          </svg>
        );

      case 'robot':
        return (
          <svg
            viewBox="0 0 24 24"
            className="mech-icon-svg"
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              fill="none"
              stroke={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
              strokeWidth="2"
            />
            <circle cx="9" cy="9" r="1" fill={color === 'copper' ? 'var(--copper-highlight)' : 'var(--holographic-blue-highlight)'} />
            <circle cx="15" cy="9" r="1" fill={color === 'copper' ? 'var(--copper-highlight)' : 'var(--holographic-blue-highlight)'} />
            <rect x="8" y="12" width="8" height="2" rx="1" fill={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'} />
          </svg>
        );

      case 'engine':
        return (
          <svg
            viewBox="0 0 24 24"
            className="mech-icon-svg"
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <path
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
              fill={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
            />
            <circle cx="12" cy="12" r="4" fill={color === 'copper' ? 'var(--copper-dark)' : 'var(--steel-dark)'} />
            <path
              d="M12 8v8M8 12h8"
              stroke="#fff"
              strokeWidth="1"
            />
          </svg>
        );

      case 'sensor':
        return (
          <svg
            viewBox="0 0 24 24"
            className={`mech-icon-svg ${animate ? animationStyles.glowPulse : ''}`}
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke={color === 'copper' ? 'var(--circuit-blue)' : 'var(--holographic-blue-medium)'}
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              fill="none"
              stroke={color === 'copper' ? 'var(--circuit-green)' : 'var(--holographic-blue-light)'}
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              fill={color === 'copper' ? 'var(--circuit-yellow)' : 'var(--holographic-blue-highlight)'}
            />
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 24 24"
            className="mech-icon-svg"
            style={{ width: `${baseSize}px`, height: `${baseSize}px` }}
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"
              fill={color === 'copper' ? 'var(--copper-medium)' : 'var(--steel-medium)'}
            />
          </svg>
        );
    }
  };

  return (
    <div className={iconClasses}>
      {renderIcon()}
    </div>
  );
};

export default MechIcon;