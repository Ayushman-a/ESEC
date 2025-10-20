import * as React from 'react'
import { Box, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { UsageTrendChart, UtilizationBarChart, ReclaimAreaChart } from './RealCharts'

type Feature = {
  key: string
  icon: string
  title: string
  blurb: string
  visual: 'line' | 'bar' | 'area' | 'picture'
}

const HERO_IMG = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"

const FEATURES: Feature[] = [
  {
    key: 'realtime-usage',
    icon: 'mdi:chart-line',
    title: 'Real-time Usage',
    blurb: 'See who uses what, when, and for how long. Pinpoint idle licenses and peak contention windows within minutes.',
    visual: 'line'
  },
  {
    key: 'license-optimization',
    icon: 'mdi:key-chain',
    title: 'License Optimization',
    blurb: 'Right-size expensive tools by reallocating underused seats while protecting mission-critical access for core teams.',
    visual: 'bar'
  },
  {
    key: 'harvest-reclaim',
    icon: 'mdi:clock-fast',
    title: 'Harvest & Reclaim',
    blurb: 'Automatically harvest idle seats; show savings from reclaimed hours with policy-driven automation.',
    visual: 'area'
  },
  {
    key: 'compliance-audit',
    icon: 'mdi:shield-check',
    title: 'Compliance & Audit',
    blurb: 'Centralize entitlements and usage trails to prepare evidence for vendor audits without the last-minute scramble.',
    visual: 'picture'
  },
]

export default function FeatureShowcase() {
  const [active, setActive] = React.useState(FEATURES[0])

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="h3">Explore key features</Typography>
          <Typography color="text.secondary">Click a bullet to reveal details with a live chart or image.</Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper>
              <List>
                {FEATURES.map(f => (
                  <ListItemButton
                    key={f.key}
                    selected={active.key === f.key}
                    onClick={() => setActive(f)}
                  >
                    <ListItemIcon>
                      <Icon icon={f.icon} width={22} height={22} />
                    </ListItemIcon>
                    <ListItemText primary={f.title} />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Stack spacing={2}>
                <Typography variant="h5">{active.title}</Typography>
                <Typography color="text.secondary">{active.blurb}</Typography>

                <Box sx={{ mt: 1 }}>
                  {active.visual === 'line' && <UsageTrendChart />}
                  {active.visual === 'bar' && <UtilizationBarChart />}
                  {active.visual === 'area' && <ReclaimAreaChart />}
                  {active.visual === 'picture' && (
                    <Box
                      sx={{
                        width: '100%',
                        height: 220,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: '1px solid rgba(2,6,23,0.06)',
                        backgroundImage: `url(${HERO_IMG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      title="Royalty-free Pexels image"
                    />
                  )}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
