import React from 'react';

/**
 * ColorPaletteProvider Component
 * Provides specific color values for holographic aesthetic
 */
const ColorPaletteProvider = ({ children }) => {
  // Define specific hex/RGB values for holographic aesthetic
  const colorPalette = {
    // Primary holographic blues
    holographicBlue: '#87CEEB',        // Sky Blue
    holographicBlueLight: '#B0E0E6',   // Powder Blue
    holographicBlueDark: '#4682B4',    // Steel Blue
    holographicTeal: '#008080',        // Teal
    holographicTealLight: '#20B2AA',   // Light Sea Green
    holographicTealDark: '#006666',    // Dark Teal

    // Accent colors
    accentCyan: '#00FFFF',             // Cyan
    accentLime: '#32CD32',             // Lime Green
    accentPurple: '#9370DB',           // Medium Purple

    // Neutral backgrounds
    bgDark: '#0A0F1A',                 // Deep Space Blue
    bgMedium: '#1A1F2A',               // Space Gray
    bgLight: '#2A2F3A',                // Light Space Gray

    // Text colors
    textColorPrimary: '#FFFFFF',       // White
    textColorSecondary: '#CCCCCC',     // Light Gray
    textColorTertiary: '#AAAAAA',      // Medium Gray

    // Glow effects
    glowBlue: 'rgba(135, 206, 235, 0.7)',
    glowTeal: 'rgba(0, 128, 128, 0.7)',
    glowCyan: 'rgba(0, 255, 255, 0.7)'
  };

  return (
    <div style={{ '--holographic-blue': colorPalette.holographicBlue }}>
      {children}
    </div>
  );
};

// Export the color palette object for use in CSS
export const getColorPalette = () => {
  return {
    // Primary holographic blues
    '--holographic-blue': '#87CEEB',
    '--holographic-blue-light': '#B0E0E6',
    '--holographic-blue-dark': '#4682B4',
    '--holographic-teal': '#008080',
    '--holographic-teal-light': '#20B2AA',
    '--holographic-teal-dark': '#006666',

    // Accent colors
    '--accent-cyan': '#00FFFF',
    '--accent-lime': '#32CD32',
    '--accent-purple': '#9370DB',

    // Neutral backgrounds
    '--bg-dark': '#0A0F1A',
    '--bg-medium': '#1A1F2A',
    '--bg-light': '#2A2F3A',

    // Text colors
    '--text-color-primary': '#FFFFFF',
    '--text-color-secondary': '#CCCCCC',
    '--text-color-tertiary': '#AAAAAA',

    // Glow effects
    '--glow-blue': 'rgba(135, 206, 235, 0.7)',
    '--glow-teal': 'rgba(0, 128, 128, 0.7)',
    '--glow-cyan': 'rgba(0, 255, 255, 0.7)'
  };
};

export default ColorPaletteProvider;