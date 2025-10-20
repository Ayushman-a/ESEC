import * as React from 'react'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'
import esecLogo from '../assets/images/new-logo.png'

const cols = [
  { title: 'Solutions', items: ['License Management', 'Asset Tracking', 'Compliance & Audit', 'Cost Optimization'] },
  { title: 'Resources', items: ['Documentation', 'Case Studies', 'Blog', 'Support'] },
  { title: 'Company', items: ['About Us', 'Partners', 'Careers', 'Contact'] },
]

export default function Footer() {
  const { mode } = useThemeMode()

  return (
    <Box component="footer" sx={{
      bgcolor: mode === 'dark' ? 'rgba(10, 14, 26, 0.95)' : 'rgba(248, 250, 252, 0.95)',
      borderTop: mode === 'dark' ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(0, 151, 167, 0.3)',
      mt: 8,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: mode === 'dark'
          ? 'linear-gradient(90deg, transparent, #00f0ff, #a855f7, transparent)'
          : 'linear-gradient(90deg, transparent, #0097a7, #7c3aed, transparent)',
      }
    }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Logo and Description Section */}
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={esecLogo}
              alt="ESEC Logo"
              sx={{
                height: 50,
                width: 'auto',
                mb: 2
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
              Engineering Software Expertise Capture - Intelligent software asset management solutions for modern enterprises.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.3)'
                  : '1px solid rgba(0, 151, 167, 0.3)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: mode === 'dark' ? '#00f0ff' : '#0097a7',
                  background: mode === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 151, 167, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:twitter" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="18" height="18" />
              </Box>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.3)'
                  : '1px solid rgba(0, 151, 167, 0.3)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: mode === 'dark' ? '#00f0ff' : '#0097a7',
                  background: mode === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 151, 167, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:linkedin" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="18" height="18" />
              </Box>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: mode === 'dark'
                  ? '1px solid rgba(0, 240, 255, 0.3)'
                  : '1px solid rgba(0, 151, 167, 0.3)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: mode === 'dark' ? '#00f0ff' : '#0097a7',
                  background: mode === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 151, 167, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}>
                <Icon icon="mdi:github" color={mode === 'dark' ? '#00f0ff' : '#0097a7'} width="18" height="18" />
              </Box>
            </Stack>
          </Grid>

          {/* Navigation Columns */}
          {cols.map((c) => (
            <Grid key={c.title} item xs={12} sm={4} md={3}>
              <Typography variant="overline" sx={{
                color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                fontWeight: 700,
                letterSpacing: '0.1em'
              }}>{c.title}</Typography>
              <Stack sx={{ mt: 2 }} spacing={1.5}>
                {c.items.map((i) => (
                  <Link
                    key={i}
                    href="#"
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: mode === 'dark' ? '#00f0ff' : '#0097a7',
                        paddingLeft: '4px'
                      }
                    }}
                  >{i}</Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction={{ xs:'column', sm:'row' }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(0, 240, 255, 0.1)',
            gap: 2
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} ESEC. All rights reserved. Engineering Software Expertise Capture.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: mode === 'dark' ? '#00f0ff' : '#0097a7' }
            }}>Privacy Policy</Link>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: mode === 'dark' ? '#00f0ff' : '#0097a7' }
            }}>Security</Link>
            <Link href="#" underline="none" variant="caption" sx={{
              color: 'text.secondary',
              transition: 'color 0.2s ease',
              '&:hover': { color: mode === 'dark' ? '#00f0ff' : '#0097a7' }
            }}>Terms of Service</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
