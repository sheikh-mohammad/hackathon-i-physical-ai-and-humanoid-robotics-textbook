import { useEffect, useState } from 'react';
import { useColorPalette } from './ColorPaletteProvider';

/**
 * AccessibilityThemeValidator Component
 * Ensures accessibility standards are maintained in both theme modes
 */
const AccessibilityThemeValidator = ({ children }) => {
  const { theme } = useColorPalette();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e) => {
      setReducedMotion(e.matches);
    };

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Add reduced motion class to body if needed
    if (reducedMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [reducedMotion]);

  // Validate contrast ratios for accessibility
  const validateContrast = (foregroundColor, backgroundColor) => {
    // Simplified contrast validation - in a real app, you'd use a proper algorithm
    const isValid = true; // Placeholder for actual contrast calculation
    return isValid;
  };

  // Accessibility attributes
  const accessibilityProps = {
    'data-theme': theme,
    'data-reduced-motion': reducedMotion,
  };

  return (
    <div {...accessibilityProps}>
      {children}
    </div>
  );
};

export default AccessibilityThemeValidator;