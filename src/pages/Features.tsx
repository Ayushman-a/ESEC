import * as React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography, Chip, Dialog, DialogContent, IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useThemeMode } from '../ThemeContext'
import { useNavigate, useLocation } from 'react-router-dom'

const features = [
  {
    id: 'sam',
    icon: 'mdi:package-variant',
    title: 'Software Asset Management',
    subtitle: 'Complete visibility and control over your software assets',
    description: 'ESEC provides comprehensive software asset management with real-time dashboards, detailed utilization tracking, and predictive analytics. Monitor all types of licenses (Concurrent, Subscription, Cloud, Named, Node Locked) from a single unified platform.',
    capabilities: [
      {
        icon: 'mdi:view-dashboard',
        title: 'Realtime Cockpit View - Summary Dashboard',
        description: 'Utilization summary with Pie Chart/Bar/Grid view toggle options. Customizable per User/Enterprise/Division/Department/Project/Unit/Reservation Group/Country. All types of licenses viewable in one dashboard by time period.',
        images: ['/graphs/image_0.png', '/graphs/image_1.png', '/graphs/image_2.png']
      },
      {
        icon: 'mdi:chart-line',
        title: 'Drill Down Views',
        description: 'Detailed utilization trends by time period (7/15/30/90/180/365 days, YTD, Date Range) and by License Server(s), Heat Maps, License groups with comprehensive analytics.',
        images: ['/graphs/image_3.png', '/graphs/image_4.png', '/graphs/image_5.png']
      },
      {
        icon: 'mdi:file-alert',
        title: 'Denials List by Software',
        description: 'Track both true denials (never got licenses) and actual denial lists to understand license availability issues and optimize allocation.'
      },
      {
        icon: 'mdi:refresh-auto',
        title: 'Release and Suspend Idle Licenses',
        description: 'End point agent module configurable by software at pre-defined time frames for automatic release - Improves productivity and license availability.'
      },
      {
        icon: 'mdi:clock-check',
        title: 'Actual Usage Reports',
        description: 'Shows actual hours/minutes used vs locking the licenses. Compare real usage against license checkout time for accurate utilization metrics.'
      },
      {
        icon: 'mdi:account-clock',
        title: 'Real-time License Usage by Users',
        description: 'Live tracking of who is using which licenses right now. Helps in reallocation decisions and resource management.'
      },
      {
        icon: 'mdi:merge',
        title: 'Combined Similar Licenses',
        description: 'Performance report consolidating similar licenses across different servers for unified visibility and optimization.'
      },
      {
        icon: 'mdi:cloud-check',
        title: 'Real-time Cloud License Availability',
        description: 'Open portal showing on-premise and cloud license availability for all users with real-time status updates.'
      },
      {
        icon: 'mdi:cloud-sync',
        title: 'Cloud License Monitoring',
        description: 'Comprehensive monitoring for Autodesk, Aveva, Hexagon, Altium, Bentley, and other major cloud license providers.'
      },
      {
        icon: 'mdi:server-network',
        title: 'HPC Monitoring',
        description: 'High Performance Compute environment integration with comprehensive reports. Customizable based on OS to optimize jobs, hardware, and software usage.'
      },
      {
        icon: 'mdi:crystal-ball',
        title: 'Predictability of Future Need',
        description: 'Comprehensive charts highlighting minimal software needed for future based on historical trends and usage patterns.',
        images: ['/graphs/image_6.png']
      },
      {
        icon: 'mdi:bookmark-multiple',
        title: 'My Reports',
        description: 'Save customized reports section for various stakeholders. Create and save personalized views for regular monitoring and analysis.'
      }
    ],
    benefits: [
      'Reduce software costs by 30-50% through optimization',
      'Prevent license denials with predictive analytics',
      'Automatic idle license recovery improves availability',
      'Support all major license types in unified dashboard'
    ],
    color: '#4CAF50'
  },
  {
    id: 'compliance',
    icon: 'mdi:shield-check',
    title: 'Compliance & Audit',
    subtitle: 'Stay audit-ready with automated compliance tracking',
    description: 'Maintain compliance with comprehensive software and hardware inventory tracking. ESEC provides detailed compliance reports, unauthorized software detection, and complete environment monitoring to keep your organization audit-ready at all times.',
    capabilities: [
      {
        icon: 'mdi:clipboard-list',
        title: 'Software and Hardware Inventory List',
        description: 'Full report on list of software installed in each system, version number, purchase and expiry dates, number of licenses, licenses consumed, cores used, and complete hardware specifications.'
      },
      {
        icon: 'mdi:shield-alert',
        title: 'Unauthorized Licenses Tracking',
        description: 'Search for unauthorized software with wildcard patterns, extensions, and comprehensive filtering. Detect and track non-compliant installations across the organization.'
      },
      {
        icon: 'mdi:file-document-multiple',
        title: 'Comprehensive Reports',
        description: 'Reports are customizable with multiple parameters tracking. Create detailed compliance documentation with flexible filtering and grouping options.'
      },
      {
        icon: 'mdi:cog-outline',
        title: 'Tracking of Environment Variables, Services, URLs',
        description: 'Comprehensive reports tracking environment variables, system services, URLs, and configurations. All reports are customizable to meet specific audit requirements.'
      }
    ],
    benefits: [
      'Be audit-ready 24/7 with comprehensive inventory',
      'Detect and eliminate unauthorized software',
      'Reduce audit preparation time by 90%',
      'Customizable compliance reports for any requirement'
    ],
    color: '#2196F3'
  },
  {
    id: 'project',
    icon: 'mdi:briefcase',
    title: 'Project Management & Costing',
    subtitle: 'Comprehensive project tracking and cost management',
    description: 'Integrate software usage with project management and costing. ESEC provides timesheet integration, resource management, estimate tracking, and comprehensive costing capabilities for accurate project billing and resource optimization.',
    capabilities: [
      {
        icon: 'mdi:clock-check',
        title: 'Timesheet Integration',
        description: 'Compare actual software usage against timesheet inputs for reviews and approvals. Validate time entries with actual application usage data for accurate billing.'
      },
      {
        icon: 'mdi:account-group',
        title: 'Resource Management',
        description: 'Comprehensive sheet to know availability of resources, allocation of resources by projects. Track resource utilization and optimize team assignments.'
      },
      {
        icon: 'mdi:file-chart',
        title: 'Estimate Sheet Integration',
        description: 'Comprehensive reports indicating actual vs balance vs estimate hours by software. Track project progress against original estimates and identify variances early.'
      },
      {
        icon: 'mdi:calculator',
        title: 'Costing',
        description: 'Customized utilization reports by integrating with costing module for internal and external billing. Accurate cost allocation based on actual software usage per project.'
      }
    ],
    benefits: [
      'Accurate project costing with usage-based billing',
      'Improved resource allocation and availability tracking',
      'Real-time estimate vs actuals comparison',
      'Seamless integration with timesheet systems'
    ],
    color: '#FF9800'
  },
  {
    id: 'alerts',
    icon: 'mdi:bell-ring',
    title: 'Alerts, Customization and Integrations',
    subtitle: 'Automated alerts and seamless system integrations',
    description: 'Stay informed with scheduled email alerts, integrate with enterprise systems through REST APIs, and get rapid customization for your specific needs. ESEC provides flexible alerting and integration capabilities to fit into your existing infrastructure.',
    capabilities: [
      {
        icon: 'mdi:email-alert',
        title: 'Scheduled Email Alerts',
        description: 'Automated email alerts with customized reports sent regularly to stakeholders at scheduled time periods. Configure alerts for specific events like utilization crossing 90% or below 60%, license server downtime, expiry of licenses, and more.'
      },
      {
        icon: 'mdi:connection',
        title: 'Integration with LDAP, HR Systems, ERP, Power BI, ITAM, etc.',
        description: 'Through REST APIs, integrate with various internal systems to send and receive data. Publish reports in Power BI, sync with HR systems, connect to ERP platforms, and integrate with LDAP for user management.'
      },
      {
        icon: 'mdi:speedometer',
        title: 'Rapid Customized Reports',
        description: 'Extensive data is captured and various reports/formats can be easily customized. Most customization requests have a turnaround period of about 2-3 days. Flexible reporting to meet your specific business needs.'
      }
    ],
    benefits: [
      'Proactive monitoring with customizable alerts',
      'Seamless integration with existing enterprise systems',
      'Fast turnaround for custom report development',
      'Flexible REST API for custom integrations'
    ],
    color: '#9C27B0'
  }
]

