import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';
import animationStyles from '../css/animations.module.css';

/**
 * CircuitPathwayRenderer Component
 * Displays glowing electronic pathways and schematic elements
 */
const CircuitPathwayRenderer = ({
  type = 'horizontal', // 'horizontal', 'vertical', 'diagonal', 'grid', 'radial'
  animate = true,
  intensity = 'medium', // 'low', 'medium', 'high'
  className = ''
}) => {
  const circuitClasses = [
    styles.circuitPathway,
    animate ? animationStyles.circuitPathway : '',
    colorStyles.bgHolographicBlueDark,
    className
  ].filter(Boolean).join(' ');

  // Intensity-based styling
  const intensityStyle = {
    low: { opacity: 0.3 },
    medium: { opacity: 0.6 },
    high: { opacity: 0.9 }
  };

  // Render different types of circuit pathways
  const renderCircuitPathway = () => {
    switch (type) {
      case 'horizontal':
        return (
          <svg
            viewBox="0 0 200 20"
            className="circuit-pathway-svg"
            style={{ width: '100%', height: '100%', ...intensityStyle[intensity] }}
          >
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--holographic-blue-light)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main pathway */}
            <path
              d="M10,10 Q50,5 100,10 T190,10"
              fill="none"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* Connection points */}
            <circle cx="10" cy="10" r="3" fill="var(--circuit-blue)" filter="url(#glow)" />
            <circle cx="190" cy="10" r="3" fill="var(--circuit-blue)" filter="url(#glow)" />

            {/* Intermediate nodes */}
            <circle cx="50" cy="5" r="2" fill="var(--circuit-green)" filter="url(#glow)" />
            <circle cx="100" cy="10" r="2" fill="var(--circuit-yellow)" filter="url(#glow)" />
            <circle cx="150" cy="15" r="2" fill="var(--circuit-red)" filter="url(#glow)" />
          </svg>
        );

      case 'vertical':
        return (
          <svg
            viewBox="0 0 20 200"
            className="circuit-pathway-svg"
            style={{ width: '100%', height: '100%', ...intensityStyle[intensity] }}
          >
            <defs>
              <linearGradient id="circuitGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--holographic-blue-light)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
              </linearGradient>
              <filter id="glowVertical">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main pathway */}
            <path
              d="M10,10 Q5,50 10,100 T10,190"
              fill="none"
              stroke="url(#circuitGradientVertical)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glowVertical)"
            />

            {/* Connection points */}
            <circle cx="10" cy="10" r="3" fill="var(--circuit-blue)" filter="url(#glowVertical)" />
            <circle cx="10" cy="190" r="3" fill="var(--circuit-blue)" filter="url(#glowVertical)" />

            {/* Intermediate nodes */}
            <circle cx="5" cy="50" r="2" fill="var(--circuit-green)" filter="url(#glowVertical)" />
            <circle cx="10" cy="100" r="2" fill="var(--circuit-yellow)" filter="url(#glowVertical)" />
            <circle cx="15" cy="150" r="2" fill="var(--circuit-red)" filter="url(#glowVertical)" />
          </svg>
        );

      case 'diagonal':
        return (
          <svg
            viewBox="0 0 200 200"
            className="circuit-pathway-svg"
            style={{ width: '100%', height: '100%', ...intensityStyle[intensity] }}
          >
            <defs>
              <linearGradient id="circuitGradientDiagonal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--holographic-blue-light)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--holographic-blue-medium)" stopOpacity="0" />
              </linearGradient>
              <filter id="glowDiagonal">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main pathway */}
            <path
              d="M20,20 Q80,60 100,100 T180,180"
              fill="none"
              stroke="url(#circuitGradientDiagonal)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glowDiagonal)"
            />

            {/* Connection points */}
            <circle cx="20" cy="20" r="3" fill="var(--circuit-blue)" filter="url(#glowDiagonal)" />
            <circle cx="180" cy="180" r="3" fill="var(--circuit-blue)" filter="url(#glowDiagonal)" />

            {/* Intermediate nodes */}
            <circle cx="80" cy="60" r="2" fill="var(--circuit-green)" filter="url(#glowDiagonal)" />
            <circle cx="100" cy="100" r="2" fill="var(--circuit-yellow)" filter="url(#glowDiagonal)" />
            <circle cx="150" cy="150" r="2" fill="var(--circuit-red)" filter="url(#glowDiagonal)" />
          </svg>
        );

      case 'grid':
        return (
          <svg
            viewBox="0 0 200 200"
            className="circuit-pathway-svg"
            style={{ width: '100%', height: '100%', ...intensityStyle[intensity] }}
          >
            <defs>
              <filter id="glowGrid">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Horizontal lines */}
            {[20, 60, 100, 140, 180].map((y, idx) => (
              <line
                key={`h-${idx}`}
                x1="20"
                y1={y}
                x2="180"
                y2={y}
                stroke="var(--holographic-blue-medium)"
                strokeWidth="1"
                strokeOpacity={0.5}
                filter="url(#glowGrid)"
              />
            ))}

            {/* Vertical lines */}
            {[20, 60, 100, 140, 180].map((x, idx) => (
              <line
                key={`v-${idx}`}
                x1={x}
                y1="20"
                x2={x}
                y2="180"
                stroke="var(--holographic-blue-medium)"
                strokeWidth="1"
                strokeOpacity={0.5}
                filter="url(#glowGrid)"
              />
            ))}

            {/* Intersection points */}
            {[20, 60, 100, 140, 180].forEach(x => {
              [20, 60, 100, 140, 180].forEach(y => {
                return (
                  <circle
                    key={`i-${x}-${y}`}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="var(--circuit-blue)"
                    filter="url(#glowGrid)"
                  />
                );
              });
            })}
          </svg>
        );

      case 'radial':
        return (
          <svg
            viewBox="0 0 200 200"
            className="circuit-pathway-svg"
            style={{ width: '100%', height: '100%', ...intensityStyle[intensity] }}
          >
            <defs>
              <linearGradient id="circuitGradientRadial" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--holographic-blue-medium)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--holographic-blue-light)" stopOpacity="0" />
              </linearGradient>
              <filter id="glowRadial">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Center node */}
            <circle
              cx="100"
              cy="100"
              r="8"
              fill="var(--circuit-blue)"
              filter="url(#glowRadial)"
            />

            {/* Radial pathways */}
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x = 100 + Math.cos(angle) * 70;
              const y = 100 + Math.sin(angle) * 70;

              return (
                <g key={`radial-${i}`}>
                  <line
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="url(#circuitGradientRadial)"
                    strokeWidth="2"
                    filter="url(#glowRadial)"
                  />
                  <circle cx={x} cy={y} r="3" fill="var(--circuit-green)" filter="url(#glowRadial)" />
                </g>
              );
            })}
          </svg>
        );

      default:
        return (
          <div className="circuit-pathway-placeholder">
            <p>Circuit pathway goes here</p>
          </div>
        );
    }
  };

  return (
    <div className={circuitClasses}>
      {renderCircuitPathway()}
    </div>
  );
};

export default CircuitPathwayRenderer;