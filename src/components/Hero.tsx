import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useThemeMode } from '../ThemeContext'

export default function Hero() {
  const navigate = useNavigate()
  const { mode } = useThemeMode()
  return (
    <Box sx={{ py: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }} className="hero-bg">
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
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
            backdropFilter: 'blur(10px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Icon icon="mdi:flag-variant" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              DEVELOPED IN INDIA FOR THE WORLD
            </Typography>
          </Box>

          <Typography variant="h1" sx={{
            fontSize: { xs: 40, md: 72 },
            lineHeight: 1.1,
            maxWidth: 1100,
            fontWeight: 900,
            background: mode === 'dark'
              ? 'linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #a855f7 100%)'
              : 'linear-gradient(135deg, #0f172a 0%, #0097a7 50%, #7c3aed 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Reduce Software Costs with Intelligent Asset Management
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.6 }}>
            Are you worried about escalating Software Asset costs and complex license types?
            ESEC will Reduce and Optimize your costs... <strong style={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7'
            }}>GUARANTEED</strong>
          </Typography>

          <Stack direction={{ xs:'column', sm:'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Icon icon="mdi:play-circle" />}
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Request Demo
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Icon icon="mdi:tag" />}
              onClick={() => navigate('/pricing')}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              View Pricing
            </Button>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ pt: 4 }}>
            <Stack alignItems="center">
              <Typography variant="h4" sx={{
                color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                fontWeight: 800
              }}>5X to 25+X</Typography>
              <Typography variant="caption" color="text.secondary">ROI in 2 Years</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography variant="h4" sx={{
                color: mode === 'dark' ? '#a855f7' : '#7c3aed',
                fontWeight: 800
              }}>50 to 100K+</Typography>
              <Typography variant="caption" color="text.secondary">Scalable Users</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography variant="h4" sx={{ color: '#10b981', fontWeight: 800 }}>Transparent</Typography>
              <Typography variant="caption" color="text.secondary">User-Based Pricing</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