export default function Features() {
  const colors = useColors()
  const { mode } = useThemeMode()
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to section based on hash
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  // Image modal state
  const [imageModal, setImageModal] = React.useState<{
    open: boolean
    images: string[]
    currentIndex: number
    title: string
  }>({
    open: false,
    images: [],
    currentIndex: 0,
    title: ''
  })

  const openImageModal = (images: string[], title: string) => {
    setImageModal({ open: true, images, currentIndex: 0, title })
  }

  const closeImageModal = () => {
    setImageModal({ ...imageModal, open: false })
  }

  const nextImage = () => {
    setImageModal({
      ...imageModal,
      currentIndex: (imageModal.currentIndex + 1) % imageModal.images.length
    })
  }

  const prevImage = () => {
    setImageModal({
      ...imageModal,
      currentIndex: imageModal.currentIndex === 0 ? imageModal.images.length - 1 : imageModal.currentIndex - 1
    })
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Container sx={{ mb: 8 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box sx={{
            px: 2.5,
            py: 1,
            borderRadius: 10,
            border: `1px solid ${colors.border.primary}`,
            background: colors.interactive.backgroundSubtle,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}>
            <Icon
              icon="mdi:star-four-points"
              color={colors.primary}
              width="16"
              height="16"
            />
            <Typography variant="caption" sx={{
              color: colors.primary,
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              FEATURES
            </Typography>
          </Box>

          <Typography variant="h2" sx={{
            fontSize: { xs: 28, sm: 36, md: 52 },
            fontWeight: 800,
            background: colors.gradient.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            px: { xs: 2, sm: 0 }
          }}>
            Powerful Features for<br />Complete Control
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            Everything you need to optimize software assets, manage licenses, ensure compliance, and boost productivity
          </Typography>
        </Stack>

        {/* Quick Navigation */}
        <Box sx={{ mt: 6, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {features.map((feature) => (
            <Chip
              key={feature.id}
              label={feature.title}
              onClick={() => {
                const element = document.getElementById(feature.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              icon={<Icon icon={feature.icon} />}
              sx={{
                px: 2,
                py: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
                background: colors.background.paper,
                border: `1px solid ${colors.border.secondary}`,
                '&:hover': {
                  background: colors.interactive.background,
                  borderColor: colors.primary,
                }
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Introduction Section */}
      <Container id="introduction" sx={{ mt: 10, mb: 8, scrollMarginTop: '100px' }}>
        <Paper sx={{
          p: { xs: 4, md: 6 },
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
            : 'linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(0, 151, 167, 0.05) 100%)',
          border: `1px solid ${colors.border.primary}`,
          borderRadius: 3,
        }}>
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box sx={{
                width: 56,
                height: 56,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.primary}10 100%)`,
                border: `2px solid ${colors.primary}`,
                display: 'grid',
                placeItems: 'center'
              }}>
                <Icon icon="mdi:information" width="28" height="28" color={colors.primary} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800 }}>
                ESEC - Introduction
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: colors.text.primary }}>
              ESEC is a <strong>Predictive Analytics Software Solution developed to Optimize Software assets on a continuous basis</strong>. ESEC collects data from license servers, endpoints, cloud, and subscription license servers, among others, and generates real-time reports, dashboards, and alerts. All ESEC data and associated reports or dashboards are securely stored onsite, within the customer’s environment, and access is restricted to authorized personnel.

            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: colors.text.primary }}>
            ESEC delivers a wide array of reports and dashboards, alongside customized alerts, enabling organizations to manage licenses efficiently, monitor utilization trends, and make informed decisions in a timely manner. Utilizing historical data, ESEC can forecast future license requirements, enhancing proactive management.
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: colors.text.primary }}>
            ESEC’s functionality is organized into four main categories, offering comprehensive solutions to customers, regardless of user count. 
            </Typography>

            <Box sx={{
              mt: 2,
              p: 3,
              borderRadius: 2,
              background: mode === 'dark'
                ? 'rgba(156, 39, 176, 0.1)'
                : 'rgba(156, 39, 176, 0.08)',
              border: `1px solid rgba(156, 39, 176, 0.3)`,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Icon icon="mdi:sparkles" width="28" height="28" color="#9C27B0" />
              <Typography variant="body1" sx={{ fontSize: '1.05rem', fontWeight: 600, color: colors.text.primary }}>
              Additionally, the ESEC team is working on introducing advanced AI capabilities in the coming months.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <Box
          key={feature.id}
          id={feature.id}
          sx={{
            py: 8,
            scrollMarginTop: '100px',
            background: index % 2 === 1
              ? colors.background.surface
              : 'transparent',
            borderTop: index % 2 === 1
              ? `1px solid ${colors.border.subtle}`
              : 'none',
            borderBottom: index % 2 === 1
              ? `1px solid ${colors.border.subtle}`
              : 'none',
          }}
        >
          <Container>
            {/* Feature Header */}
            <Stack spacing={3} sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 3,
                  background: `${feature.color}20`,
                  border: `2px solid ${feature.color}`,
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <Icon
                    icon={feature.icon}
                    width="36"
                    height="36"
                    color={feature.color}
                  />
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {feature.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.1rem' },
                  lineHeight: 1.8,
                  maxWidth: 900,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  px: { xs: 2, sm: 0 }
                }}
              >
                {feature.description}
              </Typography>
            </Stack>

            {/* Capabilities Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {feature.capabilities.map((capability, idx) => (
                <Grid key={idx} item xs={12} md={6}>
                  <Paper sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: mode === 'dark'
                        ? `0 8px 24px ${feature.color}26`
                        : `0 8px 24px ${feature.color}20`,
                    }
                  }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: `${feature.color}20`,
                        border: `1px solid ${feature.color}40`,
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0
                      }}>
                        <Icon
                          icon={capability.icon}
                          width="20"
                          height="20"
                          color={feature.color}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {capability.title}
                          </Typography>
                          {capability.images && capability.images.length > 0 && (
                            <IconButton
                              size="small"
                              onClick={() => openImageModal(capability.images!, capability.title)}
                              sx={{
                                color: feature.color,
                                background: `${feature.color}15`,
                                border: `1px solid ${feature.color}40`,
                                '&:hover': {
                                  background: `${feature.color}25`,
                                  transform: 'scale(1.1)'
                                }
                              }}
                            >
                              <Icon icon="mdi:image-multiple" width="18" height="18" />
                            </IconButton>
                          )}
                        </Stack>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.7,
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            hyphens: 'auto'
                          }}
                        >
                          {capability.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Benefits */}
            <Paper sx={{
              p: 4,
              background: mode === 'dark'
                ? `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}05 100%)`
                : `linear-gradient(135deg, ${feature.color}08 0%, ${feature.color}03 100%)`,
              border: `1px solid ${feature.color}40`,
            }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: feature.color }}>
                Key Benefits
              </Typography>
              <Grid container spacing={2}>
                {feature.benefits.map((benefit, idx) => (
                  <Grid key={idx} item xs={12} sm={6}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Icon
                        icon="mdi:check-circle"
                        width="24"
                        height="24"
                        color={feature.color}
                      />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {benefit}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </Box>
      ))}

      {/* CTA Section */}
      <Container sx={{ mt: 10 }}>
        <Paper sx={{
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          background: colors.gradient.subtle,
          border: `1px solid ${colors.border.primary}`,
        }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Ready to Experience These Features?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              See ESEC in action with a personalized demo tailored to your needs
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
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
                onClick={() => navigate('/pricing')}
                sx={{ px: 4, py: 1.5 }}
              >
                View Pricing
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Image Modal */}
      <Dialog
        open={imageModal.open}
        onClose={closeImageModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: mode === 'dark'
              ? 'rgba(20, 20, 30, 0.98)'
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${colors.border.primary}`,
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            onClick={closeImageModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              zIndex: 10,
              background: mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
              color: colors.primary,
              '&:hover': {
                background: mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 1)',
              }
            }}
          >
            <Icon icon="mdi:close" width="24" height="24" />
          </IconButton>

          {/* Title */}
          <Box sx={{
            p: 3,
            borderBottom: `1px solid ${colors.border.secondary}`,
            background: mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.02)'
          }}>
            <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between">
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {imageModal.title}
              </Typography>
              {imageModal.images.length > 1 && (
                <Typography variant="body2" color="text.secondary">
                  {imageModal.currentIndex + 1} / {imageModal.images.length}
                </Typography>
              )}
            </Stack>
          </Box>

          {/* Image Display */}
          <Box sx={{
            position: 'relative',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            background: mode === 'dark'
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0.05)'
          }}>
            {imageModal.images.length > 0 && (
              <Box
                component="img"
                src={imageModal.images[imageModal.currentIndex]}
                alt={`${imageModal.title} - Image ${imageModal.currentIndex + 1}`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: colors.shadow.subtle
                }}
              />
            )}

            {/* Navigation Arrows */}
            {imageModal.images.length > 1 && (
              <>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    background: mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    color: colors.primary,
                    '&:hover': {
                      background: mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <Icon icon="mdi:chevron-left" width="32" height="32" />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    background: mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                    color: colors.primary,
                    '&:hover': {
                      background: mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <Icon icon="mdi:chevron-right" width="32" height="32" />
                </IconButton>
              </>
            )}
          </Box>

          {/* Image Dots Navigation */}
          {imageModal.images.length > 1 && (
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              p: 2,
              borderTop: `1px solid ${colors.border.secondary}`
            }}>
              {imageModal.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setImageModal({ ...imageModal, currentIndex: index })}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: index === imageModal.currentIndex ? colors.primary : colors.border.secondary,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      background: colors.primary
                    }
                  }}
                />
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}
