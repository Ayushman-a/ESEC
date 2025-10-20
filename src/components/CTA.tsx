import * as React from 'react'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useThemeMode } from '../ThemeContext'

export default function CTA() {
  const navigate = useNavigate()
  const { mode } = useThemeMode()

  return (
    <Container sx={{ pb: { xs: 8, md: 12 } }}>
      <Paper sx={{
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        background: mode === 'dark'
          ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
          : 'linear-gradient(135deg, rgba(0, 151, 167, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
        border: mode === 'dark'
          ? '1px solid rgba(0, 240, 255, 0.3)'
          : '1px solid rgba(0, 151, 167, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, #00f0ff, #a855f7, #00f0ff)'
            : 'linear-gradient(90deg, #0097a7, #7c3aed, #0097a7)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 3s ease infinite',
        }
      }}>
        <Stack spacing={3} alignItems="center">
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: mode === 'dark'
              ? '1px solid rgba(0, 240, 255, 0.3)'
              : '1px solid rgba(0, 151, 167, 0.4)',
            background: mode === 'dark'
              ? 'rgba(0, 240, 255, 0.05)'
              : 'rgba(0, 151, 167, 0.08)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Icon icon="mdi:security" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              GET STARTED TODAY
            </Typography>
          </Box>

          <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, maxWidth: 700 }}>
            Ready to Secure Your Digital Assets?
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
            Join hundreds of organizations protecting their infrastructure with enterprise-grade cybersecurity.
          </Typography>

          <Stack direction={{ xs:'column', sm:'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Icon icon="mdi:shield-check" />}
              onClick={() => navigate('/pricing')}
              sx={{ px: 4, py: 1.5 }}
            >
              Get Protected Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Icon icon="mdi:calendar-check" />}
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5 }}
            >
              Schedule Assessment
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  )
}
