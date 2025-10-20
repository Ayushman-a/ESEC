import * as React from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'

export default function Contact() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack spacing={2} sx={{ maxWidth: 560 }}>
          <Typography variant="h3">Contact Sales</Typography>
          <Typography color="text.secondary">Tell us a bit about your environment and we’ll be in touch.</Typography>
          <TextField label="Work Email" fullWidth />
          <TextField label="Company" fullWidth />
          <TextField label="Message" fullWidth multiline minRows={4} />
          <Button variant="contained" size="large">Submit</Button>
        </Stack>
      </Container>
    </Box>
  )
}
