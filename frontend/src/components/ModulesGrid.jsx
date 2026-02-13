import React, { useEffect, useRef } from 'react';
import ModuleCard from './ModuleCard';
import { staggerGridReveal, conditionalAnimate } from '../utils/motion';
import { courseModules, coreModules } from '../data/modules';
import styles from '../css/industrial-styles.module.css';

/**
 * ModulesGrid Component
 * Grid layout for displaying course modules with staggered reveal animation
 */
const ModulesGrid = ({ modules = courseModules, onModuleClick }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    // Apply staggered reveal animation when component mounts
    if (gridRef.current) {
      conditionalAnimate(() => {
        const gridItems = gridRef.current.querySelectorAll('.module-card');
        staggerGridReveal(Array.from(gridItems), 100);
      });
    }
  }, []);

  return (
    <section className="modules-grid-section" style={{ marginBottom: '3rem' }}>
      <h2
        className={`${styles.headline} ${styles.staggeredReveal}`}
        style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Core Capabilities
      </h2>

      <div
        ref={gridRef}
        className={`${styles.gridContainer} ${styles.grid3Col}`}
        style={{ gap: '1.5rem' }}
      >
        {modules.map((module, index) => (
          <div key={module.id} className="module-item animate-on-load">
            <ModuleCard
              title={module.title}
              description={module.description}
              difficulty={module.difficulty}
              duration={module.duration}
              isAdvanced={coreModules.includes(module.id)} // Mark core modules as advanced for visual distinction
              onClick={() => onModuleClick && onModuleClick(module)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;