import * as React from 'react'
import { Box, Button, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Modal, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useNavigate } from 'react-router-dom'

type Feature = {
  key: string
  icon: string
  title: string
  blurb: string
  images: string[]
}

const FEATURES: Feature[] = [
  {
    key: 'cockpit-dashboard',
    icon: 'mdi:view-dashboard',
    title: 'Realtime Cockpit View - Summary Dashboard',
    blurb: 'Utilization summary with Pie Chart/Bar/Grid view toggle options. Customizable per User/Enterprise/Division/Department/Project/Unit/Reservation Group/Country. All types of licenses viewable in one dashboard by time period.',
    images: ['/graphs/image_0.png', '/graphs/image_1.png', '/graphs/image_2.png']
  },
  {
    key: 'drill-down',
    icon: 'mdi:chart-line',
    title: 'Drill Down Views',
    blurb: 'Detailed utilization trends by time period (7/15/30/90/180/365 days, YTD, Date Range) and by License Server(s), Heat Maps, License groups with comprehensive analytics.',
    images: ['/graphs/image_3.png', '/graphs/image_4.png', '/graphs/image_5.png']
  },
  {
    key: 'predictability',
    icon: 'mdi:crystal-ball',
    title: 'Predictability of Future Need',
    blurb: 'Comprehensive charts highlighting minimal software needed for future based on historical trends and usage patterns.',
    images: ['/graphs/image_6.png']
  },
]

export default function FeatureShowcase() {
  const [active, setActive] = React.useState(FEATURES[0])
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)
  const colors = useColors()
  const navigate = useNavigate()

  // Reset image index when active feature changes
  React.useEffect(() => {
    setCurrentImageIndex(0)
  }, [active.key])

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % active.images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? active.images.length - 1 : prev - 1)
  }

  const handleOpenLightbox = () => {
    setIsLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false)
  }

  // Handle keyboard navigation in lightbox
  React.useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox()
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage()
      } else if (e.key === 'ArrowRight') {
        handleNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, active.images.length])

  return (
    <Box >
      <Container>
        <Stack spacing={1} sx={{ mb: 0 }}>
          <Typography variant="h3">Explore few Key Reports/Dashboards</Typography>
          <Typography color="text.secondary">Click a report to reveal dashboard screenshots and detailed views.</Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper>
              <List>
                {FEATURES.map(f => (
                  <ListItemButton
                    key={f.key}
                    selected={active.key === f.key}
                    onClick={() => setActive(f)}
                  >
                    <ListItemIcon>
                      <Icon icon={f.icon} width={22} height={22} />
                    </ListItemIcon>
                    <ListItemText primary={f.title} />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Stack spacing={2}>
                <Typography variant="h5">{active.title}</Typography>
                <Typography color="text.secondary">{active.blurb}</Typography>

                <Box sx={{
                  mt: 1,
                  position: 'relative',
                  minHeight: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}>
                  {/* Dashboard Image Container with Fixed Height */}
                  <Box sx={{
                    height: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    border: `1px solid ${colors.border.secondary}`,
                    boxShadow: colors.shadow.subtle,
                    bgcolor: colors.background.surface,
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <Box
                      component="img"
                      src={active.images[currentImageIndex]}
                      alt={`${active.title} - Image ${currentImageIndex + 1}`}
                      onClick={handleOpenLightbox}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        cursor: 'zoom-in',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.02)'
                        }
                      }}
                    />

                    {/* Navigation Arrows */}
                    {active.images.length > 1 && (
                      <>
                        <Box
                          onClick={handlePrevImage}
                          sx={{
                            position: 'absolute',
                            left: 8,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            zIndex: 10,
                            '&:hover': {
                              background: 'rgba(0, 0, 0, 0.8)',
                              transform: 'translateY(-50%) scale(1.1)'
                            }
                          }}
                        >
                          <Icon icon="mdi:chevron-left" color="white" width="24" height="24" />
                        </Box>
                        <Box
                          onClick={handleNextImage}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            zIndex: 10,
                            '&:hover': {
                              background: 'rgba(0, 0, 0, 0.8)',
                              transform: 'translateY(-50%) scale(1.1)'
                            }
                          }}
                        >
                          <Icon icon="mdi:chevron-right" color="white" width="24" height="24" />
                        </Box>
                      </>
                    )}
                  </Box>

                  {/* Image Counter and Dots */}
                  {active.images.length > 1 && (
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5,
                      mt: 2
                    }}>
                      <Typography variant="caption" color="text.secondary">
                        {currentImageIndex + 1} / {active.images.length}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.75 }}>
                        {active.images.map((_, index) => (
                          <Box
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: index === currentImageIndex ? colors.primary : colors.border.secondary,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'scale(1.2)',
                                background: colors.primary
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* CTA Buttons */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<Icon icon="mdi:play-circle" />}
              sx={{ px: 4, py: 1.5 }}
            >
              Demo/Sales Request
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/pricing-proposal')}
              endIcon={<Icon icon="mdi:file-document-edit" />}
              sx={{ px: 4, py: 1.5 }}
            >
              Proposal Request
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/pricing')}
              endIcon={<Icon icon="mdi:currency-usd" />}
              sx={{ px: 4, py: 1.5 }}
            >
              View Pricing
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        open={isLightboxOpen}
        onClose={handleCloseLightbox}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.9)'
        }}
      >
        <Box sx={{
          position: 'relative',
          width: '90vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: 'none'
        }}>
          {/* Close Button */}
          <Box
            onClick={handleCloseLightbox}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1000,
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <Icon icon="mdi:close" color="white" width="32" height="32" />
          </Box>

          {/* Main Image */}
          <Box
            component="img"
            src={active.images[currentImageIndex]}
            alt={`${active.title} - Image ${currentImageIndex + 1}`}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              userSelect: 'none'
            }}
          />

          {/* Navigation Arrows in Lightbox */}
          {active.images.length > 1 && (
            <>
              <Box
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevImage()
                }}
                sx={{
                  position: 'absolute',
                  left: 32,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)'
                  }
                }}
              >
                <Icon icon="mdi:chevron-left" color="white" width="32" height="32" />
              </Box>
              <Box
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
                sx={{
                  position: 'absolute',
                  right: 32,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)'
                  }
                }}
              >
                <Icon icon="mdi:chevron-right" color="white" width="32" height="32" />
              </Box>
            </>
          )}

          {/* Image Counter in Lightbox */}
          <Box sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            px: 3,
            py: 1.5,
            borderRadius: 2
          }}>
            <Typography variant="body2" color="white">
              {currentImageIndex + 1} / {active.images.length}
            </Typography>
            {active.images.length > 1 && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {active.images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.3)',
                        background: 'white'
                      }
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
