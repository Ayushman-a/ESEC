import { useState, useEffect } from 'react'
import { Box, Button, Paper, Stack, Typography, IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useTranslation } from 'react-i18next'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const colors = useColors()
  const { t } = useTranslation()

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        p: { xs: 2, sm: 3 },
        animation: 'slideUp 0.5s ease-out',
        '@keyframes slideUp': {
          from: {
            transform: 'translateY(100%)',
            opacity: 0
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      }}
    >
      <Paper
        elevation={8}
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          p: { xs: 2.5, sm: 3 },
          background: colors.background.paper,
          border: `2px solid ${colors.border.primary}`,
          borderRadius: 2,
          boxShadow: '0 -4px 20px rgba(0,0,0,0.15)'
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 3 }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ flex: 1 }}>
            <Box
              sx={{
                minWidth: 40,
                height: 40,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`,
                border: `1px solid ${colors.border.primary}`,
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}
            >
              <Icon icon="mdi:cookie" color={colors.primary} width="24" height="24" />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                {t('cookie.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {t('cookie.description')}
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={2}
            sx={{
              width: { xs: '100%', md: 'auto' },
              flexShrink: 0
            }}
          >
            <Button
              variant="outlined"
              onClick={handleDecline}
              sx={{
                flex: { xs: 1, sm: 0 },
                minWidth: { sm: 120 },
                py: 1.5,
                borderColor: colors.border.primary,
                color: colors.text.primary,
                '&:hover': {
                  borderColor: colors.primary,
                  background: colors.interactive.backgroundSubtle
                }
              }}
            >
              {t('cookie.decline')}
            </Button>
            <Button
              variant="contained"
              onClick={handleAccept}
              startIcon={<Icon icon="mdi:check" />}
              sx={{
                flex: { xs: 1, sm: 0 },
                minWidth: { sm: 140 },
                py: 1.5,
                fontWeight: 600
              }}
            >
              {t('cookie.accept')}
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}
