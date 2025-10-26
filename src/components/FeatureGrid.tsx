import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'

const features = [
  { icon: 'mdi:eye', title: 'Real-Time Visibility', desc: 'Enterprise-wide real-time visibility of software utilization and inventory by organization, division, department, and project.' },
  { icon: 'mdi:license', title: 'License Management', desc: 'Manage all types of licenses: Perpetual, Node locked, Named user, Tokens, Subscription, SaaS, Cloud with unlimited license servers.' },
  { icon: 'mdi:file-check', title: 'Compliance & Audit', desc: 'Comprehensive compliance and audit reports with unauthorized license tracking and usage containment.' },
  { icon: 'mdi:chart-line', title: 'Reallocation & Optimization', desc: 'Smart reallocation based on utilization with transparent internal billing and right-time module renewals.' },
  { icon: 'mdi:calendar-clock', title: 'Project Management', desc: 'Timesheet integration, Estimate vs Actuals tracking, and resources management integration.' },
  { icon: 'mdi:database', title: 'Full Inventory', desc: 'Complete hardware system inventory for version management and tracking of all software applications.' },
]

export default function FeatureGrid() {
  const colors = useColors()

  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
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
          <Icon icon="mdi:package-variant" color={colors.primary} width="16" height="16" />
          <Typography variant="caption" sx={{
            color: colors.primary,
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
        {features.map((f) => (
          <Grid key={f.title} item xs={12} md={4}>
            <Paper sx={{
              p: 3.5,
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: colors.shadow.hover,
                border: `1px solid ${colors.border.primary}`,
              }
            }}>
              <Stack spacing={2}>
                <Box sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.primary}05 100%)`,
                  border: `1px solid ${colors.border.primary}`,
                  display: 'grid',
                  placeItems: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 3,
                    padding: '1px',
                    background: `linear-gradient(135deg, ${colors.primary}, transparent)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }
                }}>
                  <Icon icon={f.icon} color={colors.primary} width="28" height="28" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{f.title}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{f.desc}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
