import * as React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography, Collapse } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'

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
  const { mode } = useThemeMode()
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
          background: mode === 'dark'
            ? 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)'
            : 'linear-gradient(135deg, #0097a7 0%, #7c3aed 100%)',
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
                boxShadow: mode === 'dark'
                  ? '0 12px 40px rgba(0, 240, 255, 0.2)'
                  : '0 12px 40px rgba(0, 151, 167, 0.2)',
              }
            }}>
              <CardMedia sx={{
                height: 200,
                background: mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(0, 151, 167, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: mode === 'dark'
                    ? 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 70%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(0, 151, 167, 0.15), transparent 70%)',
                }
              }}>
                <Icon
                  icon={it.image}
                  width="80"
                  height="80"
                  style={{
                    color: mode === 'dark' ? '#00f0ff' : '#0097a7',
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
                      color: mode === 'dark' ? 'primary.main' : 'primary.dark',
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
                    borderColor: mode === 'dark'
                      ? 'rgba(0, 240, 255, 0.2)'
                      : 'rgba(0, 151, 167, 0.2)'
                  }}>
                    <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.8 }}>
                      {it.fullContent}
                    </Typography>
                    <Box sx={{
                      mt: 2,
                      p: 2,
                      borderRadius: 2,
                      background: mode === 'dark'
                        ? 'rgba(0, 240, 255, 0.05)'
                        : 'rgba(0, 151, 167, 0.05)',
                      border: '1px solid',
                      borderColor: mode === 'dark'
                        ? 'rgba(0, 240, 255, 0.2)'
                        : 'rgba(0, 151, 167, 0.2)'
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
                      background: mode === 'dark'
                        ? 'rgba(0, 240, 255, 0.1)'
                        : 'rgba(0, 151, 167, 0.1)',
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
