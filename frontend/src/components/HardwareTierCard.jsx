import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * HardwareTierCard Component
 * Displays hardware tier options with cost and recommendation context
 */
const HardwareTierCard = ({
  name,
  description,
  cost,
  isRecommended = false,
  requirements = {},
  features = [],
  simulationOnly = false,
  onClick
}) => {
  return (
    <div
      className={`${styles.card} hardware-tier-card ${styles.touchTargetButton}`}
      style={{
        borderColor: isRecommended ? '#f97316' : '#334155',
        borderWidth: isRecommended ? '2px' : '1px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: '300px', // Ensure adequate touch target size
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, outline 0.2s ease',
        outline: '2px solid transparent',
        outlineOffset: '2px'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)';
        e.currentTarget.style.outline = isRecommended ? '2px solid #f97316' : '2px solid #fb923c';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.outline = '2px solid transparent';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = isRecommended ? '2px solid #f97316' : '2px solid #fb923c';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = '2px solid transparent';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
      tabIndex={0}
      role="button"
      aria-label={`${name} - ${cost}${isRecommended ? ' (Recommended)' : ''}`}
    >
      {isRecommended && (
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            backgroundColor: '#f97316',
            color: 'white',
            padding: '0.25rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            transform: 'rotate(45deg)',
            transformOrigin: 'center',
            zIndex: 1
          }}
        >
          RECOMMENDED
        </div>
      )}

      <h3 className={`${styles.headline} ${isRecommended ? colorStyles.textAccentPrimary : colorStyles.textAccentSecondary}`}>
        {name}
      </h3>

      <p className={styles.bodyText} style={{ marginBottom: '1rem', color: '#94a3b8' }}>
        {description}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <div className={styles.technicalText} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f97316', marginBottom: '0.5rem' }}>
          {cost}
        </div>

        {simulationOnly && (
          <div
            style={{
              backgroundColor: '#22c55e',
              color: '#08090d',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              display: 'inline-block',
              borderRadius: '0'
            }}
          >
            SIMULATION ONLY
          </div>
        )}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ marginBottom: '0.5rem' }}>
          Requirements:
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {requirements.cpu && <li style={{ marginBottom: '0.25rem' }}>CPU: {requirements.cpu}</li>}
          {requirements.ram && <li style={{ marginBottom: '0.25rem' }}>RAM: {requirements.ram}</li>}
          {requirements.gpu && <li style={{ marginBottom: '0.25rem' }}>GPU: {requirements.gpu}</li>}
          {requirements.storage && <li style={{ marginBottom: '0.25rem' }}>Storage: {requirements.storage}</li>}
          {requirements.os && <li style={{ marginBottom: '0.25rem' }}>OS: {requirements.os.join(', ')}</li>}
        </ul>
      </div>

      <div>
        <h4 className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ marginBottom: '0.5rem' }}>
          Included:
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '0.25rem' }}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HardwareTierCard;