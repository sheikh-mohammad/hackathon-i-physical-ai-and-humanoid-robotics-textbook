import React from 'react';
import styles from './HolographicCard.module.css';
import GlassContainer from '../GlassContainer/GlassContainer';

/**
 * HolographicCard Component
 * Extends GlassContainer with additional holographic styling
 */
const HolographicCard = ({
  children,
  title,
  variant = 'default',
  className = '',
  ...props
}) => {
  const cardClassNames = `${styles.holographicCard} ${styles[`holographicCard--${variant}`]} ${className}`;

  return (
    <GlassContainer className={cardClassNames} {...props}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardContent}>
        {children}
      </div>
    </GlassContainer>
  );
};

export default HolographicCard;