import * as React from 'react'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../theme/useColors'

export default function CTA() {
  const navigate = useNavigate()
  const colors = useColors()

  return (
    <Container sx={{ pb: { xs: 8, md: 12 } }}>
      <Paper sx={{
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        background: colors.gradient.subtle,
        border: `1px solid ${colors.border.primary}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
          backgroundSize: '200% 100%',
          animation: 'gradientShift 3s ease infinite',
        }
      }}>
        <Stack spacing={3} alignItems="center">
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Icon icon="mdi:security" color={colors.primary} width="16" height="16" />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              GET STARTED TODAY
            </Typography>
          </Box>

          <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, maxWidth: 700 }}>
            Ready to Secure Your Digital Assets?
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
            Join hundreds of organizations protecting their infrastructure with enterprise-grade cybersecurity.
          </Typography>

          <Stack direction={{ xs:'column', sm:'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Icon icon="mdi:shield-check" />}
              onClick={() => navigate('/pricing')}
              sx={{ px: 4, py: 1.5 }}
            >
              Get Protected Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Icon icon="mdi:calendar-check" />}
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5 }}
            >
              Schedule Assessment
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  )
}
