import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography, MenuItem, Alert, CircularProgress } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from '../utils/emailConfig'
import { Country, City } from 'country-state-city'

export default function PricingProposal() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const [isMSME, setIsMSME] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [selectedCountryCode, setSelectedCountryCode] = React.useState<string>('')

  const [formData, setFormData] = React.useState({
    companyName: '',
    udyamNumber: '',
    msmeProof: '',
    contactPerson: '',
    department: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    keySoftware: '',
    totalSoftware: '',
    totalUsers: '',
    timeline: ''
  })

  // Get all countries
  const countries = Country.getAllCountries()

  // Get cities for selected country
  const cities = selectedCountryCode ? City.getCitiesOfCountry(selectedCountryCode) : []

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const countryCode = e.target.value
    const country = countries.find(c => c.isoCode === countryCode)
    setSelectedCountryCode(countryCode)
    setFormData(prev => ({ ...prev, country: country?.name || '', city: '' }))
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, city: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        form_type: 'Pricing Proposal Request',
        company_name: formData.companyName,
        is_msme: isMSME,
        udyam_number: formData.udyamNumber,
        msme_proof: formData.msmeProof,
        contact_person: formData.contactPerson,
        department: formData.department,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        key_software: formData.keySoftware,
        total_software: formData.totalSoftware,
        total_users: formData.totalUsers,
        timeline: formData.timeline
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.PRICING_PROPOSAL,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus({ type: 'success', message: 'Thank you! Your proposal request has been submitted successfully. We will send you a customized proposal soon.' })
      // Reset form
      setFormData({
        companyName: '',
        udyamNumber: '',
        msmeProof: '',
        contactPerson: '',
        department: '',
        designation: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        keySoftware: '',
        totalSoftware: '',
        totalUsers: '',
        timeline: ''
      })
      setIsMSME('')
      setSelectedCountryCode('')
    } catch (error) {
      console.error('Email send error:', error)
      setStatus({ type: 'error', message: 'Failed to submit request. Please try again or contact us directly.' })
    } finally {
      setLoading(false)
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
            <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {status.type && (
                <Alert severity={status.type} onClose={() => setStatus({ type: null, message: '' })}>
                  {status.message}
                </Alert>
              )}
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
                      value={formData.companyName}
                      onChange={handleInputChange('companyName')}
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
                          value={formData.udyamNumber}
                          onChange={handleInputChange('udyamNumber')}
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
                          value={formData.msmeProof}
                          onChange={handleInputChange('msmeProof')}
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
                      value={formData.contactPerson}
                      onChange={handleInputChange('contactPerson')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Department / Division"
                      fullWidth
                      variant="outlined"
                      value={formData.department}
                      onChange={handleInputChange('department')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Designation"
                      fullWidth
                      required
                      variant="outlined"
                      value={formData.designation}
                      onChange={handleInputChange('designation')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Work Email ID"
                      fullWidth
                      required
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Work Contact No"
                      fullWidth
                      required
                      type="tel"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Location - Country"
                      fullWidth
                      required
                      select
                      variant="outlined"
                      value={selectedCountryCode}
                      onChange={handleCountryChange}
                      helperText="Select your country"
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.isoCode} value={country.isoCode}>
                          {country.flag} {country.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Location - City"
                      fullWidth
                      required
                      select={cities && cities.length > 0}
                      variant="outlined"
                      value={formData.city}
                      onChange={handleCityChange}
                      disabled={!selectedCountryCode}
                      helperText={!selectedCountryCode ? "Please select a country first" : "Select your city"}
                    >
                      {cities && cities.length > 0 ? (
                        cities.map((city) => (
                          <MenuItem key={city.name} value={city.name}>
                            {city.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem value="">No cities available</MenuItem>
                      )}
                    </TextField>
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
                      value={formData.keySoftware}
                      onChange={handleInputChange('keySoftware')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total No of Software Applications"
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={formData.totalSoftware}
                      onChange={handleInputChange('totalSoftware')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total No of Unique Users (Employees plus Contractors)"
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={formData.totalUsers}
                      onChange={handleInputChange('totalUsers')}
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
                      value={formData.timeline}
                      onChange={handleInputChange('timeline')}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Disclaimer */}
              <Box sx={{
                pt: 2,
                pb: 1,
                px: 2,
                borderRadius: 1.5,
                background: colors.background.surface,
                border: `1px solid ${colors.border.secondary}`
              }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <Icon icon="mdi:information-outline" color={colors.primary} width={18} height={18} style={{ marginTop: '2px' }} />
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.75rem' }}>
                    By submitting this form you are agreeing to receive additional communications from Nibana Solutions.
                  </Typography>
                </Stack>
              </Box>

              {/* Submit Button */}
              <Box sx={{ pt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Icon icon="mdi:send" />}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  {loading ? 'Submitting...' : 'Submit Proposal Request'}
                </Button>
              </Box>
            </Stack>
            </form>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
