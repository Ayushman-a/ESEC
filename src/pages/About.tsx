import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useNavigate } from 'react-router-dom'

const highlights = [
  {
    icon: 'mdi:factory',
    title: 'Manufacturing',
    color: '#2196F3'
  },
  {
    icon: 'mdi:rocket-launch',
    title: 'Aerospace',
    color: '#9C27B0'
  },
  {
    icon: 'mdi:car',
    title: 'Automotive',
    color: '#FF5722'
  },
  {
    icon: 'mdi:chip',
    title: 'High-Tech',
    color: '#00BCD4'
  },
  {
    icon: 'mdi:oil-lamp',
    title: 'Oil & Gas',
    color: '#FF9800'
  },
  {
    icon: 'mdi:laptop',
    title: 'IT Services',
    color: '#4CAF50'
  }
]

const approach = [
  {
    icon: 'mdi:chart-line',
    title: 'Real-time Analytics',
    description: 'Secure, near real-time reports, dashboards, and alerts from license servers and endpoints.'
  },
  {
    icon: 'mdi:shield-lock',
    title: 'On-Premise Security',
    description: 'Deployed at customer location with controlled access to designated employees only.'
  },
  {
    icon: 'mdi:chart-box-outline',
    title: 'Comprehensive Reports',
    description: 'Hundreds of reports and dashboards for efficient asset management and ROI optimization.'
  },
  {
    icon: 'mdi:account-tie',
    title: 'Expert Support',
    description: 'Customized reports and new features added at no cost based on requirements.'
  }
]

const founders = [
  {
    name: 'Narendar Reddy',
    initials: 'NR',
    role: 'Founder & Managing Director',
    linkedin: 'https://www.linkedin.com/in/narendar-reddy-b773b511/',
    experience: '35+ Years',
    bio: '35+ years in CAD/CAM/CAE/PLM. Former Managing Director of Siemens Digital Industry (1995-2009), grew customer base from 25 to 3,000+. Mechanical Engineer with MBA.'
  },
  {
    name: 'Rommal Fernando',
    initials: 'RF',
    role: 'Co-founder & Chief Architect',
    linkedin: 'https://www.linkedin.com/in/rommal-fernando-55466913/',
    experience: '30+ Years',
    bio: '30+ years in Engineering & Manufacturing IT. Technical Director at Siemens Digital Industry, worked with automotive OEMs globally. 6 years at Mahindra & Mahindra.'
  }
]

const stats = [
  { icon: 'mdi:calendar', value: '2011', label: 'Founded' },
  { icon: 'mdi:code-braces', value: '2017', label: 'ESEC Launched' },
  { icon: 'mdi:shield-check', value: 'ISO Certified', label: '27001:2022 & 27701:2019' },
  { icon: 'mdi:account-group', value: '60+', label: 'Years Experience' }
]

