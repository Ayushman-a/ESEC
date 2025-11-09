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
    images: ['/graphs/image_0.png', '/graphs/image_1.png', '/graphs/image_2.png','/graphs/image_3.png']
  },
  {
    key: 'drill-down',
    icon: 'mdi:chart-line',
    title: 'Drill Down Views',
    blurb: 'Detailed utilization trends by time period (7/15/30/90/180/365 days, YTD, Date Range) and by License Server(s), Heat Maps, License groups with comprehensive analytics.',
    images: ['/graphs/image_4.png', '/graphs/image_5.png', '/graphs/image_6.png', '/graphs/image_7.png']
  },
  {
    key: 'predictability',
    icon: 'mdi:crystal-ball',
    title: 'Predictability of Future Need',
    blurb: 'Comprehensive charts highlighting minimal software needed for future based on historical trends and usage patterns.',
    images: ['/graphs/image_8.png']
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
    <Box id="reports-dashboards" sx={{ scrollMarginTop: '100px', py: { xs: 4, sm: 6, md: 8 } }}>
      <Container>
        <Stack spacing={1} sx={{ mb: { xs: 3, sm: 4 }, px: { xs: 1, sm: 0 } }}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            Explore few Key Reports/Dashboards
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Click a report to reveal dashboard screenshots and detailed views.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} md={5}>
            <Paper>
              <List sx={{ py: { xs: 0.5, sm: 1 } }}>
                {FEATURES.map(f => (
                  <ListItemButton
                    key={f.key}
                    selected={active.key === f.key}
                    onClick={() => setActive(f)}
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 2, sm: 2 }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, sm: 44 } }}>
                      <Icon icon={f.icon} width={20} height={20} />
                    </ListItemIcon>
                    <ListItemText
                      primary={f.title}
                      primaryTypographyProps={{
                        sx: { fontSize: { xs: '0.875rem', sm: '1rem' } }
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                <Typography variant="h5" sx={{ fontSize: { xs: '1.125rem', sm: '1.5rem' } }}>
                  {active.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {active.blurb}
                </Typography>

                <Box sx={{
                  mt: 1,
                  position: 'relative',
                  minHeight: { xs: '250px', sm: '350px', md: '450px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}>
                  {/* Dashboard Image Container with Responsive Height */}
                  <Box sx={{
                    height: { xs: '250px', sm: '350px', md: '450px' },
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
                            left: { xs: 4, sm: 8 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: { xs: 32, sm: 36 },
                            height: { xs: 32, sm: 36 },
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
                          <Icon icon="mdi:chevron-left" color="white" width={20} height={20} />
                        </Box>
                        <Box
                          onClick={handleNextImage}
                          sx={{
                            position: 'absolute',
                            right: { xs: 4, sm: 8 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: { xs: 32, sm: 36 },
                            height: { xs: 32, sm: 36 },
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
                          <Icon icon="mdi:chevron-right" color="white" width={20} height={20} />
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
                      gap: { xs: 1, sm: 1.5 },
                      mt: { xs: 1.5, sm: 2 }
                    }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {currentImageIndex + 1} / {active.images.length}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 0.75 } }}>
                        {active.images.map((_, index) => (
                          <Box
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            sx={{
                              width: { xs: 7, sm: 8 },
                              height: { xs: 7, sm: 8 },
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
        <Box sx={{ mt: { xs: 4, sm: 6 }, textAlign: 'center', px: { xs: 2, sm: 0 } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            justifyContent="center"
            sx={{ flexWrap: 'wrap', gap: { xs: 1.5, sm: 2 } }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<Icon icon="mdi:play-circle" width={18} height={18} />}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Demo/Sales Request
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/pricing-proposal')}
              endIcon={<Icon icon="mdi:file-document-edit" width={18} height={18} />}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Proposal Request
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/pricing')}
              endIcon={<Icon icon="mdi:currency-usd" width={18} height={18} />}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
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
              top: { xs: 8, sm: 16 },
              right: { xs: 8, sm: 16 },
              width: { xs: 36, sm: 48 },
              height: { xs: 36, sm: 48 },
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
            <Icon icon="mdi:close" color="white" width={24} height={24} />
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
                  left: { xs: 8, sm: 32 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
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
                <Icon icon="mdi:chevron-left" color="white" width={24} height={24} />
              </Box>
              <Box
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
                sx={{
                  position: 'absolute',
                  right: { xs: 8, sm: 32 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
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
                <Icon icon="mdi:chevron-right" color="white" width={24} height={24} />
              </Box>
            </>
          )}

          {/* Image Counter in Lightbox */}
          <Box sx={{
            position: 'absolute',
            bottom: { xs: 16, sm: 32 },
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 1, sm: 2 },
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: 2
          }}>
            <Typography variant="body2" color="white" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
              {currentImageIndex + 1} / {active.images.length}
            </Typography>
            {active.images.length > 1 && (
              <Box sx={{ display: 'flex', gap: { xs: 0.75, sm: 1 } }}>
                {active.images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: { xs: 8, sm: 10 },
                      height: { xs: 8, sm: 10 },
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
