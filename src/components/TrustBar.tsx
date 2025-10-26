import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { useColors } from '../theme/useColors'

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

const logos = ['Microsoft', 'IBM', 'Cisco', 'Oracle', 'Amazon', 'Google']

export default function TrustBar() {
  const colors = useColors()

  return (
    <Container sx={{ mt: -6 }}>
      <Paper elevation={0} sx={{
        p: 4,
        borderRadius: 4,
        background: colors.background.paper,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border.secondary}`,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: colors.shadow.subtle,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${colors.primary}, ${colors.primary}, transparent)`,
        }
      }}>
        <Grid container spacing={3}>
          {stats.map((s) => (
            <Grid key={s.label} item xs={12} md={4}>
              <Stack alignItems="center" spacing={1}>
                <Typography variant="h3" sx={{
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}80 100%)`,
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
          ))}
        </Grid>
      </Paper>

      <Stack spacing={3} sx={{ mt: 8 }}>
        <Typography variant="overline" textAlign="center" sx={{
          letterSpacing: '0.1em',
          color: colors.primary,
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
              background: colors.background.surface,
              color: 'text.secondary',
              border: `1px solid ${colors.border.secondary}`,
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                border: `1px solid ${colors.border.primary}`,
                background: colors.interactive.backgroundSubtle,
                transform: 'translateY(-2px)',
                color: colors.primary,
                boxShadow: colors.shadow.subtle
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
