import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'
import AccessibilityToolbar from './components/AccessibilityToolbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import PricingProposal from './pages/PricingProposal'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import PartnerRequest from './pages/PartnerRequest'
import Features from './pages/Features'

export default function App() {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column" sx={{ position: 'relative' }}>
      <ScrollToTop />
      <Navbar />
      <Box component="main" sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-proposal" element={<PricingProposal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partner-request" element={<PartnerRequest />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Box>
      <Footer />
      <CookieConsent />
      <AccessibilityToolbar />
    </Box>
  )
}
