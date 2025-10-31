import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AccessibilitySettings {
  zoomLevel: number
  fontSize: number
  reduceMotion: boolean
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  setZoomLevel: (level: number) => void
  setFontSize: (size: number) => void
  toggleReduceMotion: () => void
  resetSettings: () => void
}

const defaultSettings: AccessibilitySettings = {
  zoomLevel: 100,
  fontSize: 100,
  reduceMotion: false
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibilitySettings')
    return saved ? JSON.parse(saved) : defaultSettings
  })

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings))

    // Apply zoom level
    document.documentElement.style.zoom = `${settings.zoomLevel}%`

    // Apply font size
    document.documentElement.style.fontSize = `${settings.fontSize}%`

    // Apply reduce motion
    if (settings.reduceMotion) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }
  }, [settings])

  const setZoomLevel = (level: number) => {
    setSettings(prev => ({ ...prev, zoomLevel: Math.max(75, Math.min(150, level)) }))
  }

  const setFontSize = (size: number) => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(75, Math.min(150, size)) }))
  }

  const toggleReduceMotion = () => {
    setSettings(prev => ({ ...prev, reduceMotion: !prev.reduceMotion }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setZoomLevel,
        setFontSize,
        toggleReduceMotion,
        resetSettings
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
