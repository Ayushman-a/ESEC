import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useNavigate } from 'react-router-dom'

const values = [
  {
    icon: 'mdi:lightbulb-on',
    title: 'Innovation',
    description: 'We continuously innovate to deliver cutting-edge solutions that solve real-world software asset management challenges.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Trust & Transparency',
    description: 'We build trust through transparency in our pricing, processes, and partnerships with our customers.'
  },
  {
    icon: 'mdi:account-group',
    title: 'Customer Success',
    description: 'Your success is our success. We provide dedicated support and consultancy to maximize your ROI.'
  },
  {
    icon: 'mdi:rocket-launch',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from product development to customer service.'
  }
]

const stats = [
  { value: '500+', label: 'Organizations Trust ESEC' },
  { value: '10+', label: 'Years of Experience' },
  { value: '25X', label: 'Average ROI in 2 Years' },
  { value: '99.9%', label: 'Uptime Guarantee' }
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
              ABOUT ESEC
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
            Engineering Software<br />Expertise Capture
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
            We build intelligent tools that give teams clarity and control over software licenses,
            helping organizations optimize their software investments and ensure compliance.
          </Typography>
        </Stack>

        {/* Mission Statement */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          mb: 6,
          background: colors.gradient.subtle,
          border: `1px solid ${colors.border.secondary}`,
        }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            ESEC (Engineering Software Expertise Capture) is designed to revolutionize how organizations
            manage their software assets. We capture comprehensive data about software loaded on each computer
            across your organization, providing deep insights into license utilization, compliance, and optimization
            opportunities. Our platform integrates seamlessly with major license managers including FLEXLM, RLM,
            LM-X, DSLS, and can be configured for any new license manager.
          </Typography>
        </Paper>
      </Container>

      {/* Stats Section */}
      <Box sx={{
        py: 6,
        background: colors.background.surface,
        borderTop: `1px solid ${colors.border.subtle}`,
        borderBottom: `1px solid ${colors.border.subtle}`,
      }}>
        <Container>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} item xs={6} md={3}>
                <Stack alignItems="center" spacing={1}>
                  <Typography variant="h3" sx={{
                    fontWeight: 900,
                    background: colors.gradient.primary,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography color="text.secondary" textAlign="center" sx={{ fontSize: '0.9rem' }}>
                    {stat.label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container sx={{ mt: 10 }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Our Core Values
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
            The principles that guide everything we do
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Paper sx={{
                p: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: colors.shadow.hover,
                }
              }}>
                <Stack spacing={2}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}20)`,
                    border: `1px solid ${colors.border.primary}`,
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    <Icon
                      icon={value.icon}
                      width="28"
                      height="28"
                      color={colors.primary}
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
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
              Ready to Transform Your Software Asset Management?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              Join 500+ organizations that trust ESEC to optimize their software investments
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
