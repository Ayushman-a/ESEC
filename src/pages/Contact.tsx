import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography, Alert, CircularProgress, MenuItem } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from '../utils/emailConfig'
import { Country, City } from 'country-state-city'

export default function Contact() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const [requestType, setRequestType] = React.useState<string>('Demo')
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [selectedCountryCode, setSelectedCountryCode] = React.useState<string>('')

  const [formData, setFormData] = React.useState({
    companyName: '',
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
    demoDates: ''
  })

  const handleRequestTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    if (newType !== null) {
      setRequestType(newType)
    }
  }

  // Get all countries
  const countries = Country.getAllCountries()

  // Get cities for selected country
  const cities = City.getCitiesOfCountry(selectedCountryCode) || []

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
        form_type: 'Demo/Sales Request',
        request_type: requestType,
        company_name: formData.companyName,
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
        demo_dates: formData.demoDates
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.CONTACT,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus({ type: 'success', message: 'Thank you! Your demo request has been submitted successfully. We will contact you soon.' })
      // Reset form
      setFormData({
        companyName: '',
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
        demoDates: ''
      })
      setRequestType('Demo')
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
                      required
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
                      label="Work Contact Number"
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
                      select={cities.length > 0}
                      variant="outlined"
                      value={formData.city}
                      onChange={handleCityChange}
                      disabled={!selectedCountryCode}
                      helperText={!selectedCountryCode ? "Please select a country first" : "Select your city"}
                    >
                      {cities.length > 0 ? (
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
                      value={formData.keySoftware}
                      onChange={handleInputChange('keySoftware')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Software Applications"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                      value={formData.totalSoftware}
                      onChange={handleInputChange('totalSoftware')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Unique Users (Employees plus Contractors)"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                      value={formData.totalUsers}
                      onChange={handleInputChange('totalUsers')}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Demo Scheduling / Sales Message Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: colors.primary }}>
                  {requestType === 'Demo' ? 'Demo Scheduling' : 'Sales Inquiry'}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {requestType === 'Demo' ? (
                      <TextField
                        label="Demo dates - Please mention 2-3 alternate dates and time"
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        variant="outlined"
                        placeholder="Please provide 2-3 alternate dates and preferred times for the demo..."
                        helperText="Please note demo can be given online between 10 am to 10 pm, India time (IST)"
                        value={formData.demoDates}
                        onChange={handleInputChange('demoDates')}
                      />
                    ) : (
                      <TextField
                        label="Your Message"
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        variant="outlined"
                        placeholder="Please tell us about your requirements, questions, or how we can help you..."
                        helperText="Our sales team will review your message and contact you within 24-48 business hours"
                        value={formData.demoDates}
                        onChange={handleInputChange('demoDates')}
                      />
                    )}
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
                  {loading ? 'Submitting...' : `Submit ${requestType} Request`}
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
