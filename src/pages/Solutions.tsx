import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'
import { useNavigate } from 'react-router-dom'

const solutions = [
  {
    icon: 'mdi:chip',
    title: 'Semiconductor & EDA',
    description: 'Optimize expensive EDA tool licenses and prevent design bottlenecks',
    features: [
      'Real-time license availability tracking',
      'Peak usage analytics for right-sizing',
      'Prevent license denial with predictive alerts',
      'Multi-site license pool optimization'
    ],
    color: '#00f0ff'
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Compliance & Audit Ready',
    description: 'Stay audit-ready with comprehensive license compliance tracking',
    features: [
      'Automated compliance reporting',
      'Software inventory by workstation',
      'License vs usage reconciliation',
      'Audit trail and historical data'
    ],
    color: '#a855f7'
  },
  {
    icon: 'mdi:cloud-outline',
    title: 'SaaS & Cloud Optimization',
    description: 'Gain visibility and control over cloud software subscriptions',
    features: [
      'Discover shadow IT and unused subscriptions',
      'Track cloud license utilization',
      'Optimize SaaS spending',
      'Integration with major cloud platforms'
    ],
    color: '#10b981'
  },
  {
    icon: 'mdi:chart-line',
    title: 'Cost Optimization',
    description: 'Reduce software costs by up to 40% through intelligent optimization',
    features: [
      'Identify over-licensed software',
      'Release idle licenses automatically',
      'Usage-based license recommendations',
      'ROI tracking and reporting'
    ],
    color: '#f59e0b'
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Engineering Productivity',
    description: 'Maximize engineering team productivity with license intelligence',
    features: [
      'Eliminate license wait times',
      'Project-based license allocation',
      'User activity and time tracking',
      'Individual productivity dashboards'
    ],
    color: '#3b82f6'
  },
  {
    icon: 'mdi:cog-outline',
    title: 'License Manager Integration',
    description: 'Seamless integration with all major license management systems',
    features: [
      'FLEXLM, RLM, LM-X, DSLS support',
      'Custom license manager configuration',
      'Real-time data synchronization',
      'Unified dashboard for all licenses'
    ],
    color: '#ec4899'
  }
]

const useCases = [
  {
    industry: 'Semiconductor Companies',
    challenge: 'High-cost EDA licenses causing design delays',
    solution: 'Real-time monitoring and predictive analytics prevent license bottlenecks',
    result: '25% productivity improvement, 30% cost reduction'
  },
  {
    industry: 'Engineering Firms',
    challenge: 'Unclear software usage across distributed teams',
    solution: 'Comprehensive tracking and automated reporting',
    result: 'Audit-ready in hours, not weeks'
  },
  {
    industry: 'IT Organizations',
    challenge: 'Shadow IT and SaaS sprawl',
    solution: 'Discover and optimize all software subscriptions',
    result: '40% reduction in unused licenses'
  }
]

export default function Solutions() {
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
              icon="mdi:puzzle-outline"
              color={mode === 'dark' ? '#00f0ff' : '#0097a7'}
              width="16"
              height="16"
            />
            <Typography variant="caption" sx={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              SOLUTIONS
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
            Solutions for Every Challenge
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800 }}>
            Engineering license management, compliance readiness, SaaS optimization, and more
          </Typography>
        </Stack>
      </Container>

      {/* Solutions Grid */}
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={3}>
          {solutions.map((solution, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Paper sx={{
                p: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: mode === 'dark'
                    ? `0 12px 40px ${solution.color}33`
                    : `0 12px 40px ${solution.color}26`,
                }
              }}>
                <Stack spacing={2.5}>
                  <Box sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    background: `${solution.color}20`,
                    border: `1px solid ${solution.color}40`,
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    <Icon
                      icon={solution.icon}
                      width="32"
                      height="32"
                      color={solution.color}
                    />
                  </Box>

                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {solution.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {solution.description}
                    </Typography>
                  </Box>

                  <Stack spacing={1}>
                    {solution.features.map((feature, idx) => (
                      <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                        <Icon
                          icon="mdi:check-circle"
                          width="18"
                          height="18"
                          color={solution.color}
                          style={{ marginTop: '2px', flexShrink: 0 }}
                        />
                        <Typography variant="body2" color="text.secondary">
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

      {/* Use Cases Section */}
      <Box sx={{
        py: 8,
        background: mode === 'dark'
          ? 'rgba(15, 23, 42, 0.4)'
          : 'rgba(248, 250, 252, 0.8)',
        borderTop: mode === 'dark'
          ? '1px solid rgba(0, 240, 255, 0.1)'
          : '1px solid rgba(0, 151, 167, 0.2)',
        borderBottom: mode === 'dark'
          ? '1px solid rgba(0, 240, 255, 0.1)'
          : '1px solid rgba(0, 151, 167, 0.2)',
      }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Real-World Success Stories
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
              See how ESEC helps organizations across industries
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {useCases.map((useCase, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Paper sx={{
                  p: 4,
                  height: '100%',
                  background: mode === 'dark'
                    ? 'rgba(15, 23, 42, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                }}>
                  <Stack spacing={2}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                        fontWeight: 700,
                        letterSpacing: '0.1em'
                      }}
                    >
                      {useCase.industry}
                    </Typography>

                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Challenge:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {useCase.challenge}
                      </Typography>

                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Solution:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {useCase.solution}
                      </Typography>

                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Result:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: mode === 'dark' ? '#00f0ff' : '#0097a7'
                        }}
                      >
                        {useCase.result}
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
              Ready to See ESEC in Action?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              Schedule a personalized demo to see how ESEC can solve your specific challenges
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                endIcon={<Icon icon="mdi:play-circle" />}
                sx={{ px: 4, py: 1.5 }}
              >
                Schedule Demo
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
