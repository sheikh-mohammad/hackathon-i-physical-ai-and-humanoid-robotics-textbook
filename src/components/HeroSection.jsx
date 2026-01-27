import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import IndustrialCard from './IndustrialCard';
import MechIcon from './MechIcon';
import RobotJointElement from './RobotJointElement';
import CircuitPathwayRenderer from './CircuitPathwayRenderer';
import KineticMotionHandler from './KineticMotionHandler';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * HeroSection Component
 * Creates a compelling header with value proposition and key benefits
 */
const HeroSection = ({
  title = "RoboCraft",
  subtitle = "Physical AI & Humanoid Robotics Textbook",
  description = "Master the art of building intelligent humanoid robots with our comprehensive guide covering ROS 2, NVIDIA Isaac, Gazebo simulation, and advanced AI integration.",
  ctaText = "Start Learning",
  onCtaClick = () => {},
  theme = 'dark',
  className = ''
}) => {
  const heroClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelDark,
    className
  ].filter(Boolean).join(' ');

  return (
    <IndustrialContainer
      className={heroClasses}
      variant="card"
      theme={theme}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background circuit pathways */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 0
        }}>
          <CircuitPathwayRenderer type="grid" animate={true} intensity="low" />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <MechIcon type="robot" size="large" color="copper" animate={true} />
            <h1 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`} style={{ marginLeft: '1rem', fontSize: '2.5rem' }}>
              {title}
            </h1>
          </div>

          <h2 className={`${colorStyles.steelText}`} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            {subtitle}
          </h2>

          <p className={`${colorStyles.steelText}`} style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            {description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <KineticMotionHandler trigger="hover">
              <button
                onClick={onCtaClick}
                className={`${styles.kineticHighlight} ${colorStyles.bgCopperMedium} ${animationStyles.themeTransition}`}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  color: '#000',
                  fontSize: '1rem'
                }}
              >
                {ctaText}
              </button>
            </KineticMotionHandler>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RobotJointElement size="small" animate={true} />
              <span className={colorStyles.copperHighlight}>Advanced Robotics</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MechIcon type="circuit" size="small" animate={true} />
              <span className={colorStyles.copperHighlight}>AI Integration</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MechIcon type="engine" size="small" animate={true} />
              <span className={colorStyles.copperHighlight}>Simulation</span>
            </div>
          </div>
        </div>
      </div>
    </IndustrialContainer>
  );
};

export default HeroSection;