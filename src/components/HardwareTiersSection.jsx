import React, { useEffect, useRef } from 'react';
import HardwareTierCard from './HardwareTierCard';
import { staggerGridReveal, conditionalAnimate } from '../utils/motion';
import { hardwareTiers } from '../data/hardware-tiers';
import styles from '../css/industrial-styles.module.css';

/**
 * HardwareTiersSection Component
 * Displays hardware tiers with visual recommendation markers
 */
const HardwareTiersSection = ({ onTierSelect }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Apply staggered reveal animation when component mounts
    if (sectionRef.current) {
      conditionalAnimate(() => {
        const gridItems = sectionRef.current.querySelectorAll('.hardware-tier-card');
        staggerGridReveal(Array.from(gridItems), 200);
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="hardware-tiers-section" style={{ marginBottom: '3rem' }}>
      <h2
        className={`${styles.headline} ${styles.staggeredReveal}`}
        style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Hardware & System Requirements
      </h2>

      <div className={`${styles.gridContainer} ${styles.grid3Col}`} style={{ gap: '2rem' }}>
        {hardwareTiers.map((tier, index) => (
          <div key={tier.id} className="tier-item animate-on-load">
            <HardwareTierCard
              name={tier.name}
              description={tier.description}
              cost={tier.cost}
              isRecommended={tier.recommendation === 'recommended'}
              requirements={tier.requirements}
              features={tier.features}
              simulationOnly={tier.simulationOnly}
              onClick={() => onTierSelect && onTierSelect(tier)}
            />
          </div>
        ))}
      </div>

      {/* Simulation-only path visibility */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div className={`${styles.technicalText} ${styles.card}`} style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid #22c55e'
        }}>
          <p style={{ margin: 0, color: '#22c55e' }}>
            <strong>No Hardware?</strong> Start with our free simulation-only path and upgrade later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HardwareTiersSection;