import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'

export default function Contact() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const [requestType, setRequestType] = React.useState<string>('Demo')

  const handleRequestTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    if (newType !== null) {
      setRequestType(newType)
    }
  }

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
                Demo/Sales Request
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Company Details and Deliverables Expected
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Tell us about your organization and we'll schedule a personalized demo
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
              {/* Company Information Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Company Information
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
                      label="Department / Division"
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
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        Request Type *
                      </Typography>
                      <ToggleButtonGroup
                        value={requestType}
                        exclusive
                        onChange={handleRequestTypeChange}
                        aria-label="request type"
                        size="small"
                        sx={{
                          '& .MuiToggleButton-root': {
                            px: 3,
                            py: 0.75,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&.Mui-selected': {
                              backgroundColor: colors.primary,
                              color: 'white',
                              '&:hover': {
                                backgroundColor: colors.primary,
                              }
                            }
                          }
                        }}
                      >
                        <ToggleButton value="Demo" aria-label="demo">
                          Demo
                        </ToggleButton>
                        <ToggleButton value="Sales" aria-label="sales">
                          Sales
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Software & User Details Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Software & User Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Key Software to be Optimized - List of Engineering and Non-Engineering"
                      fullWidth
                      required
                      multiline
                      minRows={3}
                      variant="outlined"
                      placeholder="Please list the key software applications you want to optimize..."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Software Applications"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Unique Users (Employees plus Contractors)"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Demo Scheduling Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Demo Scheduling
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Demo dates - Please mention 2-3 alternate dates and time"
                      fullWidth
                      required
                      multiline
                      minRows={4}
                      variant="outlined"
                      placeholder="Please provide 2-3 alternate dates and preferred times for the demo..."
                      helperText="Please note demo can be given online between 10 am to 10 pm, India time (IST)"
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
                  Submit Demo Request
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
