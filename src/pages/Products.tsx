import * as React from 'react'
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const products = [
  { icon:'mdi:chart-box', title: 'Analytics', desc: 'Complete license usage views across users, groups, and projects.' },
  { icon:'mdi:cloud-lock', title: 'SaaS Management', desc: 'Discover shadow IT and optimize cloud software subscriptions.' },
  { icon:'mdi:file-cog', title: 'License Parser', desc: 'Normalize vendor license data for faster reporting.' },
  { icon:'mdi:account-sync', title: 'Directory Sync', desc: 'Integrate user directories to automate access control.' },
]

export default function Products() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Chip label="Products" color="secondary" variant="outlined" sx={{ width: 'fit-content' }} />
          <Typography variant="h3">Everything you need to optimize licenses</Typography>
          <Typography color="text.secondary">Modular tools that work better together.</Typography>
        </Stack>
        <Grid container spacing={2}>
          {products.map(p => (
            <Grid key={p.title} item xs={12} md={6}>
              <Paper sx={{ p: 3, height:'100%' }}>
                <Stack spacing={1}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: 'primary.main', display:'grid', placeItems:'center' }}>
                    <Icon icon={p.icon} color="white" width="22" height="22" />
                  </Box>
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography color="text.secondary">{p.desc}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
