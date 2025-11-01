import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography, MenuItem } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'

export default function PricingProposal() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const [isMSME, setIsMSME] = React.useState('')

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
              <Icon icon="mdi:file-document-edit" color={colors.primary} width="16" height="16" />
              <Typography variant="caption" sx={{
                color: colors.primary,
                fontWeight: 600,
                letterSpacing: '0.05em'
              }}>
                PRICING PROPOSAL REQUEST
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Company Details for Proposal
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Share your details and we'll provide a customized pricing proposal
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
                  <Grid item xs={12}>
                    <TextField
                      label="MSME registered company"
                      fullWidth
                      required
                      select
                      variant="outlined"
                      value={isMSME}
                      onChange={(e) => setIsMSME(e.target.value)}
                      helperText="Are you a registered MSME/SME company?"
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </TextField>
                  </Grid>
                  {isMSME === 'yes' && (
                    <>
                      <Grid item xs={12}>
                        <TextField
                          label="UDYAM Registration number (for Indian companies)"
                          fullWidth
                          variant="outlined"
                          helperText="Enter your UDYAM registration number if you're an Indian company"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="For Non-Indian companies - Local Certified proof of being an MSME"
                          fullWidth
                          multiline
                          minRows={2}
                          variant="outlined"
                          helperText="Please describe your MSME certification/proof for non-Indian companies"
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
              </Box>

              {/* Contact Information Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Contact Information
                </Typography>
                <Grid container spacing={2}>
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
                      label="Work Contact No"
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

              {/* Software & User Details Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Software & User Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Key Software to be Optimized - List of Engineering and Non-Engineering Software"
                      fullWidth
                      multiline
                      minRows={4}
                      variant="outlined"
                      placeholder="Please list the key software applications you want to optimize..."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total No of Software Applications"
                      fullWidth
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total No of Unique Users (Employees plus Contractors)"
                      fullWidth
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Project Timeline Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  Project Timeline
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Timeframe of Purchase and Start of the Project"
                      fullWidth
                      multiline
                      minRows={2}
                      variant="outlined"
                      placeholder="e.g., Planning to purchase in Q1 2025 and start implementation in Q2 2025"
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
                  Submit Proposal Request
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
