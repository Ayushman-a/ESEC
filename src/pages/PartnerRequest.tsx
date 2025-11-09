import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography, MenuItem, Alert, CircularProgress } from '@mui/material'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from '../utils/emailConfig'
import { Country, City } from 'country-state-city'

const partnershipTypes = [
  { value: 'var', label: 'VAR (Value Added Reseller)' },
  { value: 'si', label: 'SI (System Integrator)' },
  { value: 'msp', label: 'MSP (Managed Service Provider)' },
  { value: 'referral', label: 'Referral Consultant' }
]

export default function PartnerRequest() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [selectedCountryCode, setSelectedCountryCode] = React.useState<string>('')

  const [formData, setFormData] = React.useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    partnershipType: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    industries: '',
    currentProducts: '',
    totalCustomers: '',
    industriesOperating: '',
    employees: ''
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
        form_type: 'Partnership Request',
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        designation: formData.designation,
        partnership_type: formData.partnershipType,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        industries: formData.industries,
        current_products: formData.currentProducts,
        total_customers: formData.totalCustomers,
        industries_operating: formData.industriesOperating,
        employees: formData.employees
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.PARTNER_REQUEST,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus({ type: 'success', message: 'Thank you! Your partnership request has been submitted successfully. We will review and contact you soon.' })
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        designation: '',
        partnershipType: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        industries: '',
        currentProducts: '',
        totalCustomers: '',
        industriesOperating: '',
        employees: ''
      })
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
            <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {status.type && (
                <Alert severity={status.type} onClose={() => setStatus({ type: null, message: '' })}>
                  {status.message}
                </Alert>
              )}
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
                      label="Designation"
                      fullWidth
                      required
                      variant="outlined"
                      value={formData.designation}
                      onChange={handleInputChange('designation')}
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
                      value={formData.partnershipType}
                      onChange={handleInputChange('partnershipType')}
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
                      value={formData.industries}
                      onChange={handleInputChange('industries')}
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
                      value={formData.currentProducts}
                      onChange={handleInputChange('currentProducts')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Total Number of Customers you have now"
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={formData.totalCustomers}
                      onChange={handleInputChange('totalCustomers')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Industries you operate now"
                      fullWidth
                      variant="outlined"
                      placeholder="e.g., Manufacturing, IT, Healthcare"
                      value={formData.industriesOperating}
                      onChange={handleInputChange('industriesOperating')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Total Number of Employees and Sales Team No."
                      fullWidth
                      variant="outlined"
                      helperText="Not applicable if you are an Independent Consultant"
                      placeholder="e.g., Total Employees: 50, Sales Team: 10"
                      value={formData.employees}
                      onChange={handleInputChange('employees')}
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
                  {loading ? 'Submitting...' : 'Submit Partnership Request'}
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
