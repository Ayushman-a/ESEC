/**
 * ESEC Design System - Color Palette
 *
 * Centralized color management for the entire application.
 * Update colors here to apply changes across all components.
 */

// Brand Colors
export const brandColors = {
  // Primary Brand Color (Cyan/Teal)
  primary: {
    dark: '#00f0ff',      // Bright cyan for dark mode
    light: '#0097a7',     // Teal for light mode
    darker: '#00b8cc',    // Darker cyan
    lighter: '#4dd0e1',   // Lighter teal
  },

  // Secondary Brand Color (Purple)
  secondary: {
    dark: '#a855f7',      // Bright purple for dark mode
    light: '#7c3aed',     // Deep purple for light mode
    darker: '#5b21b6',    // Darker purple
    lighter: '#a78bfa',   // Lighter purple
  },

  // Accent Colors
  accent: {
    green: '#10b981',     // Success/positive
    orange: '#f59e0b',    // Warning/attention (dark mode)
    orangeLight: '#ea580c', // Warning/attention (light mode)
    red: '#ef4444',       // Error/danger (dark mode)
    redLight: '#dc2626',  // Error/danger (light mode)
    blue: '#3b82f6',      // Info
    pink: '#ec4899',      // Special highlight
  }
}

// Background Colors
export const backgroundColors = {
  dark: {
    default: '#0a0e1a',              // Main dark background
    paper: 'rgba(15, 23, 42, 0.8)',  // Card/paper background
    elevated: 'rgba(15, 23, 42, 0.95)', // Elevated surfaces (modals, menus)
    surface: 'rgba(15, 23, 42, 0.4)', // Secondary surface
    overlay: 'rgba(10, 14, 26, 0.8)',  // Navbar/footer overlay
  },
  light: {
    default: '#f8fafc',               // Main light background
    paper: 'rgba(255, 255, 255, 0.9)', // Card/paper background
    elevated: 'rgba(255, 255, 255, 0.95)', // Elevated surfaces
    surface: 'rgba(248, 250, 252, 0.8)', // Secondary surface
    overlay: 'rgba(248, 250, 252, 0.8)',  // Navbar/footer overlay
  }
}

// Text Colors
export const textColors = {
  dark: {
    primary: '#f1f5f9',    // Main text
    secondary: '#94a3b8',  // Secondary text
  },
  light: {
    primary: '#0f172a',    // Main text
    secondary: '#64748b',  // Secondary text
  }
}

// Border Colors (with opacity values)
export const borderColors = {
  dark: {
    primary: 'rgba(0, 240, 255, 0.3)',   // Primary borders
    secondary: 'rgba(0, 240, 255, 0.2)',  // Subtle borders
    subtle: 'rgba(0, 240, 255, 0.1)',     // Very subtle borders
    purple: 'rgba(168, 85, 247, 0.3)',    // Purple borders
  },
  light: {
    primary: 'rgba(0, 151, 167, 0.3)',    // Primary borders
    secondary: 'rgba(0, 151, 167, 0.2)',  // Subtle borders
    subtle: 'rgba(0, 151, 167, 0.2)',     // Very subtle borders
    purple: 'rgba(124, 58, 237, 0.3)',    // Purple borders
  }
}

// Gradient Colors
export const gradientColors = {
  dark: {
    primary: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
    primaryReverse: 'linear-gradient(135deg, #a855f7 0%, #00f0ff 100%)',
    subtle: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
    text: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #a855f7 100%)',
    radial: 'radial-gradient(ellipse at top, rgba(0, 240, 255, 0.15), transparent 50%)',
  },
  light: {
    primary: 'linear-gradient(135deg, #0097a7 0%, #7c3aed 100%)',
    primaryReverse: 'linear-gradient(135deg, #7c3aed 0%, #0097a7 100%)',
    subtle: 'linear-gradient(135deg, rgba(0, 151, 167, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
    text: 'linear-gradient(135deg, #0f172a 0%, #0097a7 50%, #7c3aed 100%)',
    radial: 'radial-gradient(ellipse at top, rgba(0, 151, 167, 0.08), transparent 50%)',
  }
}

// Shadow/Glow Colors
export const shadowColors = {
  dark: {
    primary: '0 0 20px rgba(0, 240, 255, 0.5)',
    secondary: '0 0 20px rgba(168, 85, 247, 0.5)',
    subtle: '0 8px 32px rgba(0, 240, 255, 0.15)',
    hover: '0 12px 40px rgba(0, 240, 255, 0.3)',
  },
  light: {
    primary: '0 0 20px rgba(0, 151, 167, 0.5)',
    secondary: '0 0 20px rgba(124, 58, 237, 0.5)',
    subtle: '0 8px 32px rgba(0, 151, 167, 0.15)',
    hover: '0 12px 40px rgba(0, 151, 167, 0.25)',
  }
}

// Hover/Interactive States
export const interactiveColors = {
  dark: {
    background: 'rgba(0, 240, 255, 0.1)',
    backgroundSubtle: 'rgba(0, 240, 255, 0.05)',
    border: '#00f0ff',
  },
  light: {
    background: 'rgba(0, 151, 167, 0.1)',
    backgroundSubtle: 'rgba(0, 151, 167, 0.05)',
    border: '#0097a7',
  }
}

// Utility function to get colors based on theme mode
export const getColors = (mode: 'dark' | 'light') => ({
  brand: brandColors,
  background: backgroundColors[mode],
  text: textColors[mode],
  border: borderColors[mode],
  gradient: gradientColors[mode],
  shadow: shadowColors[mode],
  interactive: interactiveColors[mode],

  // Quick access helpers
  primary: brandColors.primary[mode],
  secondary: brandColors.secondary[mode],
})

// Export a hook-friendly version
export type ThemeColors = ReturnType<typeof getColors>
