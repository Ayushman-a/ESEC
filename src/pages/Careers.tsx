import { Box, Container, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'

export default function Careers() {
  const colors = useColors()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated gradient background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, ${colors.primary}15 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${colors.secondary}15 0%, transparent 50%)
          `,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.3 },
            '50%': { opacity: 0.6 }
          }
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 8 }}>
        {/* Icon */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
            border: `2px solid ${colors.primary}40`,
            mb: 4,
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            }
          }}
        >
          <Icon
            icon="mdi:briefcase-outline"
            style={{
              fontSize: '60px',
              color: colors.primary
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 700,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            letterSpacing: '-0.02em'
          }}
        >
          Coming Soon
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 4,
            fontWeight: 300,
            fontSize: { xs: '1.25rem', md: '1.5rem' }
          }}
        >
          Our Careers Page is Under Construction
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: { xs: '1rem', md: '1.125rem' }
          }}
        >
          We're building something exciting. Check back soon for career opportunities
          to join our innovative team and help shape the future of enterprise solutions.
        </Typography>

        {/* Decorative dots */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            mt: 6
          }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: colors.primary,
                animation: 'bounce 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
                '@keyframes bounce': {
                  '0%, 80%, 100%': { transform: 'scale(0)' },
                  '40%': { transform: 'scale(1)' }
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
