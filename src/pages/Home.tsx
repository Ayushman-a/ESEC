import * as React from 'react'
import { Box } from '@mui/material'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import FeatureGrid from '../components/FeatureGrid'
import FeatureShowcase from '../components/FeatureShowcase'
import ResourceCards from '../components/ResourceCards'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Box>
      <Hero />
      <TrustBar />
      <FeatureGrid />
      <FeatureShowcase />
      <ResourceCards />
      <CTA />
    </Box>
  )
}
