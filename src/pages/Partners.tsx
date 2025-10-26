import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { useNavigate } from 'react-router-dom'

const partnerTypes = [
  {
    icon: 'mdi:handshake',
    title: 'Technology Partners',
    description: 'Leading software vendors and technology platforms we integrate with',
    partners: [
      { name: 'Siemens', description: 'EDA License Management Integration' },
      { name: 'Cadence', description: 'Design Tool License Optimization' },
      { name: 'Synopsys', description: 'Comprehensive SAM Solutions' },
      { name: 'Mentor Graphics', description: 'License Server Integration' }
    ],
    color: '#3b82f6'
  },
  {
    icon: 'mdi:cloud-check',
    title: 'Cloud & Platform Partners',
    description: 'Cloud platforms and infrastructure providers',
    partners: [
      { name: 'Microsoft Azure', description: 'Cloud Infrastructure & Integration' },
      { name: 'Amazon AWS', description: 'Scalable Cloud Deployment' },
      { name: 'Google Cloud', description: 'Advanced Analytics Platform' },
      { name: 'IBM Cloud', description: 'Enterprise Solutions' }
    ],
    color: '#3b82f6'
  },
  {
    icon: 'mdi:account-tie',
    title: 'Consulting Partners',
    description: 'Professional services and implementation partners',
    partners: [
      { name: 'Accenture', description: 'Enterprise SAM Consulting' },
      { name: 'Deloitte', description: 'License Optimization Strategy' },
      { name: 'KPMG', description: 'Compliance & Audit Services' },
      { name: 'PwC', description: 'Software Asset Management' }
    ],
    color: '#3b82f6'
  }
]

const benefits = [
  {
    icon: 'mdi:chart-line-variant',
    title: 'Grow Your Business',
    description: 'Access new markets and customers through our partner network and co-selling opportunities.'
  },
  {
    icon: 'mdi:school',
    title: 'Training & Certification',
    description: 'Get comprehensive training and certification programs to become an ESEC expert.'
  },
  {
    icon: 'mdi:currency-usd',
    title: 'Revenue Opportunities',
    description: 'Attractive margin structures and incentive programs for our partners.'
  },
  {
    icon: 'mdi:lifebuoy',
    title: 'Dedicated Support',
    description: 'Priority support and resources from our partner success team.'
  }
]

const partnerLevels = [
  {
    level: 'Silver Partner',
    description: 'Entry-level partnership with basic benefits and support',
    features: [
      'Partner portal access',
      'Basic training materials',
      'Standard margin structure',
      'Email support'
    ]
  },
  {
    level: 'Gold Partner',
    description: 'Advanced partnership with enhanced benefits and priority support',
    features: [
      'All Silver benefits',
      'Advanced training & certification',
      'Enhanced margin structure',
      'Priority support',
      'Co-marketing opportunities'
    ],
    highlighted: true
  },
  {
    level: 'Platinum Partner',
    description: 'Premier partnership with maximum benefits and strategic collaboration',
    features: [
      'All Gold benefits',
      'Dedicated partner manager',
      'Maximum margin structure',
      '24/7 priority support',
      'Joint product development',
      'Strategic business planning'
    ]
  }
]

export default function Partners() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const navigate = useNavigate()

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
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
              PARTNERS
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
            Partner with ESEC
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
            Join our global partner ecosystem and deliver exceptional software asset management solutions to your customers
          </Typography>
        </Stack>
      </Container>

      {/* Partner Types Section */}
      <Container sx={{ mb: 10 }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Our Partner Ecosystem
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
            Collaborate with industry leaders and innovators
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {partnerTypes.map((type, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Paper sx={{
                p: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
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
                    background: `${type.color}20`,
                    border: `1px solid ${type.color}40`,
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
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {type.description}
                    </Typography>
                  </Box>

                  <Stack spacing={1.5}>
                    {type.partners.map((partner, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: colors.background.surface,
                          border: `1px solid ${colors.border.subtle}`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            background: colors.interactive.backgroundSubtle,
                          }
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {partner.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {partner.description}
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
        py: 8,
        background: colors.background.surface,
        borderTop: `1px solid ${colors.border.subtle}`,
        borderBottom: `1px solid ${colors.border.subtle}`,
      }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Partner Benefits
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
              Why partner with ESEC?
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Paper sx={{
                  p: 4,
                  height: '100%',
                  background: colors.background.paper,
                }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}20)`,
                      border: `1px solid ${colors.border.primary}`,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0
                    }}>
                      <Icon
                        icon={benefit.icon}
                        width="24"
                        height="24"
                        color={colors.primary}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
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

      {/* Partner Levels */}
      <Container sx={{ mt: 10 }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Partnership Levels
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
            Choose the partnership level that fits your business
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {partnerLevels.map((partner, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Paper sx={{
                p: 4,
                height: '100%',
                border: partner.highlighted
                  ? mode === 'dark'
                    ? '2px solid rgba(59, 130, 246, 0.5)'
                    : '2px solid rgba(37, 99, 235, 0.5)'
                  : 'inherit',
                background: partner.highlighted
                  ? mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)'
                  : 'inherit',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: colors.shadow.hover,
                }
              }}>
                {partner.highlighted && (
                  <Box sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    background: colors.gradient.primary,
                  }}>
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 700 }}>
                      RECOMMENDED
                    </Typography>
                  </Box>
                )}
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                      {partner.level}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {partner.description}
                    </Typography>
                  </Box>

                  <Stack spacing={1.5}>
                    {partner.features.map((feature, idx) => (
                      <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                        <Icon
                          icon="mdi:check-circle"
                          width="20"
                          height="20"
                          color={colors.primary}
                          style={{ marginTop: '2px', flexShrink: 0 }}
                        />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container sx={{ mt: 10 }}>
        <Paper sx={{
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          background: colors.gradient.subtle,
          border: `1px solid ${colors.border.primary}`,
        }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Ready to Become a Partner?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              Join our growing partner network and unlock new business opportunities
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{ px: 4, py: 1.5 }}
              >
                Apply Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ px: 4, py: 1.5 }}
              >
                Contact Partner Team
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
