import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useThemeMode } from '../ThemeContext'

const includedFeatures = [
  'All the ESEC features',
  'Unlimited Software applications',
  'Unlimited License servers/Vendor daemons',
  'All types of Licenses (Perpetual, Node locked, Named user, Tokens, Subscription, SaaS, Cloud, etc.)',
  'Configured End point Agent module as per user count',
  'Installation, Training and initial Customization Services (3-15 days)',
  'Maintenance Support',
  '1-3 days Consultancy by experts per year',
]

export default function Pricing() {
  const navigate = useNavigate()
  const { mode } = useThemeMode()

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        {/* Header */}
        <Stack spacing={3} sx={{ mb: 8, textAlign: 'center' }}>
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: mode === 'dark'
              ? '1px solid rgba(0, 240, 255, 0.3)'
              : '1px solid rgba(0, 151, 167, 0.4)',
            background: mode === 'dark'
              ? 'rgba(0, 240, 255, 0.05)'
              : 'rgba(0, 151, 167, 0.08)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mx: 'auto'
          }}>
            <Icon icon="mdi:tag" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: mode === 'dark' ? '#00f0ff' : '#0097a7',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              TRANSPARENT PRICING
            </Typography>
          </Box>

          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 52 } }}>
            Highest Value for Money
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            One simple price based on the number of users - fully transparent and scalable
          </Typography>
        </Stack>

        {/* ROI Statement */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          mb: 6,
          textAlign: 'center',
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(0, 151, 167, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
          border: mode === 'dark'
            ? '1px solid rgba(0, 240, 255, 0.3)'
            : '1px solid rgba(0, 151, 167, 0.3)',
        }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
            <span style={{ color: mode === 'dark' ? '#00f0ff' : '#0097a7' }}>5X to 25+X ROI</span> in 2 Years
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Many of our customers have benefited by 5X to 25+X of investment in ESEC within the first 2 years.
          </Typography>
        </Paper>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{
              p: 4,
              height: '100%',
              border: mode === 'dark'
                ? '1px solid rgba(0, 240, 255, 0.3)'
                : '1px solid rgba(0, 151, 167, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: mode === 'dark'
                  ? '0 12px 40px rgba(0, 240, 255, 0.3)'
                  : '0 12px 40px rgba(0, 151, 167, 0.25)',
              }
            }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="overline" sx={{
                    color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                    fontWeight: 700
                  }}>
                    India Pricing
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, mb: 0.5 }}>
                    ₹ XXXX - ₹ XXXX
                  </Typography>
                  <Typography color="text.secondary">per Year / User</Typography>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Total price based on the actual user count. Installation of ESEC Servers to be in India.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: '#10b981' }}>
                    Special Offers:
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" color="text.secondary">
                      • X% discount for registered MSME companies in India
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Free for registered MSME companies with less than XXX users
                    </Typography>
                  </Stack>
                </Box>

                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() => navigate('/contact')}
                  sx={{ mt: 'auto' }}
                >
                  Get India Pricing
                </Button>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{
              p: 4,
              height: '100%',
              border: mode === 'dark'
                ? '1px solid rgba(168, 85, 247, 0.3)'
                : '1px solid rgba(124, 58, 237, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: mode === 'dark'
                  ? '0 12px 40px rgba(168, 85, 247, 0.3)'
                  : '0 12px 40px rgba(124, 58, 237, 0.25)',
              }
            }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="overline" sx={{
                    color: mode === 'dark' ? '#a855f7' : '#7c3aed',
                    fontWeight: 700
                  }}>
                    International Pricing
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, mb: 0.5 }}>
                    $XX - $XX
                  </Typography>
                  <Typography color="text.secondary">per Year / User</Typography>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Total price based on the actual user count. Installation of ESEC Servers outside India.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: '#10b981' }}>
                    Guarantee:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    XX% amount within X months if not satisfied
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => navigate('/contact')}
                  sx={{ mt: 'auto' }}
                >
                  Get International Pricing
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* What's Included */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          border: mode === 'dark'
            ? '1px solid rgba(0, 240, 255, 0.2)'
            : '1px solid rgba(0, 151, 167, 0.2)',
        }}>
          <Stack spacing={3}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
              One Price Includes Everything
            </Typography>

            <Grid container spacing={2}>
              {includedFeatures.map((feature, index) => (
                <Grid key={index} item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{
                      minWidth: 32,
                      height: 32,
                      borderRadius: 2,
                      background: mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))'
                        : 'linear-gradient(135deg, rgba(0, 151, 167, 0.15), rgba(124, 58, 237, 0.15))',
                      border: mode === 'dark'
                        ? '1px solid rgba(0, 240, 255, 0.3)'
                        : '1px solid rgba(0, 151, 167, 0.3)',
                      display: 'grid',
                      placeItems: 'center',
                    }}>
                      <Icon icon="mdi:check-bold" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="18" height="18" />
                    </Box>
                    <Typography sx={{ flex: 1, pt: 0.5 }}>{feature}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Paper>

        {/* CTA */}
        <Stack spacing={2} alignItems="center" sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5">
            Ready to optimize your software costs?
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<Icon icon="mdi:play-circle" />}
            onClick={() => navigate('/contact')}
            sx={{ px: 5, py: 1.5 }}
          >
            Request a Demo
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
