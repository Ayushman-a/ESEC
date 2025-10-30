import * as React from 'react'
import { Box } from '@mui/material'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import FeaturesSection from '../components/FeaturesSection'
import FeatureShowcase from '../components/FeatureShowcase'
import ResourceCards from '../components/ResourceCards'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Box>
      <Hero />
      <TrustBar />
      <FeaturesSection />
      <FeatureShowcase />
      <ResourceCards />
      <CTA />
    </Box>
  )
}
