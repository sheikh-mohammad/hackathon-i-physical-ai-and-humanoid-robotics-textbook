import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * BlueprintRenderer Component
 * Renders technical drawing and blueprint-style visual elements
 */
const BlueprintRenderer = ({
  content,
  type = 'diagram', // 'diagram', 'schematic', 'layout', 'section'
  animate = true,
  className = ''
}) => {
  const blueprintClasses = [
    styles.blueprintBorder,
    animate ? animationStyles.blueprintElement : '',
    colorStyles.bgSteelDark,
    className
  ].filter(Boolean).join(' ');

  // Render different types of blueprints
  const renderBlueprint = () => {
    switch (type) {
      case 'diagram':
        return (
          <svg
            viewBox="0 0 200 150"
            className="blueprint-svg"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Frame */}
            <rect
              x="5"
              y="5"
              width="190"
              height="140"
              fill="none"
              stroke="var(--steel-text)"
              strokeWidth="1"
              strokeDasharray="4,2"
            />

            {/* Main component */}
            <rect
              x="50"
              y="40"
              width="100"
              height="60"
              fill="none"
              stroke="var(--copper-medium)"
              strokeWidth="2"
            />

            {/* Internal components */}
            <circle cx="75" cy="65" r="8" fill="none" stroke="var(--steel-text)" strokeWidth="1" />
            <circle cx="125" cy="65" r="8" fill="none" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Connection lines */}
            <line x1="75" y1="73" x2="75" y2="90" stroke="var(--steel-text)" strokeWidth="1" />
            <line x1="125" y1="73" x2="125" y2="90" stroke="var(--steel-text)" strokeWidth="1" />
            <line x1="75" y1="90" x2="125" y2="90" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Dimensions */}
            <line x1="50" y1="30" x2="150" y2="30" stroke="var(--steel-text)" strokeWidth="0.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <text x="100" y="25" fontSize="8" fill="var(--steel-text)" textAnchor="middle">100</text>

            {/* Grid pattern */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--steel-light)" strokeWidth="0.2"/>
              </pattern>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 z" fill="var(--steel-text)" />
              </marker>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="url(#grid)" />
          </svg>
        );

      case 'schematic':
        return (
          <svg
            viewBox="0 0 200 150"
            className="blueprint-svg"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Title block */}
            <rect x="10" y="130" width="180" height="15" fill="none" stroke="var(--steel-text)" strokeWidth="0.5" />
            <text x="20" y="140" fontSize="6" fill="var(--steel-text)">SCHEMATIC DIAGRAM - ROBOT JOINT</text>

            {/* Circuit elements */}
            <rect x="30" y="30" width="20" height="20" fill="none" stroke="var(--copper-medium)" strokeWidth="1" />
            <text x="40" y="45" fontSize="6" fill="var(--steel-text)" textAnchor="middle">IC1</text>

            <circle cx="80" cy="40" r="10" fill="none" stroke="var(--copper-medium)" strokeWidth="1" />
            <text x="80" y="45" fontSize="6" fill="var(--steel-text)" textAnchor="middle">R1</text>

            <path d="M50,40 L70,40" stroke="var(--steel-text)" strokeWidth="1" />
            <path d="M90,40 L110,40" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Ground symbol */}
            <line x1="110" y1="40" x2="110" y2="50" stroke="var(--steel-text)" strokeWidth="1" />
            <line x1="105" y1="50" x2="115" y2="50" stroke="var(--steel-text)" strokeWidth="1" />
            <line x1="107" y1="52" x2="113" y2="52" stroke="var(--steel-text)" strokeWidth="1" />
            <line x1="109" y1="54" x2="111" y2="54" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Grid */}
            <defs>
              <pattern id="schematic-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--steel-light)" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="url(#schematic-grid)" />
          </svg>
        );

      case 'layout':
        return (
          <svg
            viewBox="0 0 200 150"
            className="blueprint-svg"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Main housing */}
            <rect x="20" y="20" width="160" height="110" rx="5" fill="none" stroke="var(--copper-medium)" strokeWidth="2" />

            {/* Internal sections */}
            <rect x="30" y="30" width="60" height="40" fill="none" stroke="var(--steel-text)" strokeWidth="1" />
            <rect x="110" y="30" width="60" height="40" fill="none" stroke="var(--steel-text)" strokeWidth="1" />
            <rect x="30" y="80" width="140" height="30" fill="none" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Labels */}
            <text x="60" y="55" fontSize="8" fill="var(--steel-text)" textAnchor="middle">CONTROL</text>
            <text x="140" y="55" fontSize="8" fill="var(--steel-text)" textAnchor="middle">POWER</text>
            <text x="100" y="100" fontSize="8" fill="var(--steel-text)" textAnchor="middle">INTERFACE</text>

            {/* Connection ports */}
            <circle cx="20" cy="50" r="5" fill="none" stroke="var(--copper-medium)" strokeWidth="1" />
            <circle cx="20" cy="80" r="5" fill="none" stroke="var(--copper-medium)" strokeWidth="1" />
            <circle cx="180" cy="50" r="5" fill="none" stroke="var(--copper-medium)" strokeWidth="1" />

            {/* Grid */}
            <defs>
              <pattern id="layout-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--steel-light)" strokeWidth="0.2"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="url(#layout-grid)" />
          </svg>
        );

      case 'section':
        return (
          <svg
            viewBox="0 0 200 150"
            className="blueprint-svg"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Section cut line */}
            <path d="M20,20 L180,20 L180,130 L20,130 Z" fill="none" stroke="var(--copper-medium)" strokeWidth="2" />

            {/* Internal components */}
            <ellipse cx="100" cy="75" rx="40" ry="30" fill="none" stroke="var(--steel-text)" strokeWidth="1" />
            <circle cx="100" cy="75" r="15" fill="none" stroke="var(--steel-text)" strokeWidth="1" />

            {/* Section lines */}
            <line x1="60" y1="75" x2="140" y2="75" stroke="var(--steel-text)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="100" y1="45" x2="100" y2="105" stroke="var(--steel-text)" strokeWidth="0.5" strokeDasharray="2,2" />

            {/* Hatch pattern */}
            <defs>
              <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="var(--steel-light)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="section-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--steel-light)" strokeWidth="0.1"/>
              </pattern>
            </defs>

            {/* Apply hatch to section */}
            <path d="M60,45 L140,45 L140,105 L60,105 Z" fill="url(#hatch)" />
            <rect x="0" y="0" width="200" height="150" fill="url(#section-grid)" />
          </svg>
        );

      default:
        return (
          <div className="blueprint-placeholder">
            <p>Blueprint content goes here</p>
          </div>
        );
    }
  };

  return (
    <div className={blueprintClasses}>
      {renderBlueprint()}
    </div>
  );
};

export default BlueprintRenderer;