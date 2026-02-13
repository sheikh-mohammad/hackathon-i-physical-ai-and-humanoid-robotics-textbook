import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/industrial-styles.module.css';

/**
 * Interactive3DRobotPreview Component
 * Interactive robot preview with cursor-tracking rotation
 * Follows mouse movement for natural interaction
 */
const Interactive3DRobotPreview = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hoveredPart, setHoveredPart] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);

  // Handle mouse move for cursor-tracking rotation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position relative to center
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate rotation angles (normalized to -30 to 30 degrees)
    const rotationY = ((mouseX - centerX) / rect.width) * 60; // Horizontal rotation
    const rotationX = -((mouseY - centerY) / rect.height) * 30; // Vertical rotation (inverted)

    setRotation({
      x: Math.max(-30, Math.min(30, rotationX)),
      y: Math.max(-60, Math.min(60, rotationY))
    });
    setIsAnimating(false);
  };

  // Reset to center when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsAnimating(true);
  };

  // Breathing animation
  const breathingScale = isAnimating ? 'scale(1.02)' : 'scale(1)';

  // Robot parts with tooltips
  const robotParts = [
    { id: 'head', label: 'AI Vision System', x: 50, y: 15 },
    { id: 'torso', label: 'Balance Sensors', x: 50, y: 40 },
    { id: 'arms', label: 'Servo Motors', x: 30, y: 35 },
    { id: 'legs', label: 'Actuators', x: 50, y: 70 }
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '300px',
        height: '400px',
        perspective: '1000px',
        cursor: 'default',
        userSelect: 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Robot Container */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${breathingScale}`,
          transition: isAnimating ? 'transform 2s ease-in-out' : 'transform 0.3s ease-out',
          position: 'relative'
        }}
      >
        {/* Robot SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 300"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))'
          }}
        >
          {/* Head */}
          <g
            onMouseEnter={() => setHoveredPart('head')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="75"
              y="20"
              width="50"
              height="40"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Eyes with glow */}
            <circle
              cx="85"
              cy="35"
              r="5"
              fill="#22c55e"
              style={{
                filter: 'drop-shadow(0 0 5px #22c55e)',
                animation: 'eyeGlow 2s ease-in-out infinite'
              }}
            />
            <circle
              cx="115"
              cy="35"
              r="5"
              fill="#22c55e"
              style={{
                filter: 'drop-shadow(0 0 5px #22c55e)',
                animation: 'eyeGlow 2s ease-in-out infinite'
              }}
            />
          </g>

          {/* Torso */}
          <g
            onMouseEnter={() => setHoveredPart('torso')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="60"
              y="70"
              width="80"
              height="80"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Core indicator */}
            <circle
              cx="100"
              cy="110"
              r="15"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2"
              style={{
                animation: 'corePulse 2s ease-in-out infinite'
              }}
            />
          </g>

          {/* Left Arm */}
          <g
            onMouseEnter={() => setHoveredPart('arms')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="30"
              y="80"
              width="25"
              height="60"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Joint */}
            <circle
              cx="42.5"
              cy="110"
              r="5"
              fill="#fb923c"
              style={{
                animation: 'jointArticulation 3s ease-in-out infinite'
              }}
            />
          </g>

          {/* Right Arm */}
          <g
            onMouseEnter={() => setHoveredPart('arms')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="145"
              y="80"
              width="25"
              height="60"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Joint */}
            <circle
              cx="157.5"
              cy="110"
              r="5"
              fill="#fb923c"
              style={{
                animation: 'jointArticulation 3s ease-in-out infinite 0.5s'
              }}
            />
          </g>

          {/* Left Leg */}
          <g
            onMouseEnter={() => setHoveredPart('legs')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="70"
              y="160"
              width="25"
              height="80"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Knee joint */}
            <circle
              cx="82.5"
              cy="200"
              r="5"
              fill="#fb923c"
            />
          </g>

          {/* Right Leg */}
          <g
            onMouseEnter={() => setHoveredPart('legs')}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <rect
              x="105"
              y="160"
              width="25"
              height="80"
              fill="#1e293b"
              stroke="#f97316"
              strokeWidth="2"
            />
            {/* Knee joint */}
            <circle
              cx="117.5"
              cy="200"
              r="5"
              fill="#fb923c"
            />
          </g>
        </svg>
      </div>

      {/* Hover Tooltip */}
      {hoveredPart && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(249, 115, 22, 0.95)',
            color: '#08090d',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            fontFamily: 'JetBrains Mono, monospace',
            pointerEvents: 'none',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          {robotParts.find(part => part.id === hoveredPart)?.label}
        </div>
      )}

      {/* Instruction Text */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.75rem',
          color: '#64748b',
          fontFamily: 'JetBrains Mono, monospace',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        Move cursor to rotate
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes eyeGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes corePulse {
          0%, 100% {
            r: 15;
            opacity: 1;
          }
          50% {
            r: 18;
            opacity: 0.7;
          }
        }

        @keyframes jointArticulation {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Interactive3DRobotPreview;
