import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';

/**
 * IndustrialContainer Component
 * Base component for industrial-themed containers with customizable styling
 */
const IndustrialContainer = ({
  children,
  className = '',
  variant = 'default',
  theme = 'dark',
  ...props
}) => {
  // Determine base classes based on props
  const baseClasses = [
    styles.industrialContainer,
    colorStyles[colorStyles.primaryBg],
    className
  ].filter(Boolean).join(' ');

  // Add theme class
  const themedClasses = theme === 'light'
    ? `${baseClasses} ${colorStyles.lightTheme}`
    : `${baseClasses} ${colorStyles.darkTheme}`;

  // Add variant-specific classes
  let variantClass = '';
  switch (variant) {
    case 'card':
      variantClass = styles.industrialCard;
      break;
    case 'steel':
      variantClass = colorStyles.bgSteelDark;
      break;
    case 'copper':
      variantClass = colorStyles.bgCopperDark;
      break;
    case 'blueprint':
      variantClass = `${styles.blueprintBorder} ${colorStyles.bgHolographicBlueDark}`;
      break;
    case 'mechanical':
      variantClass = `${styles.mechanicalElement} ${colorStyles.bgSteelMedium}`;
      break;
    case 'circuit':
      variantClass = `${styles.circuitPathway} ${colorStyles.bgHolographicBlueMedium}`;
      break;
    default:
      break;
  }

  const finalClasses = variantClass ? `${themedClasses} ${variantClass}` : themedClasses;

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
};

export default IndustrialContainer;