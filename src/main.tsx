import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProviderWrapper } from './ThemeContext'
import { AccessibilityProvider } from './contexts/AccessibilityContext'
import './i18n/config'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccessibilityProvider>
      <ThemeProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProviderWrapper>
    </AccessibilityProvider>
  </React.StrictMode>,
)
