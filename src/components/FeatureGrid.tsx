import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'

const features = [
  { icon: 'mdi:eye', title: 'Real-Time Visibility', desc: 'Enterprise-wide real-time visibility of software utilization and inventory by organization, division, department, and project.', colorDark: '#00f0ff', colorLight: '#0097a7' },
  { icon: 'mdi:license', title: 'License Management', desc: 'Manage all types of licenses: Perpetual, Node locked, Named user, Tokens, Subscription, SaaS, Cloud with unlimited license servers.', colorDark: '#a855f7', colorLight: '#7c3aed' },
  { icon: 'mdi:file-check', title: 'Compliance & Audit', desc: 'Comprehensive compliance and audit reports with unauthorized license tracking and usage containment.', colorDark: '#10b981', colorLight: '#10b981' },
  { icon: 'mdi:chart-line', title: 'Reallocation & Optimization', desc: 'Smart reallocation based on utilization with transparent internal billing and right-time module renewals.', colorDark: '#f59e0b', colorLight: '#ea580c' },
  { icon: 'mdi:calendar-clock', title: 'Project Management', desc: 'Timesheet integration, Estimate vs Actuals tracking, and resources management integration.', colorDark: '#ef4444', colorLight: '#dc2626' },
  { icon: 'mdi:database', title: 'Full Inventory', desc: 'Complete hardware system inventory for version management and tracking of all software applications.', colorDark: '#00f0ff', colorLight: '#0097a7' },
]

export default function FeatureGrid() {
  const { mode } = useThemeMode()

  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
        <Box sx={{
          px: 2.5,
          py: 1,
          borderRadius: 10,
          border: mode === 'dark'
            ? '1px solid rgba(168, 85, 247, 0.3)'
            : '1px solid rgba(124, 58, 237, 0.4)',
          background: mode === 'dark'
            ? 'rgba(168, 85, 247, 0.05)'
            : 'rgba(124, 58, 237, 0.08)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          mx: 'auto'
        }}>
          <Icon icon="mdi:package-variant" color={mode === 'dark' ? '#a855f7' : '#7c3aed'} width="16" height="16" />
          <Typography variant="caption" sx={{
            color: mode === 'dark' ? '#a855f7' : '#7c3aed',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}>
            ESEC DELIVERABLES
          </Typography>
        </Box>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 } }}>
          Software Assets Management
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Engineering and Business Software optimization with enterprise-wide real-time visibility,
          compliance tracking, and intelligent cost reduction.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {features.map((f) => {
          const color = mode === 'dark' ? f.colorDark : f.colorLight
          return (
            <Grid key={f.title} item xs={12} md={4}>
              <Paper sx={{
                p: 3.5,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 40px ${color}40`,
                  border: `1px solid ${color}60`,
                }
              }}>
                <Stack spacing={2}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`,
                    border: `1px solid ${color}40`,
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 3,
                      padding: '1px',
                      background: `linear-gradient(135deg, ${color}, transparent)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }
                  }}>
                    <Icon icon={f.icon} color={color} width="28" height="28" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{f.title}</Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{f.desc}</Typography>
                </Stack>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
