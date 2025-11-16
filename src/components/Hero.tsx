import * as React from 'react'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../theme/useColors'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const navigate = useNavigate()
  const colors = useColors()
  const { t } = useTranslation()

  return (
    <Box sx={{
      minHeight: { xs: '85vh', md: '90vh' },
      display: 'flex',
      alignItems: 'center',
      pt: { xs: 6, md: 8 },
      pb: { xs: 8, md: 6 },
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(/background/banner.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: { xs: 'scroll', md: 'fixed' },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(2px)',
        zIndex: 0,
      }
    }}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 3, md: 4 }} alignItems="center" textAlign="center">
          {/* Navigation Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Stack direction="row" spacing={{ xs: 2, sm: 5 }} alignItems="center" flexWrap="wrap" justifyContent="center">
              <Typography
                variant="body2"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: { xs: '1.125rem', sm: '1.125rem' },
                  '&:hover': { opacity: 0.8 }
                }}
              >
                {t('home.hero.engineeringSoftware')}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: { xs: '1.125rem', sm: '1.125rem' },
                  '&:hover': { opacity: 0.8 }
                }}
              >
                {t('home.hero.nonEngineeringSoftware')}
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{
            px: { xs: 2, sm: 3.5 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: 10,
            border: `2px solid rgba(255, 153, 51, 0.6)`,
            background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.25) 0%, rgba(255, 255, 255, 0.25) 33%, rgba(255, 255, 255, 0.25) 66%, rgba(19, 136, 8, 0.25) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: { xs: 0.75, sm: 1.5 },
            boxShadow: '0 4px 15px rgba(255, 153, 51, 0.3)'
          }}>
            <Icon icon="twemoji:flag-india" width="20" height="20" />
            <Typography variant="caption" sx={{
              color: 'white',
              fontWeight: 800,
              letterSpacing: '0.08em',
              fontSize: { xs: '0.8rem', sm: '0.95rem' }
            }}>
              {t('home.hero.badge')}
            </Typography>
            <Icon icon="mdi:earth" color={colors.primary} width="18" height="18" />
          </Box>

          <Typography variant="h1" sx={{
            fontSize: { xs: 28, sm: 36, md: 48, lg: 56 },
            lineHeight: 1.1,
            maxWidth: 1100,
            fontWeight: 900,
            color: colors.primary,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            px: { xs: 1, sm: 0 }
          }}>
            {t('home.hero.title')}
          </Typography>

          <Typography variant="h5" sx={{ gap: 3, maxWidth: 900, lineHeight: 1.6, fontSize: { xs: 15, sm: 18, md: 20, lg: 22 }, textShadow: '0 2px 8px rgba(0,0,0,0.6)', px: { xs: 1, sm: 0 }, fontWeight: 700, color: '#FFFFFF' }}>
            {t('home.hero.subtitle')} <strong style={{
              color: colors.primary
            }}>{t('home.hero.guaranteed')}</strong>
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3 }} sx={{ pt: { xs: 2, sm: 4 }, width: { xs: '100%', sm: 'auto' }, px: { xs: 2, sm: 0 } }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Icon icon="mdi:play-circle" width="20" height="20" />}
              onClick={() => navigate('/contact')}
              sx={{
                px: { xs: 3, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 30px rgba(0,0,0,0.4)',
                }
              }}
            >
              {t('home.hero.requestDemo')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Icon icon="mdi:tag" width="20" height="20" />}
              onClick={() => navigate('/pricing')}
              sx={{
                px: { xs: 3, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 700,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                }
              }}
            >
              {t('home.hero.viewPricing')}
            </Button>
          </Stack>
          <Paper elevation={0} sx={{
            mt: { xs: 3, sm: 4, md: 6 },
            p: { xs: 2, sm: 3, md: 5 },
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
            <Box sx={{
              px: { xs: 1, sm: 3, md: 4 },
              maxWidth: 1400,
              mx: 'auto'
            }}>
              <Stack
                direction="row"
                spacing={{ xs: 1.5, sm: 4, md: 5, lg: 6 }}
                sx={{
                  justifyContent: 'center',
                  flexWrap: { xs: 'wrap', lg: 'nowrap' },
                  alignItems: 'flex-start',
                  rowGap: { xs: 2.5, sm: 4, md: 5 }
                }}
              >
                <Stack alignItems="center" spacing={0.5} sx={{
                  minWidth: { xs: '40%', sm: '30%', md: 'auto' },
                  px: { xs: 0.5, sm: 2 }
                }}>
                  <Typography sx={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: { xs: '0.8rem', sm: '1.05rem', md: '1.15rem' },
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}>{t('home.hero.roi.value')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.65rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.roi.period')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.65rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.roi.guarantee')}</Typography>
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
                  }}>{t('home.hero.users.value')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.users.label')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.users.note')}</Typography>
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
                  }}>{t('home.hero.pricing.value')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.pricing.note1')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.pricing.note2')}</Typography>
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
                  }}>{t('home.hero.software.value')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.software.label')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.software.note')}</Typography>
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
                  }}>{t('home.hero.certificates.value')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.certificates.label')}</Typography>
                  <Typography variant="caption" sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>{t('home.hero.certificates.note')}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
