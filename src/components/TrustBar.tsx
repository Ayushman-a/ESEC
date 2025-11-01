import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography, keyframes } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'

const stats = [
  {
    value: '500+',
    label: 'Organizations Protected',
  },
  {
    value: '99.9%',
    label: 'Threat Detection Rate',
  },
  {
    value: '24/7',
    label: 'Security Monitoring',
  },
]

const companies = [
  { name: 'Maruti Suzuki', logo: '/logos/maruti-suzuki.png' },
  { name: 'Larsen & Toubro', logo: '/logos/larsen-toubro.png' },
  { name: 'L&T Technology Services', logo: '/logos/lnt-tech.png' },
  { name: 'Brakes India', logo: '/logos/brakes-india.png' },
  { name: 'Schwing Stetter', logo: '/logos/schwing-stetter.png' },
  { name: 'Mahindra Rise', logo: '/logos/mahindra-rise.png' },
  { name: 'Kent', logo: '/logos/kent.png' },
  { name: 'Eka', logo: '/logos/eka.png' }
]

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

export default function TrustBar() {
  const colors = useColors()
  const { mode } = useThemeMode()

  return (
    <Container sx={{ mt: 4 }}>
      <Stack spacing={3} sx={{ mt: 8 }}>
        <Typography variant="overline" textAlign="center" sx={{
          letterSpacing: '0.1em',
          color: colors.primary,
          fontWeight: 700,
          fontSize: '0.85rem'
        }}>
          Trusted by Industry Leaders
        </Typography>

        {/* Scrolling Logo Container */}
        <Box sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          py: 2,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100px',
            zIndex: 2,
            pointerEvents: 'none'
          },
          '&::before': {
            left: 0,
            background: `linear-gradient(to right, ${colors.background.default}, transparent)`
          },
          '&::after': {
            right: 0,
            background: `linear-gradient(to left, ${colors.background.default}, transparent)`
          }
        }}>
          <Box sx={{
            display: 'flex',
            gap: 4,
            animation: `${scroll} 10s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}>
            {/* Render logos twice for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <Box
                key={`${company.name}-${index}`}
                sx={{
                  minWidth: '180px',
                  height: '80px',
                  px: 3,
                  py: 2,
                  borderRadius: 2,
                  background: mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.95)'
                    : 'rgba(255, 255, 255, 1)',
                  border: mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : `1px solid ${colors.border.secondary}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: mode === 'dark'
                    ? '0 2px 8px rgba(0, 0, 0, 0.3)'
                    : '0 1px 3px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    border: `1px solid ${colors.primary}`,
                    transform: 'scale(1.05)',
                    boxShadow: mode === 'dark'
                      ? `0 4px 12px rgba(0, 240, 255, 0.2)`
                      : `0 4px 12px ${colors.primary}30`
                  }
                }}
              >
                <Box
                  component="img"
                  src={company.logo}
                  alt={company.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  onError={(e) => {
                    // Fallback to company name if image fails to load
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML = `<span style="font-weight: 600; font-size: 0.9rem; color: ${colors.text.primary}; text-align: center;">${company.name}</span>`
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}
