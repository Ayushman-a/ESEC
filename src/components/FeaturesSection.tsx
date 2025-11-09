import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    id: 'sam',
    icon: 'mdi:package-variant',
    title: 'Software Asset Management',
    subtitle: 'Complete visibility and control over your software assets',
    description: 'Real-time dashboards, detailed utilization tracking, and predictive analytics. Monitor all types of licenses from a single unified platform.',
    highlights: [
      'Realtime Cockpit Dashboards with customizable views',
      'Cloud License Monitoring (Autodesk, Aveva, Hexagon, etc.)',
      'HPC Integration with comprehensive reports',
      'Predictive analytics for future license needs'
    ],
    color: '#4CAF50'
  },
  {
    id: 'compliance',
    icon: 'mdi:shield-check',
    title: 'Compliance & Audit',
    subtitle: 'Stay audit-ready with automated compliance tracking',
    description: 'Comprehensive software and hardware inventory tracking with detailed compliance reports and unauthorized software detection.',
    highlights: [
      'Complete software and hardware inventory',
      'Unauthorized software tracking and detection',
      'Customizable compliance reports',
      'Environment variables and services tracking'
    ],
    color: '#2196F3'
  },
  {
    id: 'project',
    icon: 'mdi:briefcase',
    title: 'Project Management & Costing',
    subtitle: 'Comprehensive project tracking and cost management',
    description: 'Integrate software usage with project management, timesheet tracking, resource management, and comprehensive costing capabilities.',
    highlights: [
      'Timesheet integration with actual usage tracking',
      'Resource availability and allocation management',
      'Estimate vs actuals comparison',
      'Internal and external billing integration'
    ],
    color: '#FF9800'
  },
  {
    id: 'alerts',
    icon: 'mdi:bell-ring',
    title: 'Alerts, Customization and Integrations',
    subtitle: 'Automated alerts and seamless system integrations',
    description: 'Stay informed with scheduled email alerts, integrate with enterprise systems through REST APIs, and get rapid customization.',
    highlights: [
      'Automated email alerts for key events',
      'REST API integration with LDAP, HR, ERP, Power BI, ITAM, etc.',
      'Rapid custom report development (2-3 days)',
      'Flexible alerting and monitoring'
    ],
    color: '#9C27B0'
  }
]

export default function FeaturesSection() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const navigate = useNavigate()

  return (
    <Box sx={{ py: { xs: 8, md: 4 } }}>
      <Container>
        {/* Header */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mx: 'auto'
          }}>
            <Icon icon="mdi:star-four-points" color={colors.primary} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textAlign: 'center'
            }}>
              COMPREHENSIVE SOLUTIONS
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: 800 }}>
            Powerful Solutions for Complete Control
          </Typography>
        </Stack>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid key={feature.id} item xs={12} md={6}>
              <Paper sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                border: `2px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 32px ${feature.color}30`,
                  borderColor: feature.color
                }
              }}>
                <Stack spacing={3}>
                  {/* Icon and Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                      border: `2px solid ${feature.color}`,
                      display: 'grid',
                      placeItems: 'center'
                    }}>
                      <Icon icon={feature.icon} width="32" height="32" color={feature.color} />
                    </Box>
                    <Box flex={1}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>

                  {/* Highlights */}
                  <Stack spacing={1.5}>
                    {feature.highlights.map((highlight, idx) => (
                      <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                        <Icon icon="mdi:check-circle" width="20" height="20" color={feature.color} style={{ marginTop: 2, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {highlight}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {/* Learn More Button */}
                  <Button
                    variant="outlined"
                    endIcon={<Icon icon="mdi:arrow-right" />}
                    onClick={() => navigate(`/features#${feature.id}`)}
                    sx={{
                      mt: 2,
                      borderColor: feature.color,
                      color: feature.color,
                      '&:hover': {
                        borderColor: feature.color,
                        background: `${feature.color}10`
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/features')}
            endIcon={<Icon icon="mdi:arrow-right" />}
            sx={{ px: 4, py: 1.5 }}
          >
            View All Features
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
