import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../theme/useColors'

const includedFeatures = [
  {
    icon: 'mdi:feature-search',
    text: 'All the ESEC features, Reports and Dashboards of current modules (Software Asset Management, Project Management, Inventory Management and Compliance and Audit) plus new features, reports and dashboards released during the subscription period'
  },
  {
    icon: 'mdi:database',
    text: 'Commercial edition of MySQL Server from Oracle (bundled with ESEC)'
  },
  {
    icon: 'mdi:infinity',
    text: 'Unlimited monitoring of Software applications (Engineering and Non-Engineering)'
  },
  {
    icon: 'mdi:server-network',
    text: 'Unlimited configuring of License servers/Vendor daemons'
  },
  {
    icon: 'mdi:devices',
    text: 'Unlimited installation of End point Agent module configured as per customer\'s requirement'
  },
  {
    icon: 'mdi:license',
    text: 'Monitoring of all types of Licenses (Perpetual, Node locked, Named user, Dongle, Tokens, Subscription, SaaS, Cloud, etc.)'
  },
  {
    icon: 'mdi:connection',
    text: 'Integration with internal systems – LDAP, HR, Power BI, ERP, etc.'
  },
  {
    icon: 'mdi:school',
    text: 'Installation, Training and initial Customization Services (3-15 days based on total users)'
  },
  {
    icon: 'mdi:lifebuoy',
    text: 'Maintenance Support during subscription period'
  },
  {
    icon: 'mdi:account-tie',
    text: '1-3 days (based on total users) Consultancy by experts per year'
  },
]

