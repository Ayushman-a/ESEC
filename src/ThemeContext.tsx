import React, { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react'
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { brandColors, backgroundColors, textColors } from './theme/colors'

interface ThemeContextType {
  mode: PaletteMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
})

export const useThemeMode = () => useContext(ThemeContext)

interface ThemeProviderWrapperProps {
  children: ReactNode
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const saved = localStorage.getItem('theme-mode')
    return (saved as PaletteMode) || 'dark'
  })

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme-mode', newMode)
      return newMode
    })
  }

  // Update body class based on theme mode
  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: brandColors.primary[mode],
            light: brandColors.primary.lighter,
            dark: brandColors.primary.darker,
          },
          secondary: {
            main: brandColors.secondary[mode],
            light: brandColors.secondary.lighter,
            dark: brandColors.secondary.darker,
          },
          background: {
            default: backgroundColors[mode].default,
            paper: backgroundColors[mode].paper,
          },
          text: {
            primary: textColors[mode].primary,
            secondary: textColors[mode].secondary,
          },
          success: {
            main: '#10b981',
          },
          warning: {
            main: '#f59e0b',
          },
          error: {
            main: '#ef4444',
          },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          h1: {
            fontWeight: 800,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontWeight: 800,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h4: {
            fontWeight: 700,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.01em',
          },
        },
        components: {
          MuiContainer: {
            defaultProps: {
              maxWidth: 'lg',
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                backgroundImage: 'none',
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.1)'
                  : '1px solid rgba(0, 151, 167, 0.2)',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
              contained: {
                background: mode === 'dark'
                  ? 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)'
                  : 'linear-gradient(135deg, #0097a7 0%, #7c3aed 100%)',
                boxShadow: mode === 'dark'
                  ? '0 4px 20px rgba(0, 240, 255, 0.3)'
                  : '0 4px 20px rgba(0, 151, 167, 0.3)',
                '&:hover': {
                  boxShadow: mode === 'dark'
                    ? '0 6px 30px rgba(0, 240, 255, 0.4)'
                    : '0 6px 30px rgba(0, 151, 167, 0.4)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
              },
              outlined: {
                borderColor: mode === 'dark'
                  ? 'rgba(0, 240, 255, 0.5)'
                  : 'rgba(0, 151, 167, 0.5)',
                '&:hover': {
                  borderColor: mode === 'dark' ? '#00f0ff' : '#0097a7',
                  background: mode === 'dark'
                    ? 'rgba(0, 240, 255, 0.1)'
                    : 'rgba(0, 151, 167, 0.1)',
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  )

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
