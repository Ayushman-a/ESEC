/**
 * ESEC Design System - Color Palette
 *
 * Centralized color management for the entire application.
 * Update colors here to apply changes across all components.
 */

// Brand Colors
export const brandColors = {
  // Primary Brand Color (Pale Azure - Option 3)
  primary: {
    dark: '#7dd3fc',      // Very light sky for dark mode
    light: '#38bdf8',     // Light sky blue for light mode
    darker: '#0ea5e9',    // Bright sky
    lighter: '#bae6fd',   // Extra light
  },

  // Secondary Brand Color (Light Blue)
  secondary: {
    dark: '#93c5fd',      // Light blue for dark mode
    light: '#60a5fa',     // Medium light blue for light mode
    darker: '#3b82f6',    // Bright blue
    lighter: '#dbeafe',   // Extra light blue
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
    primary: 'rgba(59, 130, 246, 0.3)',    // Primary borders (blue)
    secondary: 'rgba(59, 130, 246, 0.2)',  // Subtle borders
    subtle: 'rgba(59, 130, 246, 0.1)',     // Very subtle borders
    green: 'rgba(14, 165, 233, 0.3)',      // Sky blue borders
  },
  light: {
    primary: 'rgba(37, 99, 235, 0.3)',     // Primary borders (blue)
    secondary: 'rgba(37, 99, 235, 0.2)',   // Subtle borders
    subtle: 'rgba(37, 99, 235, 0.2)',      // Very subtle borders
    green: 'rgba(2, 132, 199, 0.3)',       // Sky blue borders
  }
}

// Gradient Colors
export const gradientColors = {
  dark: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
    primaryReverse: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    subtle: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
    text: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #0ea5e9 100%)',
    radial: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15), transparent 50%)',
  },
  light: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #0284c7 100%)',
    primaryReverse: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
    subtle: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(2, 132, 199, 0.08) 100%)',
    text: 'linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0284c7 100%)',
    radial: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.08), transparent 50%)',
  }
}

// Shadow/Glow Colors
export const shadowColors = {
  dark: {
    primary: '0 0 20px rgba(59, 130, 246, 0.5)',
    secondary: '0 0 20px rgba(14, 165, 233, 0.5)',
    subtle: '0 8px 32px rgba(59, 130, 246, 0.15)',
    hover: '0 12px 40px rgba(59, 130, 246, 0.3)',
  },
  light: {
    primary: '0 0 20px rgba(37, 99, 235, 0.5)',
    secondary: '0 0 20px rgba(2, 132, 199, 0.5)',
    subtle: '0 8px 32px rgba(37, 99, 235, 0.15)',
    hover: '0 12px 40px rgba(37, 99, 235, 0.25)',
  }
}

// Hover/Interactive States
export const interactiveColors = {
  dark: {
    background: 'rgba(59, 130, 246, 0.1)',
    backgroundSubtle: 'rgba(59, 130, 246, 0.05)',
    border: '#3b82f6',
  },
  light: {
    background: 'rgba(37, 99, 235, 0.1)',
    backgroundSubtle: 'rgba(37, 99, 235, 0.05)',
    border: '#2563eb',
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
