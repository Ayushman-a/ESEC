import { useThemeMode } from '../ThemeContext'
import { getColors, type ThemeColors } from './colors'

/**
 * Custom hook to access theme colors
 *
 * Usage:
 * const colors = useColors()
 *
 * Then use:
 * colors.primary (returns #00f0ff in dark mode, #0097a7 in light mode)
 * colors.gradient.primary
 * colors.border.primary
 * etc.
 */
export function useColors(): ThemeColors {
  const { mode } = useThemeMode()
  return getColors(mode)
}
