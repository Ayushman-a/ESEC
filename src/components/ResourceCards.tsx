import * as React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography, Collapse } from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'

const items = [
  {
    title: 'DSLS license management explained',
    tag: 'Article',
    description: 'Understanding dynamic software license subscription models and their benefits.',
    fullContent: 'Dynamic Software License Subscription (DSLS) is revolutionizing how organizations manage their software assets. This approach allows companies to scale their license usage based on actual needs, reducing waste and optimizing costs. Key benefits include: flexible scaling, real-time usage monitoring, automated compliance reporting, and significant cost savings. Learn how leading enterprises are implementing DSLS to transform their software asset management strategy and achieve up to 40% reduction in license costs.',
    image: 'mdi:file-document-outline',
    readTime: '5 min read'
  },
  {
    title: 'Semiconductor productivity with license intelligence',
    tag: 'Webinar',
    description: 'How intelligent license management boosts semiconductor design efficiency.',
    fullContent: 'Join our expert panel as they discuss the critical role of license intelligence in semiconductor design workflows. Topics covered include: optimizing EDA tool usage across distributed teams, preventing license denial bottlenecks, maximizing ROI on expensive design software, and implementing predictive analytics for license forecasting. Real-world case studies demonstrate how companies achieved 25% improvement in design team productivity through intelligent license management.',
    image: 'mdi:presentation-play',
    readTime: '45 min webinar'
  },
  {
    title: 'Right‑size your license pool: a guide',
    tag: 'Whitepaper',
    description: 'Best practices for optimizing your software license allocation and costs.',
    fullContent: 'This comprehensive whitepaper provides a step-by-step framework for right-sizing your license pool. Discover proven methodologies for: analyzing historical usage patterns, identifying over-licensed and under-licensed software, implementing dynamic license allocation, and establishing ongoing optimization processes. Includes practical worksheets, ROI calculators, and implementation timelines. Download now to start optimizing your software license investments and eliminating unnecessary costs.',
    image: 'mdi:file-chart-outline',
    readTime: '12 min read'
  },
]

export default function ResourceCards() {
  const colors = useColors()
  const [expandedCards, setExpandedCards] = React.useState<Record<number, boolean>>({})

  const handleReadMore = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{
          background: colors.gradient.primary,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800
        }}>
          Latest resources
        </Typography>
        <Typography color="text.secondary" variant="h6" fontWeight={400}>
          Learn best practices from our team.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {items.map((it, index) => (
          <Grid key={it.title} item xs={12} md={4}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: colors.shadow.hover,
              }
            }}>
              <CardMedia sx={{
                height: 200,
                background: colors.gradient.subtle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: colors.gradient.radial,
                }
              }}>
                <Icon
                  icon={it.image}
                  width="80"
                  height="80"
                  style={{
                    color: colors.primary,
                    opacity: 0.8,
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {it.tag}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    <Icon icon="mdi:clock-outline" width="14" height="14" />
                    {it.readTime}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ mt: 0.5, mb: 1.5, fontWeight: 700 }}>
                  {it.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {it.description}
                </Typography>

                <Collapse in={expandedCards[index]} timeout="auto" unmountOnExit>
                  <Box sx={{
                    mt: 2,
                    pt: 2,
                    borderTop: '1px solid',
                    borderColor: colors.border.secondary
                  }}>
                    <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.8 }}>
                      {it.fullContent}
                    </Typography>
                    <Box sx={{
                      mt: 2,
                      p: 2,
                      borderRadius: 2,
                      background: colors.interactive.backgroundSubtle,
                      border: '1px solid',
                      borderColor: colors.border.secondary
                    }}>
                      <Typography variant="body2" fontWeight={600} color="primary.main" sx={{ mb: 0.5 }}>
                        Key Takeaways:
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {it.tag === 'Article' ? 'Comprehensive guide with practical examples' : ''}
                        {it.tag === 'Webinar' ? 'Live Q&A session with industry experts' : ''}
                        {it.tag === 'Whitepaper' ? 'In-depth analysis with data-driven insights' : ''}
                      </Typography>
                    </Box>
                  </Box>
                </Collapse>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  size="small"
                  onClick={() => handleReadMore(index)}
                  endIcon={<Icon icon={expandedCards[index] ? "mdi:chevron-up" : "mdi:chevron-down"} />}
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    '&:hover': {
                      background: colors.interactive.background,
                    }
                  }}
                >
                  {expandedCards[index] ? 'Show less' : 'Read more'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
