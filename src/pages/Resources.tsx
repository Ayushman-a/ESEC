import * as React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import ResourceCards from '../components/ResourceCards'

export default function Resources() {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <Stack spacing={1}>
          <Typography variant="h3">Resources</Typography>
          <Typography color="text.secondary">Articles, webinars, and guides to help you optimize software spend.</Typography>
        </Stack>
      </Container>
      <ResourceCards />
    </Box>
  )
}
