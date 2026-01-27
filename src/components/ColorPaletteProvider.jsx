import React, { createContext, useContext, useState, useEffect } from 'react';
import colorStyles from '../css/color-palette.module.css';

/**
 * ColorPaletteProvider Component
 * Context provider for managing industrial-kinetic futurism color palette
 */
const ColorPaletteContext = createContext();

const ColorPaletteProvider = ({ children, initialTheme = 'dark' }) => {
  const [theme, setTheme] = useState(initialTheme);

  // Apply theme class to body for global styling
  useEffect(() => {
    const body = document.body;
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(`${theme}-theme`);

    return () => {
      body.classList.remove(`${theme}-theme`);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
    colors: {
      // Steel colors
      steelDark: colorStyles.steelDark,
      steelMedium: colorStyles.steelMedium,
      steelLight: colorStyles.steelLight,
      steelText: colorStyles.steelText,

      // Copper accents
      copperDark: colorStyles.copperDark,
      copperMedium: colorStyles.copperMedium,
      copperLight: colorStyles.copperLight,
      copperHighlight: colorStyles.copperHighlight,

      // Holographic blue
      holographicBlueDark: colorStyles.holographicBlueDark,
      holographicBlueMedium: colorStyles.holographicBlueMedium,
      holographicBlueLight: colorStyles.holographicBlueLight,
      holographicBlueHighlight: colorStyles.holographicBlueHighlight,

      // Circuit colors
      circuitRed: colorStyles.circuitRed,
      circuitGreen: colorStyles.circuitGreen,
      circuitBlue: colorStyles.circuitBlue,
      circuitYellow: colorStyles.circuitYellow,

      // Accessibility colors
      accessibleBlue: colorStyles.accessibleBlue,
      accessibleGreen: colorStyles.accessibleGreen,
      accessibleOrange: colorStyles.accessibleOrange,
      accessiblePurple: colorStyles.accessiblePurple,
    },
    // Utility class mappings
    bgClasses: {
      steelDark: colorStyles.bgSteelDark,
      steelMedium: colorStyles.bgSteelMedium,
      steelLight: colorStyles.bgSteelLight,
      copperDark: colorStyles.bgCopperDark,
      copperMedium: colorStyles.bgCopperMedium,
      copperLight: colorStyles.bgCopperLight,
      holographicBlueDark: colorStyles.bgHolographicBlueDark,
      holographicBlueMedium: colorStyles.bgHolographicBlueMedium,
      accessibleBlue: colorStyles.bgAccessibleBlue,
      accessibleGreen: colorStyles.bgAccessibleGreen,
      accessibleOrange: colorStyles.bgAccessibleOrange,
    }
  };

  return (
    <ColorPaletteContext.Provider value={value}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

// Custom hook to use the color palette context
const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error('useColorPalette must be used within a ColorPaletteProvider');
  }
  return context;
};

export { ColorPaletteProvider, useColorPalette };
export default ColorPaletteProvider;