export default function About() {
  const colors = useColors()
  const navigate = useNavigate()

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Container sx={{ mb: 8 }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
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
              icon="mdi:information"
              color={colors.primary}
              width="16"
              height="16"
            />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              ABOUT NIBANA SOLUTIONS
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
            Advanced Predictive Analytics<br />for Asset Management
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
            Founded by seasoned professionals with extensive experience in manufacturing and services sectors,
            delivering ESEC - the next generation of software and hardware asset management.
          </Typography>
        </Stack>

        {/* Introduction */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{
              p: { xs: 3, md: 4 },
              height: '100%',
              background: colors.gradient.subtle,
              border: `1px solid ${colors.border.secondary}`,
            }}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Icon icon="mdi:office-building" width="28" color={colors.primary} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    About Nibana Solutions
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Founded in April 2011 by industry veterans, Nibana Solutions specializes in Predictive Analytics for asset management.
                  Our flagship product, ESEC, has been serving diverse industries since 2017.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  ESEC manages tens of thousands of software and hardware assets across Automotive, Aerospace, Heavy Machinery,
                  High-Tech, Oil & Gas, and IT sectors. Developed in Tuticorin and Chennai, certified for ISO/IEC 27001:2022 & 27701:2019.
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{
              p: { xs: 3, md: 4 },
              height: '100%',
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}05)`,
              border: `1px solid ${colors.border.primary}`,
            }}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Icon icon="mdi:domain" width="28" color={colors.primary} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Industries
                  </Typography>
                </Box>
                <Grid container spacing={1.5}>
                  {highlights.map((industry, index) => (
                    <Grid key={index} item xs={6}>
                      <Box sx={{
                        p: 1.5,
                        borderRadius: 2,
                        background: colors.background.paper,
                        border: `1px solid ${colors.border.subtle}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.5,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: industry.color,
                        }
                      }}>
                        <Icon icon={industry.icon} width="24" color={industry.color} />
                        <Typography variant="caption" sx={{ fontSize: '0.7rem', textAlign: 'center' }}>
                          {industry.title}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{
        py: 6,
        background: colors.background.surface,
        borderTop: `1px solid ${colors.border.subtle}`,
        borderBottom: `1px solid ${colors.border.subtle}`,
      }}>
        <Container>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid key={index} item xs={6} md={3}>
                <Paper sx={{
                  p: 2.5,
                  textAlign: 'center',
                  background: colors.background.paper,
                  border: `1px solid ${colors.border.subtle}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.border.primary,
                    transform: 'translateY(-4px)',
                  }
                }}>
                  <Stack alignItems="center" spacing={1.5}>
                    <Box sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`,
                      display: 'grid',
                      placeItems: 'center'
                    }}>
                      <Icon icon={stat.icon} width="24" color={colors.primary} />
                    </Box>
                    <Typography variant="h4" sx={{
                      fontWeight: 800,
                      background: colors.gradient.primary,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography color="text.secondary" textAlign="center" sx={{ fontSize: '0.85rem', lineHeight: 1.3 }}>
                      {stat.label}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Approach Section */}
      <Container sx={{ mt: 8 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Our Approach
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            How ESEC delivers value and optimizes ROI
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {approach.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Paper sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                background: colors.background.paper,
                border: `1px solid ${colors.border.subtle}`,
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
                    placeItems: 'center'
                  }}>
                    <Icon
                      icon={item.icon}
                      width="28"
                      height="28"
                      color={colors.primary}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Founders Section */}
      <Container sx={{ mt: 10 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Leadership Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            Led by industry veterans with 60+ years of combined experience
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {founders.map((founder, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Paper sx={{
                p: 3,
                height: '100%',
                background: colors.background.paper,
                border: `1px solid ${colors.border.subtle}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: colors.border.primary,
                  boxShadow: colors.shadow.hover,
                }
              }}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}CC)`,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      border: `2px solid ${colors.border.primary}`,
                    }}>
                      <Typography variant="h4" sx={{
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '0.05em'
                      }}>
                        {founder.initials}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {founder.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {founder.role}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                        <Box sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          background: `${colors.primary}15`,
                          border: `1px solid ${colors.border.primary}`
                        }}>
                          <Icon icon="mdi:briefcase" width="16" color={colors.primary} />
                          <Typography variant="caption" sx={{ fontWeight: 600, color: colors.primary }}>
                            {founder.experience}
                          </Typography>
                        </Box>
                        <Button
                          component="a"
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          startIcon={<Icon icon="mdi:linkedin" />}
                          sx={{
                            textTransform: 'none',
                            fontSize: '0.85rem',
                            minWidth: 'auto'
                          }}
                        >
                          LinkedIn
                        </Button>
                      </Box>
                    </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {founder.bio}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container sx={{ mt: 8, mb: 4 }}>
        <Paper sx={{
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          background: `linear-gradient(135deg, ${colors.primary}08, ${colors.primary}03)`,
          border: `1px solid ${colors.border.primary}`,
          borderRadius: 3,
        }}>
          <Stack spacing={2.5} alignItems="center">
            <Box sx={{
              width: 56,
              height: 56,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}CC)`,
              display: 'grid',
              placeItems: 'center'
            }}>
              <Icon icon="mdi:rocket-launch" width="28" color="white" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Ready to Optimize Your Assets?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 550 }}>
              Join organizations worldwide that trust ESEC to maximize their software and hardware ROI
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{ px: 4, py: 1.5 }}
              >
                Request a Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/pricing')}
                startIcon={<Icon icon="mdi:currency-usd" />}
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
