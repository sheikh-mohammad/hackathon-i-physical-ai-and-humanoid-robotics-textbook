import React, { useEffect, useRef } from 'react';
import SignalDot from './SignalDot';
import { conditionalAnimate } from '../utils/motion';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * FeaturesSection Component
 * Displays product capabilities with at least 6 features and core markings
 */
const FeaturesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Apply staggered reveal animation when component mounts
    if (sectionRef.current) {
      conditionalAnimate(() => {
        const elements = sectionRef.current.querySelectorAll('.feature-item');
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';

            // Force reflow
            el.offsetHeight;

            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 150); // Stagger the animation
        });
      });
    }
  }, []);

  // Features data
  const features = [
    {
      id: 1,
      title: "Physical AI Systems",
      description: "Build embodied AI that interacts with the real world through robotics",
      isCore: true
    },
    {
      id: 2,
      title: "Humanoid Robotics",
      description: "Develop control systems for advanced humanoid robot platforms",
      isCore: true
    },
    {
      id: 3,
      title: "Simulation & Testing",
      description: "Validate algorithms in realistic physics-based environments",
      isCore: false
    },
    {
      id: 4,
      title: "ROS 2 Integration",
      description: "Seamless integration with the Robot Operating System 2",
      isCore: false
    },
    {
      id: 5,
      title: "NVIDIA Isaac",
      description: "Leverage advanced AI and perception capabilities",
      isCore: false
    },
    {
      id: 6,
      title: "Safety Protocols",
      description: "Built-in safety systems for reliable robot operation",
      isCore: false
    },
    {
      id: 7,
      title: "Cloud Deployment",
      description: "Deploy and manage robots at scale",
      isCore: false
    },
    {
      id: 8,
      title: "Developer Tools",
      description: "Comprehensive toolkit for rapid prototyping",
      isCore: false
    }
  ];

  return (
    <section ref={sectionRef} className="features-section" style={{ marginBottom: '3rem' }}>
      <h2
        className={`${styles.headline} ${colorStyles.textAccentPrimary}`}
        style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Product Capabilities
      </h2>

      <div className={styles.gridContainer} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`feature-item card ${styles.card} ${feature.isCore ? styles.coreFeature : ''}`}
            style={{
              backgroundColor: feature.isCore ? '#334155' : '#1e293b', // Steel medium for core features
              borderColor: feature.isCore ? '#f97316' : '#334155', // Orange for core features
              borderWidth: feature.isCore ? '2px' : '1px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <SignalDot isActive={!feature.isCore} isAdvanced={feature.isCore} style={{ marginRight: '0.75rem' }} />
              <h3 className={`${styles.headline} ${feature.isCore ? colorStyles.textAccentPrimary : colorStyles.textAccentSecondary}`}>
                {feature.title}
                {feature.isCore && (
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      backgroundColor: '#f97316',
                      color: '#08090d',
                      padding: '0.125rem 0.375rem',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      borderRadius: '2px'
                    }}
                  >
                    CORE
                  </span>
                )}
              </h3>
            </div>

            <p className={styles.bodyText} style={{ color: '#94a3b8' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;