export default function Pricing() {
  const navigate = useNavigate()
  const colors = useColors()

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        {/* Header */}
        <Stack spacing={3} sx={{ mb: 8, textAlign: 'center' }}>
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mx: 'auto'
          }}>
            <Icon icon="mdi:tag" color={colors.primary} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              TRANSPARENT ANNUAL SUBSCRIPTION PRICING
            </Typography>
          </Box>

          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 52 } }}>
            One Price Based on Actual Users
          </Typography>

          <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto', fontWeight: 600 }}>
            <span style={{ color: colors.primary }}>No Hidden Costs</span> - Inclusions and Guarantees
          </Typography>
        </Stack>

        {/* ROI Statement */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          mb: 6,
          textAlign: 'center',
          background: colors.gradient.subtle,
          border: `2px solid ${colors.border.primary}`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            opacity: 0.1
          }}>
            <Icon icon="mdi:trophy" width="80" height="80" color={colors.primary} />
          </Box>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 900 }}>
            <span style={{ color: colors.primary }}>5X to 25+X ROI</span> in 2 Years
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
            Best Value for Money
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
            Many customers benefited by 5X to 25+X ROI within 2 years of ESEC's deployment
          </Typography>
        </Paper>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{
              p: 4,
              height: '100%',
              border: `2px solid ${colors.border.primary}`,
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: colors.shadow.hover,
                borderColor: colors.primary
              }
            }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Icon icon="mdi:map-marker" color={colors.primary} width="24" height="24" />
                  <Typography variant="overline" sx={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}>
                    India Pricing
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>
                    ₹ 3,00,000 <Typography component="span" variant="body2" color="text.secondary">/Year Base</Typography>
                  </Typography>
                  <Typography variant="h5" sx={{ color: colors.primary, fontWeight: 700 }}>
                    + ₹ XXX <Typography component="span" variant="body2" color="text.secondary">/Month/User</Typography>
                  </Typography>
                </Box>

                <Box sx={{
                  p: 2,
                  borderRadius: 2,
                  background: colors.interactive.backgroundSubtle,
                  border: `1px solid ${colors.border.secondary}`
                }}>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:check-circle" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        Total price based on actual user count + Base Price
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:calendar-check" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        Billed Annually
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:server" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        ESEC Servers located in India. Users and software globally
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Box sx={{
                  p: 2.5,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}08)`,
                  border: `1px solid ${colors.border.primary}`
                }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                    <Icon icon="mdi:tag-multiple" color={colors.primary} width="22" height="22" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primary }}>
                      Special Offers
                    </Typography>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:brightness-percent" color={colors.primary} width="18" height="18" />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        20% discount for registered Small and Micro Companies (SMEs)
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:chart-line" color={colors.primary} width="18" height="18" />
                      <Typography variant="body2">
                        Attractive Volume Discounts for above 500 Users
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() => navigate('/contact')}
                  sx={{ mt: 'auto', py: 1.5 }}
                  startIcon={<Icon icon="mdi:email" />}
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
              border: `2px solid ${colors.border.primary}`,
              background: colors.gradient.subtle,
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: colors.shadow.hover,
                borderColor: colors.primary
              }
            }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Icon icon="mdi:earth" color={colors.primary} width="24" height="24" />
                  <Typography variant="overline" sx={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}>
                    International Pricing
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>
                    $ 4,000 <Typography component="span" variant="body2" color="text.secondary">/Year Base</Typography>
                  </Typography>
                  <Typography variant="h5" sx={{ color: colors.primary, fontWeight: 700 }}>
                    + $ XXX <Typography component="span" variant="body2" color="text.secondary">/Month/User</Typography>
                  </Typography>
                </Box>

                <Box sx={{
                  p: 2,
                  borderRadius: 2,
                  background: colors.interactive.backgroundSubtle,
                  border: `1px solid ${colors.border.secondary}`
                }}>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:check-circle" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        Total price based on actual user count + Base Price
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:calendar-check" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        Billed Annually
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:server-network" color={colors.primary} width="20" height="20" />
                      <Typography variant="body2">
                        ESEC Servers located outside India
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Box sx={{
                  p: 2.5,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}08)`,
                  border: `1px solid ${colors.border.primary}`
                }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                    <Icon icon="mdi:tag-multiple" color={colors.primary} width="22" height="22" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primary }}>
                      Special Offers
                    </Typography>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:brightness-percent" color={colors.primary} width="18" height="18" />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        20% discount for registered SMEs with revenue below US $100M
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Icon icon="mdi:chart-line" color={colors.primary} width="18" height="18" />
                      <Typography variant="body2">
                        Attractive Volume Discounts for above 500 Users
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => navigate('/contact')}
                  sx={{ mt: 'auto', py: 1.5 }}
                  startIcon={<Icon icon="mdi:email" />}
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
          border: `2px solid ${colors.border.secondary}`,
          background: colors.gradient.subtle,
        }}>
          <Stack spacing={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                India and International Price Include the Following
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Everything you need in one transparent package
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {includedFeatures.map((feature, index) => (
                <Grid key={index} item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{
                      minWidth: 40,
                      height: 40,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`,
                      border: `1px solid ${colors.border.primary}`,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0
                    }}>
                      <Icon icon={feature.icon} color={colors.primary} width="22" height="22" />
                    </Box>
                    <Typography variant="body2" sx={{ flex: 1, pt: 1, lineHeight: 1.6 }}>
                      {feature.text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Paper>

        {/* Volume Discounts */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          mt: 6,
          border: `2px solid ${colors.border.primary}`,
          background: `linear-gradient(135deg, ${colors.primary}10, ${colors.primary}05)`,
        }}>
          <Stack spacing={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                <Icon icon="mdi:chart-box" color={colors.primary} width="32" height="32" />
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  Volume Discounts and Site Licensing
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary">
                Scale with us and save more
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 3,
                  borderRadius: 2,
                  background: colors.interactive.backgroundSubtle,
                  border: `1px solid ${colors.border.secondary}`,
                  height: '100%'
                }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Icon icon="mdi:account-group" color={colors.primary} width="24" height="24" />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Volume Discounts (500+ Users)
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      For attractive volume discounts above 500 users and multi-year contracts, please contact sales team
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 3,
                  borderRadius: 2,
                  background: colors.interactive.backgroundSubtle,
                  border: `1px solid ${colors.border.secondary}`,
                  height: '100%'
                }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Icon icon="mdi:office-building" color={colors.primary} width="24" height="24" />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Enterprise Site Licensing (15,000+ Users)
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      For special Enterprise Site licensing pricing above 15,000 users, please contact sales team
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Paper>

        {/* Special Guarantee */}
        <Paper sx={{
          p: { xs: 3, md: 5 },
          mt: 6,
          border: `2px solid ${colors.primary}`,
          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}05)`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            opacity: 0.1
          }}>
            <Icon icon="mdi:shield-check" width="150" height="150" color={colors.primary} />
          </Box>
          <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                <Icon icon="mdi:shield-star" color={colors.primary} width="36" height="36" />
                <Typography variant="h3" sx={{ fontWeight: 900, color: colors.primary }}>
                  Special Guarantee Offer
                </Typography>
              </Stack>
              <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
                You do not need but still....we want to ensure...{':)'}
              </Typography>
            </Box>

            <Box sx={{
              p: 4,
              borderRadius: 3,
              background: colors.background.paper,
              border: `2px solid ${colors.border.primary}`,
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
                <span style={{ color: colors.primary }}>75% Refund</span> Within 45 Days
              </Typography>
              <Typography variant="body1" color="text.secondary">
                75% of total amount to be returned if not satisfied within 45 days
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                Minimum of Rs. 1.5 lacs or US $ 2,500 to be retained
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* CTA */}
        <Stack spacing={3} alignItems="center" sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Ready to optimize your software costs?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
            Get started with ESEC today and experience guaranteed ROI within 2 years
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Icon icon="mdi:play-circle" />}
              onClick={() => navigate('/contact')}
              sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
            >
              Request Demo
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<Icon icon="mdi:file-document" />}
              onClick={() => navigate('/contact')}
              sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
            >
              Request Proposal
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
