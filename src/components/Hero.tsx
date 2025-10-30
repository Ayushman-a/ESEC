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
            fontSize: { xs: 40, md: 64 },
            lineHeight: 1.1,
            maxWidth: 1100,
            fontWeight: 900,
            color: colors.primary,
          }}>
            Reduce Software Assets Cost and Optimize Utilization ongoing basis
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.6, fontSize: { xs: 16, md: 19 } }}>
            Are you worried about escalating Software Asset costs and complex license models?
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

          <Box sx={{
            pt: { xs: 4, md: 6 },
            px: { xs: 3, md: 4 },
            maxWidth: 1400,
            mx: 'auto'
          }}>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}
              sx={{
                justifyContent: 'center',
                flexWrap: { xs: 'wrap', lg: 'nowrap' },
                alignItems: 'flex-start',
                rowGap: { xs: 4, sm: 5 }
              }}
            >
              <Stack alignItems="center" spacing={0.5} sx={{
                minWidth: { xs: '42%', sm: '30%', md: 'auto' },
                px: { xs: 1, sm: 2 }
              }}>
                <Typography sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>5X to 25+X ROI</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>In 2 Years</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Guaranteed</Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} sx={{
                minWidth: { xs: '42%', sm: '30%', md: 'auto' },
                px: { xs: 1, sm: 2 }
              }}>
                <Typography sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>50 to 100,000+</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Users</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Highly Scalable</Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} sx={{
                minWidth: { xs: '42%', sm: '30%', md: 'auto' },
                px: { xs: 1, sm: 2 }
              }}>
                <Typography sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>One Price - All features</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>User Count Based only</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Transparent Pricing</Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} sx={{
                minWidth: { xs: '42%', sm: '30%', md: 'auto' },
                px: { xs: 1, sm: 2 }
              }}>
                <Typography sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>Engineering & Non-Engineering</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Software Assets</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>All types of Licenses</Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} sx={{
                minWidth: { xs: '42%', sm: '30%', md: 'auto' },
                px: { xs: 1, sm: 2 }
              }}>
                <Typography sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>Global</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>Certificates</Typography>
                <Typography variant="caption" sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  textAlign: 'center',
                  lineHeight: 1.4
                }}>GDPR & ISMS</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
