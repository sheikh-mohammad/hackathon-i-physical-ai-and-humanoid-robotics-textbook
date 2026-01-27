import React, { useEffect, useRef } from 'react';

/**
 * AnimationController Component
 * Implements animation sequences mixing CSS and JavaScript based on complexity
 */
const AnimationController = ({
  children,
  animationComplexity = 'simple',
  animationType = 'float',
  ...props
}) => {
  const elementRef = useRef(null);

  // Simple animations handled by CSS classes
  if (animationComplexity === 'simple') {
    return (
      <div
        ref={elementRef}
        className={`animate__${animationType}`}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Complex animations handled by JavaScript
  useEffect(() => {
    const element = elementRef.current;
    if (!element || animationComplexity !== 'complex') return;

    let animationFrame;
    let startTime = null;
    const duration = 5000; // 5 seconds for complex animations

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Complex multi-property animation
      const x = Math.sin(progress * Math.PI * 2) * 50; // Move horizontally
      const y = Math.cos(progress * Math.PI * 2) * 30; // Move vertically
      const rotation = progress * 360; // Full rotation

      element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Reset for loop
        startTime = null;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [animationComplexity]);

  return (
    <div
      ref={elementRef}
      {...props}
    >
      {children}
    </div>
  );
};

// Export helper functions for animation utilities
export const getAnimationComplexity = (animationName) => {
  // Define which animations should be complex vs simple
  const complexAnimations = [
    'complexFloat',
    'multiPath',
    'morphShape',
    'physicsBased'
  ];

  return complexAnimations.includes(animationName) ? 'complex' : 'simple';
};

export const applyAdaptiveAnimation = (element, animationType, deviceCapabilities) => {
  // Determine animation complexity based on device capabilities
  const isHighPerformanceDevice = deviceCapabilities?.hardwareConcurrency > 4;
  const hasHighMemory = deviceCapabilities?.deviceMemory >= 4;

  const animationComplexity = (isHighPerformanceDevice && hasHighMemory)
    ? 'complex'
    : 'simple';

  return { animationType, animationComplexity };
};

export default AnimationController;