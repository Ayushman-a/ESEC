import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // electric cyan
      light: '#5ffbff',
      dark: '#00b8cc',
    },
    secondary: {
      main: '#a855f7', // vibrant purple
      light: '#c084fc',
      dark: '#7c3aed',
    },
    background: {
      default: '#0a0e1a',
      paper: 'rgba(15, 23, 42, 0.8)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    success: {
      main: '#10b981',
    },
    warning: {
      main: '#f59e0b',
    },
    error: {
      main: '#ef4444',
    }
  },
  shape: {
    borderRadius: 16
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
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          border: '1px solid rgba(0, 240, 255, 0.1)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        contained: {
          background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
          boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 30px rgba(0, 240, 255, 0.4)',
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease',
          }
        },
        outlined: {
          borderColor: 'rgba(0, 240, 255, 0.5)',
          '&:hover': {
            borderColor: '#00f0ff',
            background: 'rgba(0, 240, 255, 0.1)',
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  }
})

export default theme
