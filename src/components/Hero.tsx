import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../theme/useColors'

export default function Hero() {
  const navigate = useNavigate()
  const colors = useColors()
  return (
    <Box sx={{ pt: { xs: 8, md: 4 }, pb: { xs: 10, md: 8 }, position: 'relative', overflow: 'hidden' }} className="hero-bg">
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          {/* Navigation Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Stack direction="row" spacing={5} alignItems="center">
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
            border: `1px solid rgba(255, 153, 51, 0.3)`,
            background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.15) 0%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.15) 66%, rgba(19, 136, 8, 0.15) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Icon icon="twemoji:flag-india" width="20" height="20" />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              DEVELOPED IN INDIA FOR THE WORLD
            </Typography>
            <Icon icon="mdi:earth" color={colors.primary} width="16" height="16" />
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

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.6, fontSize: { xs: 16, md: 19 } }}>
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

          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 4, md: 6 }}
            sx={{
              pt: 5,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Stack alignItems="center" spacing={0.5} sx={{ minWidth: { xs: 'auto', sm: 140 } }}>
              <Typography variant="h4" sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
              }}>5X to 25+X</Typography>
              <Typography variant="body2" sx={{
                color: colors.text.secondary,
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                textAlign: 'center'
              }}>ROI in 2 Years</Typography>
            </Stack>

            <Stack alignItems="center" spacing={0.5} sx={{ minWidth: { xs: 'auto', sm: 140 } }}>
              <Typography variant="h4" sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
              }}>50 to 100K+</Typography>
              <Typography variant="body2" sx={{
                color: colors.text.secondary,
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                textAlign: 'center'
              }}>Scalable Users</Typography>
            </Stack>

            <Stack alignItems="center" spacing={0.5} sx={{ minWidth: { xs: 'auto', sm: 140 } }}>
              <Typography variant="h4" sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
              }}>Transparent</Typography>
              <Typography variant="body2" sx={{
                color: colors.text.secondary,
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                textAlign: 'center'
              }}>User-Based Pricing</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
