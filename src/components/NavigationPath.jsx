import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import MechIcon from './MechIcon';
import CircuitPathwayRenderer from './CircuitPathwayRenderer';
import KineticMotionHandler from './KineticMotionHandler';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * NavigationPath Component
 * Provides clear pathways and call-to-action buttons for user journey
 */
const NavigationPath = ({
  items = [],
  orientation = 'horizontal', // 'horizontal', 'vertical', 'grid'
  theme = 'dark',
  className = ''
}) => {
  const navClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelDark,
    className
  ].filter(Boolean).join(' ');

  const layoutStyle = {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '1rem',
      flexWrap: 'wrap'
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }
  };

  return (
    <IndustrialContainer
      className={navClasses}
      variant="circuit"
      theme={theme}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background circuit pathway */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        zIndex: 0
      }}>
        <CircuitPathwayRenderer type="grid" animate={true} intensity="low" />
      </div>

      <div style={{ position: 'relative', zIndex: 1, ...layoutStyle[orientation] }}>
        {items.map((item, index) => (
          <KineticMotionHandler key={index} trigger="hover">
            <a
              href={item.href || '#'}
              onClick={item.onClick}
              className={`${styles.kineticHighlight} ${animationStyles.themeTransition}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                background: 'rgba(184, 115, 51, 0.1)',
                border: '1px solid rgba(184, 115, 51, 0.3)',
                color: 'var(--copper-medium)',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              <MechIcon type={item.icon || 'gear'} size="small" color="copper" animate={true} />
              <span>{item.label}</span>
              {item.cta && (
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.8rem',
                  background: 'var(--copper-medium)',
                  color: '#000',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>
                  {item.cta}
                </span>
              )}
            </a>
          </KineticMotionHandler>
        ))}
      </div>
    </IndustrialContainer>
  );
};

export default NavigationPath;