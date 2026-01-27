import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import MechIcon from './MechIcon';
import CircuitPathwayRenderer from './CircuitPathwayRenderer';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * FooterResources Component
 * Comprehensive collection of links and community connections
 */
const FooterResources = ({
  resources = [],
  socialLinks = [],
  theme = 'dark',
  className = ''
}) => {
  const footerClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelDark,
    className
  ].filter(Boolean).join(' ');

  return (
    <IndustrialContainer
      className={footerClasses}
      variant="steel"
      theme={theme}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '2px solid var(--copper-medium)'
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
        <CircuitPathwayRenderer type="radial" animate={true} intensity="low" />
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`} style={{ marginBottom: '1rem' }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {resources.map((resource, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href={resource.href}
                    className={`${colorStyles.steelText} ${animationStyles.themeTransition}`}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.25rem 0'
                    }}
                  >
                    <MechIcon type={resource.icon || 'bolt'} size="small" color="copper" animate={true} />
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`} style={{ marginBottom: '1rem' }}>
              Community
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${colorStyles.steelText} ${animationStyles.themeTransition}`}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    background: 'rgba(184, 115, 51, 0.1)'
                  }}
                >
                  <MechIcon type={link.icon || 'sensor'} size="small" color="copper" animate={true} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${colorStyles.copperHighlight} ${animationStyles.glowPulse}`} style={{ marginBottom: '1rem' }}>
              Contact
            </h3>
            <p className={colorStyles.steelText}>
              Connect with fellow robotics enthusiasts and get support for your projects.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <MechIcon type="robot" size="small" color="copper" animate={true} />
              <span className={colorStyles.steelText}>robotics@robocraft.dev</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(184, 115, 51, 0.3)', paddingTop: '1rem', textAlign: 'center' }}>
          <p className={colorStyles.steelText} style={{ margin: 0 }}>
            © {new Date().getFullYear()} RoboCraft - Physical AI & Humanoid Robotics Textbook
          </p>
        </div>
      </div>
    </IndustrialContainer>
  );
};

export default FooterResources;