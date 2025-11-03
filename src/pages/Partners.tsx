import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const partnerTypes = [
  {
    icon: 'mdi:store',
    title: 'Value Added Resellers',
    description: 'For your established customer base and potential customers, ESEC would be an excellent value-added product to offer. ESEC will help to enhance the productivity of software and hardware assets utilization and optimize the purchase of these assets. Overtime it will improve your cost of sales too as customers will have clarity on when to buy and how many licenses to buy and what software applications and modules to buy based on actual utilization.',
    color: '#2563eb',
    highlights: ['Established Customer Base', 'Enhance Asset Productivity', 'Improve Cost of Sales']
  },
  {
    icon: 'mdi:cog-box',
    title: 'System Integrators / MSPs',
    description: 'By offering ESEC to your current and future customers, you will enhance your service offerings and enable organizations to directly save and optimize software and hardware assets on a continuous basis. ESEC can also be integrated with in-house systems for publishing of reports/dashboards.',
    color: '#7c3aed',
    highlights: ['Enhanced Service Offerings', 'Continuous Optimization', 'System Integration']
  },
  {
    icon: 'mdi:account-tie',
    title: 'Referral Consultants',
    description: 'Looking for companies and individual consultants having reach to the top management of various companies. You will be offering an excellent investment decision making tool to reduce and optimize software costs on a continuous basis for these companies. Your role broadly would be to help us to present and demonstrate ESEC to the decision makers. Most of the times in principle decisions are taken by the senior management after looking at the value proposition of ESEC.',
    color: '#dc2626',
    highlights: ['Top Management Access', 'Investment Decision Tool', 'Strategic Presentation Support']
  }
]

const benefits = [
  {
    icon: 'mdi:cash-multiple',
    title: 'Attractive Commissions',
    description: 'In all the above models, you will earn attractive commissions for a minimum period of 3 years (subject to subscription of renewal of ESEC).',
    stats: 'Minimum for 3 Years'
  },
  {
    icon: 'mdi:tools',
    title: 'Complete Support',
    description: 'Installation, training and post-sales support will be provided by the ESEC team.',
    stats: 'Full Service Coverage'
  },
  {
    icon: 'mdi:trending-up',
    title: 'Rapid Growth',
    description: 'ESEC is being used by some of the large companies in diverse industries in India for over 6 years and is now poised for rapid growth.',
    stats: '6+ Years in Market'
  },
  {
    icon: 'mdi:handshake',
    title: 'Proven Track Record',
    description: 'Join a partner ecosystem backed by proven success in managing assets for leading organizations.',
    stats: 'Trusted by Industry Leaders'
  }
]

export default function Partners() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Box sx={{ py: { xs: 6, md: 6 } }}>
      {/* Hero Section */}
      <Container sx={{ mb: 8 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}>
            <Icon
              icon="mdi:handshake"
              color={colors.primary}
              width="16"
              height="16"
            />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              {t('partners.badge')}
            </Typography>
          </Box>

          <Typography variant="h2" sx={{
            fontSize: { xs: 32, md: 52 },
            fontWeight: 800,
            background: colors.gradient.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t('partners.title')}
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
            {t('partners.subtitle')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/partner-request')}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{ px: 5, py: 1.75, fontSize: '1rem' }}
              >
                Apply Now
              </Button>
              </Box>
        </Stack>
      </Container>

      {/* Partner Types Section */}
      <Container sx={{ mb: 8 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Partnership Opportunities
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            Choose the partnership model that best fits your business
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {partnerTypes.map((type, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Paper sx={{
                p: 3.5,
                height: '100%',
                border: `1px solid ${colors.border.subtle}`,
                background: colors.background.paper,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: type.color,
                  boxShadow: mode === 'dark'
                    ? `0 12px 40px ${type.color}33`
                    : `0 12px 40px ${type.color}26`,
                }
              }}>
                <Stack spacing={3}>
                  <Box sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${type.color}25, ${type.color}10)`,
                    border: `2px solid ${type.color}40`,
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    <Icon
                      icon={type.icon}
                      width="32"
                      height="32"
                      color={type.color}
                    />
                  </Box>

                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {type.description}
                    </Typography>
                  </Box>

                  <Stack spacing={1}>
                    {type.highlights.map((highlight, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Icon
                          icon="mdi:check-circle"
                          width="18"
                          height="18"
                          color={type.color}
                          style={{ flexShrink: 0 }}
                        />
                        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Partner Benefits */}
      <Box sx={{
        py: 7,
        background: colors.background.surface,
        borderTop: `1px solid ${colors.border.subtle}`,
        borderBottom: `1px solid ${colors.border.subtle}`,
      }}>
        <Container>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Why Partner with ESEC?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
              Grow your business with attractive benefits and comprehensive support
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Paper sx={{
                  p: 3,
                  height: '100%',
                  background: colors.background.paper,
                  border: `1px solid ${colors.border.subtle}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: colors.border.primary,
                    boxShadow: colors.shadow.hover,
                  }
                }}>
                  <Stack spacing={2} alignItems="center">
                    <Box sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${colors.primary}25, ${colors.primary}10)`,
                      border: `1px solid ${colors.border.primary}`,
                      display: 'grid',
                      placeItems: 'center',
                    }}>
                      <Icon
                        icon={benefit.icon}
                        width="28"
                        height="28"
                        color={colors.primary}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                        {benefit.title}
                      </Typography>
                      <Box sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: 1.5,
                        background: `${colors.primary}15`,
                        border: `1px solid ${colors.border.primary}`,
                        mb: 1.5,
                        display: 'inline-block'
                      }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: colors.primary }}>
                          {benefit.stats}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container sx={{ mt: 8, mb: 4 }}>
        <Paper sx={{
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          background: `linear-gradient(135deg, ${colors.primary}08, ${colors.primary}03)`,
          border: `1px solid ${colors.border.primary}`,
          borderRadius: 3,
        }}>
          <Stack spacing={3} alignItems="center">
            <Box sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}CC)`,
              display: 'grid',
              placeItems: 'center'
            }}>
              <Icon icon="mdi:handshake" width="32" color="white" />
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Become a Partner
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
              Join our partner ecosystem and help organizations optimize their software and hardware assets.
              Earn attractive commissions while being part of our rapid growth journey.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/partner-request')}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{ px: 5, py: 1.75, fontSize: '1rem' }}
              >
                Apply Now
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
