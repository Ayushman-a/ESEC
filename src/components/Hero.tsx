import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../theme/useColors'

export default function Hero() {
  const navigate = useNavigate()
  const colors = useColors()
  return (
    <Box sx={{ py: { xs: 8, md: 4 }, position: 'relative', overflow: 'hidden' }} className="hero-bg">
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          {/* Navigation Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                variant="body2"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': { opacity: 0.8 }
                }}
                onClick={() => navigate('/services')}
              >
                Engineering Software
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': { opacity: 0.8 }
                }}
                onClick={() => navigate('/services')}
              >
                Non-Engineering Software
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            backdropFilter: 'blur(10px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Icon icon="mdi:flag-variant" color={colors.primary} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: colors.primary,
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
            color: colors.primary,
          }}>
            Reduce Software Costs with Intelligent Asset Management
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.6 }}>
            Are you worried about escalating Software Asset costs and complex license types?
            ESEC will Reduce and Optimize your costs... <strong style={{
              color: colors.primary
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
                color: colors.primary,
                fontWeight: 800
              }}>5X to 25+X</Typography>
              <Typography variant="caption" color="text.secondary">ROI in 2 Years</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography variant="h4" sx={{
                color: colors.primary,
                fontWeight: 800
              }}>50 to 100K+</Typography>
              <Typography variant="caption" color="text.secondary">Scalable Users</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography variant="h4" sx={{ color: colors.primary, fontWeight: 800 }}>Transparent</Typography>
              <Typography variant="caption" color="text.secondary">User-Based Pricing</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
