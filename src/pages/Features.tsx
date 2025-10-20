import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography, Chip } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'
import { useNavigate, useLocation } from 'react-router-dom'

const features = [
  {
    id: 'sam',
    icon: 'mdi:package-variant',
    title: 'Software Asset Management',
    subtitle: 'Complete visibility and control over your software assets',
    description: 'ESEC provides comprehensive software asset management capabilities, giving you complete visibility into what software is installed across your organization. Track, manage, and optimize every software asset from a single platform.',
    capabilities: [
      {
        icon: 'mdi:monitor-dashboard',
        title: 'Real-Time Inventory',
        description: 'Automatic discovery and tracking of all software installations across your entire infrastructure'
      },
      {
        icon: 'mdi:chart-bar',
        title: 'Usage Analytics',
        description: 'Deep insights into how software is actually being used, including peak times, average utilization, and user patterns'
      },
      {
        icon: 'mdi:account-multiple',
        title: 'User Tracking',
        description: 'Track software usage by individual users, teams, and departments for better allocation'
      },
      {
        icon: 'mdi:clock-outline',
        title: 'Historical Data',
        description: 'Access historical usage data to identify trends and make informed decisions'
      },
      {
        icon: 'mdi:alert-circle',
        title: 'Proactive Alerts',
        description: 'Get notified about license shortages, overages, and potential compliance issues'
      },
      {
        icon: 'mdi:file-document-outline',
        title: 'Comprehensive Reports',
        description: 'Generate detailed reports for management, finance, and compliance teams'
      }
    ],
    benefits: [
      'Reduce software costs by 30-40%',
      'Eliminate manual tracking and spreadsheets',
      'Make data-driven decisions about software purchases',
      'Optimize license allocation across teams'
    ],
    color: '#00f0ff'
  },
  {
    id: 'licenses',
    icon: 'mdi:key-variant',
    title: 'License Management',
    subtitle: 'Intelligent license optimization and monitoring',
    description: 'Advanced license management features that help you get the most value from your software licenses. Prevent denials, optimize usage, and ensure you have the right number of licenses.',
    capabilities: [
      {
        icon: 'mdi:chart-line',
        title: 'Peak Usage Analysis',
        description: 'Identify peak usage times and patterns to optimize license pool sizing'
      },
      {
        icon: 'mdi:account-clock',
        title: 'License Hours Tracking',
        description: 'Track total license hours consumed per day, month, and year'
      },
      {
        icon: 'mdi:block-helper',
        title: 'Denial Prevention',
        description: 'Predictive analytics to prevent license denials before they impact productivity'
      },
      {
        icon: 'mdi:swap-horizontal',
        title: 'Idle License Release',
        description: 'Automatically release idle licenses to maximize availability'
      },
      {
        icon: 'mdi:cog-sync',
        title: 'Multi-Manager Support',
        description: 'Integrates with FLEXLM, RLM, LM-X, DSLS, and custom license managers'
      },
      {
        icon: 'mdi:gauge',
        title: 'Utilization Metrics',
        description: 'Track utilization percentages and identify over/under-licensed software'
      }
    ],
    benefits: [
      'Prevent costly license denials',
      'Right-size your license pools',
      'Reduce license costs by 25-35%',
      'Support distributed teams effectively'
    ],
    color: '#a855f7'
  },
  {
    id: 'compliance',
    icon: 'mdi:shield-check',
    title: 'Compliance & Audit',
    subtitle: 'Stay audit-ready with automated compliance tracking',
    description: 'Maintain compliance with software licenses and be audit-ready at all times. ESEC provides comprehensive compliance tracking and reporting to protect your organization.',
    capabilities: [
      {
        icon: 'mdi:file-check',
        title: 'Audit Trail',
        description: 'Complete audit trail of all software installations, usage, and license changes'
      },
      {
        icon: 'mdi:scale-balance',
        title: 'License Reconciliation',
        description: 'Automatically reconcile purchased licenses against actual usage'
      },
      {
        icon: 'mdi:clipboard-list',
        title: 'Compliance Reports',
        description: 'Generate compliance reports for audits in minutes, not weeks'
      },
      {
        icon: 'mdi:alert-octagon',
        title: 'Risk Identification',
        description: 'Identify compliance risks and get recommendations for remediation'
      },
      {
        icon: 'mdi:file-table',
        title: 'Software Inventory',
        description: 'Detailed inventory of all software by workstation, version, and license type'
      },
      {
        icon: 'mdi:certificate',
        title: 'License Proof',
        description: 'Maintain proof of license ownership and entitlements'
      }
    ],
    benefits: [
      'Be audit-ready 24/7',
      'Avoid costly compliance penalties',
      'Reduce audit preparation time by 90%',
      'Demonstrate license compliance to vendors'
    ],
    color: '#10b981'
  },
  {
    id: 'project',
    icon: 'mdi:briefcase',
    title: 'Project Management',
    subtitle: 'Track time and productivity across projects',
    description: 'Understand how your team spends time across different projects and tools. ESEC provides project-level tracking to help you estimate better and improve productivity.',
    capabilities: [
      {
        icon: 'mdi:clock-time-four',
        title: 'Time Estimation',
        description: 'Track actual time spent on projects to improve future estimates'
      },
      {
        icon: 'mdi:chart-gantt',
        title: 'Project Analytics',
        description: 'Analyze software usage and productivity at the project level'
      },
      {
        icon: 'mdi:account-multiple-check',
        title: 'Team Productivity',
        description: 'Monitor team productivity and identify bottlenecks'
      },
      {
        icon: 'mdi:application',
        title: 'Tool Usage',
        description: 'See which tools are used most for different project types'
      },
      {
        icon: 'mdi:chart-timeline-variant',
        title: 'Timeline Tracking',
        description: 'Track project timelines and software usage patterns'
      },
      {
        icon: 'mdi:target',
        title: 'Resource Planning',
        description: 'Plan resource allocation based on historical project data'
      }
    ],
    benefits: [
      'Improve project time estimates',
      'Optimize team productivity',
      'Better resource allocation',
      'Data-driven project planning'
    ],
    color: '#f59e0b'
  }
]

