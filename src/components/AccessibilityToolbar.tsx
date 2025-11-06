import { useState } from 'react'
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Button,
  Slider,
  FormControlLabel,
  Switch,
  Divider,
  Tooltip
} from '@mui/material'
import { Icon } from '@iconify/react'
import { useColors } from '../theme/useColors'
import { useAccessibility } from '../contexts/AccessibilityContext'
import { useThemeMode } from '../ThemeContext'
import { useTranslation } from 'react-i18next'

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const colors = useColors()
  const { settings, setZoomLevel, setFontSize, toggleReduceMotion, resetSettings } = useAccessibility()
  const { mode, toggleTheme } = useThemeMode()
  const { t } = useTranslation()

  return (
    <>
      {/* Floating Button */}
      <Tooltip title={t('accessibility.title')} placement="left">
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            right: 24,
            bottom: 24,
            width: 56,
            height: 56,
            background: colors.gradient.primary,
            color: 'white',
            boxShadow: colors.shadow.hover,
            zIndex: 9998,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
            }
          }}
        >
          <Icon icon="mdi:cog" width="28" height="28" />
        </IconButton>
      </Tooltip>

      {/* Compact Settings Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 360 },
            background: colors.background.paper,
            p: 2.5
          }
        }}
      >
        <Stack spacing={2.5}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${colors.primary}25, ${colors.primary}10)`,
                  border: `1px solid ${colors.border.primary}`,
                  display: 'grid',
                  placeItems: 'center'
                }}
              >
                <Icon icon="mdi:tune" color={colors.primary} width="20" height="20" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                {t('accessibility.title')}
              </Typography>
            </Stack>
            <IconButton onClick={() => setIsOpen(false)} size="small">
              <Icon icon="mdi:close" width="20" height="20" />
            </IconButton>
          </Box>

          <Divider />

          {/* Zoom Level */}
          <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {t('accessibility.zoom')}
              </Typography>
              <Typography variant="caption" sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                {settings.zoomLevel}%
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton
                size="small"
                onClick={() => setZoomLevel(settings.zoomLevel - 10)}
                disabled={settings.zoomLevel <= 75}
                sx={{
                  background: colors.interactive.backgroundSubtle,
                  '&:hover': { background: colors.interactive.background }
                }}
              >
                <Icon icon="mdi:magnify-minus" width="18" height="18" />
              </IconButton>
              <Slider
                value={settings.zoomLevel}
                onChange={(_, value) => setZoomLevel(value as number)}
                min={75}
                max={150}
                step={5}
                sx={{
                  '& .MuiSlider-thumb': {
                    background: colors.primary,
                    width: 16,
                    height: 16
                  },
                  '& .MuiSlider-track': {
                    background: colors.primary,
                    height: 4
                  },
                  '& .MuiSlider-rail': {
                    height: 4
                  }
                }}
              />
              <IconButton
                size="small"
                onClick={() => setZoomLevel(settings.zoomLevel + 10)}
                disabled={settings.zoomLevel >= 150}
                sx={{
                  background: colors.interactive.backgroundSubtle,
                  '&:hover': { background: colors.interactive.background }
                }}
              >
                <Icon icon="mdi:magnify-plus" width="18" height="18" />
              </IconButton>
            </Stack>
          </Box>

          {/* Font Size */}
          <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {t('accessibility.fontSize')}
              </Typography>
              <Typography variant="caption" sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                {settings.fontSize}%
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton
                size="small"
                onClick={() => setFontSize(settings.fontSize - 10)}
                disabled={settings.fontSize <= 75}
                sx={{
                  background: colors.interactive.backgroundSubtle,
                  '&:hover': { background: colors.interactive.background }
                }}
              >
                <Icon icon="mdi:format-font-size-decrease" width="18" height="18" />
              </IconButton>
              <Slider
                value={settings.fontSize}
                onChange={(_, value) => setFontSize(value as number)}
                min={75}
                max={150}
                step={5}
                sx={{
                  '& .MuiSlider-thumb': {
                    background: colors.primary,
                    width: 16,
                    height: 16
                  },
                  '& .MuiSlider-track': {
                    background: colors.primary,
                    height: 4
                  },
                  '& .MuiSlider-rail': {
                    height: 4
                  }
                }}
              />
              <IconButton
                size="small"
                onClick={() => setFontSize(settings.fontSize + 10)}
                disabled={settings.fontSize >= 150}
                sx={{
                  background: colors.interactive.backgroundSubtle,
                  '&:hover': { background: colors.interactive.background }
                }}
              >
                <Icon icon="mdi:format-font-size-increase" width="18" height="18" />
              </IconButton>
            </Stack>
          </Box>

          <Divider />

          {/* Theme Mode Toggle */}
          <Box sx={{
            p: 2,
            borderRadius: 2,
            background: colors.interactive.backgroundSubtle,
            border: `1px solid ${colors.border.subtle}`
          }}>
            <FormControlLabel
              control={
                <Switch
                  checked={mode === 'dark'}
                  onChange={toggleTheme}
                  size="small"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: colors.primary
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: colors.primary
                    }
                  }}
                />
              }
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon icon={mode === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'} width="18" height="18" />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </Typography>
                </Stack>
              }
              sx={{ m: 0 }}
            />
          </Box>

          {/* Reduce Motion Toggle */}
          <Box sx={{
            p: 2,
            borderRadius: 2,
            background: colors.interactive.backgroundSubtle,
            border: `1px solid ${colors.border.subtle}`
          }}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.reduceMotion}
                  onChange={toggleReduceMotion}
                  size="small"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: colors.primary
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: colors.primary
                    }
                  }}
                />
              }
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon icon="mdi:animation-outline" width="18" height="18" />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {t('accessibility.reduceMotion')}
                  </Typography>
                </Stack>
              }
              sx={{ m: 0 }}
            />
          </Box>

          {/* Reset Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={resetSettings}
            startIcon={<Icon icon="mdi:refresh" width="18" height="18" />}
            sx={{
              py: 1.2,
              borderColor: colors.border.primary,
              fontSize: '0.9rem',
              fontWeight: 600,
              '&:hover': {
                borderColor: colors.primary,
                background: colors.interactive.backgroundSubtle
              }
            }}
          >
            {t('accessibility.reset')}
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
