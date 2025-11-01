import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography, MenuItem } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'

const partnershipTypes = [
  { value: 'var', label: 'VAR (Value Added Reseller)' },
  { value: 'si', label: 'SI (System Integrator)' },
  { value: 'msp', label: 'MSP (Managed Service Provider)' },
  { value: 'referral', label: 'Referral Consultant' }
]

export default function PartnerRequest() {
  const colors = useColors()
  const { mode } = useThemeMode()

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Header */}
          <Stack spacing={2} textAlign="center">
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
              <Icon icon="mdi:handshake" color={colors.primary} width="16" height="16" />
              <Typography variant="caption" sx={{
                color: colors.primary,
                fontWeight: 600,
                letterSpacing: '0.05em'
              }}>
                PARTNERSHIP REQUEST
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Partnership Request Form
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Join our partner ecosystem and grow together with ESEC
            </Typography>
          </Stack>

          {/* Form */}
          <Paper sx={{
            p: { xs: 3, md: 4 },
            background: mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 1)',
            border: `1px solid ${colors.border.secondary}`,
          }}>
            <Stack spacing={3}>
              {/* Company & Contact Information Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Company & Contact Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Company Name"
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name of the Contact Person"
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Designation"
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Applying for"
                      fullWidth
                      required
                      select
                      variant="outlined"
                      helperText="Select the partnership type you're applying for"
                    >
                      {partnershipTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Work Email ID"
                      fullWidth
                      required
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Work Contact Number"
                      fullWidth
                      required
                      type="tel"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Location - City"
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Location - Country"
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Business Information Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Business Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Areas / Industries like to address"
                      fullWidth
                      multiline
                      minRows={2}
                      variant="outlined"
                      placeholder="List the industries or areas you specialize in..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="What Products/Solutions you offer currently - Software / Hardware"
                      fullWidth
                      multiline
                      minRows={3}
                      variant="outlined"
                      placeholder="Describe your current product and solution offerings..."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Customers you have now"
                      fullWidth
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Industries you operate now"
                      fullWidth
                      variant="outlined"
                      placeholder="e.g., Manufacturing, IT, Healthcare"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Total Number of Employees and Sales Team No."
                      fullWidth
                      variant="outlined"
                      helperText="Not applicable if you are an Independent Consultant"
                      placeholder="e.g., Total Employees: 50, Sales Team: 10"
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Submit Button */}
              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<Icon icon="mdi:send" />}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  Submit Partnership Request
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
