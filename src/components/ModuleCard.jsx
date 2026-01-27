import React from 'react';
import IndustrialCard from './IndustrialCard';
import MechIcon from './MechIcon';
import RobotJointElement from './RobotJointElement';
import KineticMotionHandler from './KineticMotionHandler';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * ModuleCard Component
 * Structured presentation of course modules with icons and descriptions
 */
const ModuleCard = ({
  title = 'Module Title',
  description = 'Module description goes here',
  icon = 'gear', // 'gear', 'bolt', 'circuit', 'robot', 'engine', 'sensor'
  number = 1,
  duration = '2-3 hours',
  difficulty = 'Intermediate', // 'Beginner', 'Intermediate', 'Advanced'
  theme = 'dark',
  className = '',
  onClick = () => {}
}) => {
  const difficultyColors = {
    Beginner: colorStyles.copperLight,
    Intermediate: colorStyles.copperMedium,
    Advanced: colorStyles.copperDark
  };

  const difficultyBgColors = {
    Beginner: colorStyles.bgCopperLight,
    Intermediate: colorStyles.bgCopperMedium,
    Advanced: colorStyles.bgCopperDark
  };

  const cardClasses = [
    styles.industrialCard,
    colorStyles.bgSteelMedium,
    className
  ].filter(Boolean).join(' ');

  return (
    <KineticMotionHandler trigger="hover">
      <IndustrialCard
        className={cardClasses}
        title={
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className={colorStyles.copperHighlight}>Module {number}</span>
            <MechIcon type={icon} size="small" animate={true} />
          </span>
        }
        theme={theme}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <h3 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`} style={{ marginBottom: '0.5rem' }}>
          {title}
        </h3>

        <p className={colorStyles.steelText} style={{ marginBottom: '1rem', lineHeight: '1.5' }}>
          {description}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RobotJointElement size="small" animate={true} />
            <span className={colorStyles.steelText}>{duration}</span>
          </div>

          <span
            className={`${difficultyBgColors[difficulty]} ${colorStyles.bgSteelDark}`}
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}
          >
            {difficulty}
          </span>
        </div>
      </IndustrialCard>
    </KineticMotionHandler>
  );
};

export default ModuleCard;