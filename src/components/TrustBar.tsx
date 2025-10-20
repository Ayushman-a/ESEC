import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { useThemeMode } from '../ThemeContext'

const stats = [
  {
    value: '500+',
    label: 'Organizations Protected',
    colorDark: '#00f0ff',
    colorLight: '#0097a7'
  },
  {
    value: '99.9%',
    label: 'Threat Detection Rate',
    colorDark: '#a855f7',
    colorLight: '#7c3aed'
  },
  {
    value: '24/7',
    label: 'Security Monitoring',
    colorDark: '#10b981',
    colorLight: '#059669'
  },
]

const logos = ['Microsoft', 'IBM', 'Cisco', 'Oracle', 'Amazon', 'Google']

export default function TrustBar() {
  const { mode } = useThemeMode()

  return (
    <Container sx={{ mt: -6 }}>
      <Paper elevation={0} sx={{
        p: 4,
        borderRadius: 4,
        background: mode === 'dark'
          ? 'rgba(15, 23, 42, 0.6)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: mode === 'dark'
          ? '1px solid rgba(0, 240, 255, 0.2)'
          : '1px solid rgba(0, 151, 167, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: mode === 'dark'
          ? '0 8px 32px rgba(0, 240, 255, 0.1)'
          : '0 8px 32px rgba(0, 151, 167, 0.15)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, transparent, #00f0ff, #a855f7, transparent)'
            : 'linear-gradient(90deg, transparent, #0097a7, #7c3aed, transparent)',
        }
      }}>
        <Grid container spacing={3}>
          {stats.map((s) => {
            const statColor = mode === 'dark' ? s.colorDark : s.colorLight
            return (
              <Grid key={s.label} item xs={12} md={4}>
                <Stack alignItems="center" spacing={1}>
                  <Typography variant="h3" sx={{
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${statColor} 0%, ${statColor}80 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>{s.value}</Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }}
                  >
                    {s.label}
                  </Typography>
                </Stack>
              </Grid>
            )
          })}
        </Grid>
      </Paper>

      <Stack spacing={3} sx={{ mt: 8 }}>
        <Typography variant="overline" textAlign="center" sx={{
          letterSpacing: '0.1em',
          color: mode === 'dark' ? '#00f0ff' : '#0097a7',
          fontWeight: 700,
          fontSize: '0.85rem'
        }}>
          Trusted by Industry Leaders
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {logos.map((l) => (
            <Box key={l} sx={{
              px: 3,
              py: 1.5,
              borderRadius: 2,
              background: mode === 'dark'
                ? 'rgba(15, 23, 42, 0.4)'
                : 'rgba(248, 250, 252, 0.8)',
              color: 'text.secondary',
              border: mode === 'dark'
                ? '1px solid rgba(0, 240, 255, 0.2)'
                : '1px solid rgba(0, 151, 167, 0.3)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.5)'
                  : '1px solid rgba(0, 151, 167, 0.6)',
                background: mode === 'dark'
                  ? 'rgba(0, 240, 255, 0.05)'
                  : 'rgba(0, 151, 167, 0.1)',
                transform: 'translateY(-2px)',
                color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                boxShadow: mode === 'dark'
                  ? '0 4px 12px rgba(0, 240, 255, 0.2)'
                  : '0 4px 12px rgba(0, 151, 167, 0.2)'
              }
            }}>
              {l}
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  )
}