export default function Features() {
  const { mode } = useThemeMode()
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to section based on hash
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Container sx={{ mb: 8 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: mode === 'dark'
              ? '1px solid rgba(0, 240, 255, 0.3)'
              : '1px solid rgba(0, 151, 167, 0.3)',
            background: mode === 'dark'
              ? 'rgba(0, 240, 255, 0.05)'
              : 'rgba(0, 151, 167, 0.05)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}>
            <Icon
              icon="mdi:star-four-points"
              color={mode === 'dark' ? '#00f0ff' : '#0097a7'}
              width="16"
              height="16"
            />
            <Typography variant="caption" sx={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              FEATURES
            </Typography>
          </Box>

          <Typography variant="h2" sx={{
            fontSize: { xs: 32, md: 52 },
            fontWeight: 800,
            background: mode === 'dark'
              ? 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)'
              : 'linear-gradient(135deg, #0097a7 0%, #7c3aed 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Powerful Features for<br />Complete Control
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
            Everything you need to optimize software assets, manage licenses, ensure compliance, and boost productivity
          </Typography>
        </Stack>

        {/* Quick Navigation */}
        <Box sx={{ mt: 6, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {features.map((feature) => (
            <Chip
              key={feature.id}
              label={feature.title}
              onClick={() => {
                const element = document.getElementById(feature.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              icon={<Icon icon={feature.icon} />}
              sx={{
                px: 2,
                py: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
                background: mode === 'dark'
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.9)',
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.2)'
                  : '1px solid rgba(0, 151, 167, 0.2)',
                '&:hover': {
                  background: mode === 'dark'
                    ? 'rgba(0, 240, 255, 0.1)'
                    : 'rgba(0, 151, 167, 0.1)',
                  borderColor: mode === 'dark' ? '#00f0ff' : '#0097a7',
                }
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <Box
          key={feature.id}
          id={feature.id}
          sx={{
            py: 8,
            scrollMarginTop: '100px',
            background: index % 2 === 1
              ? mode === 'dark'
                ? 'rgba(15, 23, 42, 0.4)'
                : 'rgba(248, 250, 252, 0.8)'
              : 'transparent',
            borderTop: index % 2 === 1
              ? mode === 'dark'
                ? '1px solid rgba(0, 240, 255, 0.1)'
                : '1px solid rgba(0, 151, 167, 0.2)'
              : 'none',
            borderBottom: index % 2 === 1
              ? mode === 'dark'
                ? '1px solid rgba(0, 240, 255, 0.1)'
                : '1px solid rgba(0, 151, 167, 0.2)'
              : 'none',
          }}
        >
          <Container>
            {/* Feature Header */}
            <Stack spacing={3} sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 3,
                  background: `${feature.color}20`,
                  border: `2px solid ${feature.color}`,
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <Icon
                    icon={feature.icon}
                    width="36"
                    height="36"
                    color={feature.color}
                  />
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {feature.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 900 }}>
                {feature.description}
              </Typography>
            </Stack>

            {/* Capabilities Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {feature.capabilities.map((capability, idx) => (
                <Grid key={idx} item xs={12} md={6}>
                  <Paper sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: mode === 'dark'
                        ? `0 8px 24px ${feature.color}26`
                        : `0 8px 24px ${feature.color}20`,
                    }
                  }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: `${feature.color}20`,
                        border: `1px solid ${feature.color}40`,
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0
                      }}>
                        <Icon
                          icon={capability.icon}
                          width="20"
                          height="20"
                          color={feature.color}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {capability.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {capability.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Benefits */}
            <Paper sx={{
              p: 4,
              background: mode === 'dark'
                ? `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}05 100%)`
                : `linear-gradient(135deg, ${feature.color}08 0%, ${feature.color}03 100%)`,
              border: `1px solid ${feature.color}40`,
            }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: feature.color }}>
                Key Benefits
              </Typography>
              <Grid container spacing={2}>
                {feature.benefits.map((benefit, idx) => (
                  <Grid key={idx} item xs={12} sm={6}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Icon
                        icon="mdi:check-circle"
                        width="24"
                        height="24"
                        color={feature.color}
                      />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {benefit}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </Box>
      ))}

      {/* CTA Section */}
      <Container sx={{ mt: 10 }}>
        <Paper sx={{
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(0, 151, 167, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
          border: mode === 'dark'
            ? '1px solid rgba(0, 240, 255, 0.3)'
            : '1px solid rgba(0, 151, 167, 0.3)',
        }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Ready to Experience These Features?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              See ESEC in action with a personalized demo tailored to your needs
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                endIcon={<Icon icon="mdi:play-circle" />}
                sx={{ px: 4, py: 1.5 }}
              >
                Request a Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/pricing')}
                sx={{ px: 4, py: 1.5 }}
              >
                View Pricing
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
