import * as React from 'react'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { useTranslation } from 'react-i18next'
import esecLogo from '../assets/images/new-logo.png'
import esecDarkLogo from '../assets/images/esec_darklogo.png'

export default function Footer() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const { t } = useTranslation()

  const cols = [
    {
      title: t('footer.solutions.title'),
      items: [
        { label: t('nav.menu.introduction'), to: '/features#introduction' },
        { label: t('nav.menu.sam'), to: '/features#sam' },
        { label: t('nav.menu.compliance'), to: '/features#compliance' },
        { label: t('nav.menu.project'), to: '/features#project' },
        { label: t('nav.menu.alerts'), to: '/features#alerts' },
        { label: 'Reports and Dashboards', to: '/#reports-dashboards' },
      ]
    },
    // {
    //   title: t('footer.resources.title'),
    //   items: [
    //     { label: t('footer.resources.documentation'), to: '#' },
    //     { label: t('footer.resources.caseStudies'), to: '#' },
    //     { label: t('footer.resources.blog'), to: '#' },
    //     { label: t('footer.resources.support'), to: '#' }
    //   ]
    // },
    {
      title: t('footer.company.title'),
      items: [
        { label: t('footer.company.aboutUs'), to: '/about' },
        { label: t('footer.company.partners'), to: '/partners' },
        { label: t('footer.company.careers'), to: '/about#careers' },
        { label: t('footer.company.contact'), to: '/contact' }
      ]
    },
  ]

  return (
    <Box component="footer" sx={{
      bgcolor: colors.background.overlay,
      borderTop: `1px solid ${colors.border.secondary}`,
      mt: 8,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${colors.primary}, ${colors.primary}, transparent)`,
      }
    }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Logo and Description Section */}
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={mode === 'dark' ? esecDarkLogo : esecLogo}
              alt="ESEC Logo"
              sx={{
                height: 50,
                width: 'auto',
                mb: 2
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
              Global Certificates
            </Typography>

            {/* ISO Certifications */}
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon icon="mdi:certificate" color={colors.primary} width="20" height="20" />
                <Typography variant="body2" sx={{
                  color: colors.text.primary,
                  fontWeight: 600
                }}>
                  {t('footer.isoTitle1')}
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ pl: 3.5 }}>
                {t('footer.isoSubtitle1')}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <Icon icon="mdi:shield-check" color={colors.primary} width="20" height="20" />
                <Typography variant="body2" sx={{
                  color: colors.text.primary,
                  fontWeight: 600
                }}>
                  {t('footer.isoTitle2')}
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ pl: 3.5 }}>
                {t('footer.isoSubtitle2')}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              {/* <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: `1px solid ${colors.border.primary}`,
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.primary,
                  background: colors.interactive.background,
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:twitter" color={colors.primary} width="18" height="18" />
              </Box> */}
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: `1px solid ${colors.border.primary}`,
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.primary,
                  background: colors.interactive.background,
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:linkedin" color={colors.primary} width="18" height="18" />
              </Box>
              {/* <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: `1px solid ${colors.border.primary}`,
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.primary,
                  background: colors.interactive.background,
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:github" color={colors.primary} width="18" height="18" />
              </Box> */}
            </Stack>
          </Grid>

          {/* Navigation Columns */}
          {cols.map((c) => (
            <Grid key={c.title} item xs={12} sm={6} md={3}>
              <Typography variant="overline" sx={{
                color: colors.primary,
                fontWeight: 700,
                letterSpacing: '0.1em'
              }}>{c.title}</Typography>
              <Stack sx={{ mt: 2 }} spacing={1.5}>
                {c.items.map((i) => (
                  <Link
                    key={i.label}
                    component={RouterLink}
                    to={i.to}
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: colors.primary,
                        paddingLeft: '4px'
                      }
                    }}
                  >{i.label}</Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Office Addresses Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{
              color: colors.primary,
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>{t('footer.offices.title')}</Typography>

            <Stack spacing={2.5} sx={{ mt: 2 }}>
              <Box>
                <Typography variant="body2" sx={{
                  color: colors.text.primary,
                  fontWeight: 600,
                  mb: 0.5
                }}>
                  {t('footer.offices.indiaTitle')}
                </Typography>
                <Stack spacing={0.8}>
                <Typography variant="body2" sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.875rem'
                  }}>
                    {t('footer.offices.india1')}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.875rem'
                  }}>
                    {t('footer.offices.tuticorin')}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.875rem'
                  }}>
                    {t('footer.offices.chennai')}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.875rem'
                  }}>
                    {t('footer.offices.delhi')}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.875rem'
                  }}>
                    {t('footer.offices.duns')}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" sx={{
                  color: colors.text.primary,
                  fontWeight: 600,
                  mb: 0.5
                }}>
                  {t('footer.offices.usTitle')}
                </Typography>
                <Typography variant="body2" sx={{
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                  fontSize: '0.875rem'
                }}>
                  {t('footer.offices.usName')}<br />
                  {t('footer.offices.usLocation')}
                </Typography>
              </Box>

              {/* Contact Email */}
              <Box sx={{
                mt: 1,
                pt: 2.5,
                borderTop: `1px solid ${colors.border.secondary}`
              }}>
                <Typography variant="body2" sx={{
                  color: colors.text.primary,
                  fontWeight: 600,
                  mb: 1
                }}>
                  Contact
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Icon icon="mdi:email" color={colors.primary} width="16" height="16" />
                    <Typography
                      component="a"
                      href="mailto:sales@nibanasolutions.com"
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: colors.primary
                        }
                      }}
                    >
                      sales@nibanasolutions.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Icon icon="mdi:tag" color={colors.primary} width="16" height="16" />
                    <Link
                      component={RouterLink}
                      to="/pricing"
                      underline="none"
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: colors.primary
                        }
                      }}
                    >
                      Pricing
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mt: 8,
            pt: 4,
            borderTop: `1px solid ${colors.border.subtle}`,
            gap: 2
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: colors.primary }
            }}>{t('footer.privacy')}</Link>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: colors.primary }
            }}>{t('footer.security')}</Link>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: colors.primary }
            }}>{t('footer.terms')}</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
