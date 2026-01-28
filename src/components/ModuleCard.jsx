import React from 'react';
import SignalDot from './SignalDot';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * ModuleCard Component
 * Displays course modules with title, description, and signal indicator
 */
const ModuleCard = ({
  title,
  description,
  difficulty,
  duration,
  icon = 'gear',
  isAdvanced = false,
  onClick
}) => {
  return (
    <div
      className={`${styles.card} module-card ${styles.touchTargetButton}`}
      style={{
        backgroundColor: isAdvanced ? '#334155' : '#1e293b', // Steel medium for advanced
        borderColor: isAdvanced ? '#fb923c' : '#334155', // Amber for advanced
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        minHeight: '160px' // Ensure touch targets meet 44px minimum when considering padding
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <SignalDot isActive={!isAdvanced} isAdvanced={isAdvanced} style={{ marginRight: '0.75rem' }} />
        <h3 className={`${styles.headline} ${isAdvanced ? colorStyles.textAccentSecondary : colorStyles.textAccentPrimary}`}>
          {title}
        </h3>
      </div>

      <p className={styles.bodyText} style={{ marginBottom: '1rem', color: '#94a3b8' }}>
        {description}
      </p>

      <div className={styles.technicalText} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
        <span style={{ color: '#64748b' }}>{difficulty}</span>
        <span style={{ color: '#64748b' }}>{duration}</span>
      </div>

      {isAdvanced && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#fb923c',
            color: '#08090d',
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}
        >
          ADVANCED
        </div>
      )}
    </div>
  );
};

export default ModuleCard;