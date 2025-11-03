import * as React from 'react'
import { Fab, Zoom } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'

export default function BackToTopButton() {
  const [showButton, setShowButton] = React.useState(false)
  const colors = useColors()

  React.useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 200px
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Zoom in={showButton}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        aria-label="Back to top"
        sx={{
          position: 'fixed',
          bottom: 90,
          right: 28,
          bgcolor: colors.primary,
          color: 'white',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          border: '2px solid rgba(255,255,255,0.2)',
          '&:hover': {
            bgcolor: colors.primary,
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Icon icon="mdi:arrow-up" width="24" height="24" />
      </Fab>
    </Zoom>
  )
}
