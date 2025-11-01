import * as React from 'react'
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useThemeMode } from '../ThemeContext'
import { useColors } from '../theme/useColors'
import { useTranslation } from 'react-i18next'
import esecLogo from '../assets/images/new-logo.png'
import esecDarkLogo from '../assets/images/esec_darklogo.png'

export default function Navbar() {
  const [anchorEls, setAnchorEls] = React.useState<Record<string, null | HTMLElement>>({
    Features: null, Company: null
  })
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()
  const { mode, toggleTheme } = useThemeMode()
  const colors = useColors()
  const { t } = useTranslation()

  const menu = {
    Features: [
      { label: t('nav.menu.sam'), to: '/features#sam' },
      { label: t('nav.menu.compliance'), to: '/features#compliance' },
      { label: t('nav.menu.project'), to: '/features#project' },
      { label: t('nav.menu.alerts'), to: '/features#alerts' },
    ],
    Company: [
      { label: t('nav.menu.aboutUs'), to: '/about' },
      { label: t('nav.menu.partners'), to: '/partners' },
      { label: t('nav.menu.careers'), to: '/about#careers' },
      { label: t('nav.menu.contact'), to: '/contact' },
    ]
  }

  const openMenu = (key: string, target: HTMLElement) => {
    setAnchorEls(prev => ({ ...prev, [key]: target }))
  }
  const closeMenu = (key: string) => setAnchorEls(prev => ({ ...prev, [key]: null }))

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.border.subtle}`,
      background: colors.background.overlay
    }}>
      <Container>
        <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
          <Box component={RouterLink} to="/" sx={{ display:'flex', alignItems:'center', color:'inherit', textDecoration:'none' }}>
            <Box
              component="img"
              src={mode === 'dark' ? esecDarkLogo : esecLogo}
              alt="ESEC Logo"
              sx={{
                height: 50,
                width: 'auto',
                mr: 1
              }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4, gap: 1 }}>
            {Object.keys(menu).map((key) => (
              <Box key={key}>
                <Button
                  onMouseEnter={(e) => openMenu(key, e.currentTarget)}
                  onClick={(e) => openMenu(key, e.currentTarget)}
                  endIcon={<Icon icon="mdi:chevron-down" />}
                >
                  {t(`nav.menu.${key.toLowerCase()}`)}
                </Button>
                <Menu
                  anchorEl={anchorEls[key]}
                  open={Boolean(anchorEls[key])}
                  onClose={() => closeMenu(key)}
                  slotProps={{
                    paper: {
                      onMouseLeave: () => closeMenu(key),
                      sx: {
                        mt: 1.5,
                        minWidth: 220,
                        borderRadius: 2,
                        backdropFilter: 'blur(20px)',
                        background: colors.background.elevated,
                        border: `1px solid ${colors.border.secondary}`,
                        boxShadow: colors.shadow.subtle,
                      }
                    }
                  }}
                >
                  {menu[key as keyof typeof menu].map((item) => (
                    <MenuItem
                      key={item.to}
                      component={RouterLink}
                      to={item.to}
                      onClick={() => closeMenu(key)}
                      sx={{
                        py: 1.5,
                        px: 2.5,
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: colors.interactive.background,
                          color: colors.primary,
                          paddingLeft: '24px',
                        }
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
            <Button component={RouterLink} to="/pricing">{t('nav.pricing')}</Button>
            <Button component={RouterLink} to="/partners">{t('nav.partners')}</Button>
            {/* <Button component={RouterLink} to="/contact">{t('nav.demo')}</Button> */}
          </Box>

          <Box flex={1} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'primary.main',
                border: '1px solid',
                borderColor: colors.border.primary,
                '&:hover': {
                  background: colors.interactive.background,
                  borderColor: 'primary.main',
                }
              }}
            >
              <Icon icon={mode === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'} width="20" height="20" />
            </IconButton>
            <Button variant="outlined" onClick={() => navigate('/contact')}>
              {t('nav.login')}
            </Button>
            <Button variant="contained" onClick={() => navigate('/contact')} endIcon={<Icon icon="mdi:play-circle" />}>
              {t('nav.requestDemo')}
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'primary.main',
                border: '1px solid',
                borderColor: colors.border.primary,
              }}
            >
              <Icon icon={mode === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'} width="20" height="20" />
            </IconButton>
            <IconButton onClick={() => setMobileOpen(v => !v)}>
              <Icon icon={mobileOpen ? 'mdi:close' : 'mdi:menu'} />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile menu */}
        {mobileOpen && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 2 }}>
            {Object.entries(menu).map(([k, items]) => (
              <Box key={k} sx={{ px: 2, py: 1 }}>
                <Typography variant="overline" color="text.secondary">{t(`nav.menu.${k.toLowerCase()}`)}</Typography>
                {items.map((it) => (
                  <Button key={it.to} component={RouterLink} to={it.to} fullWidth onClick={() => setMobileOpen(false)} sx={{ justifyContent: 'flex-start' }}>
                    {it.label}
                  </Button>
                ))}
              </Box>
            ))}
            <Box sx={{ px: 2, display:'grid', gap: 1 }}>
              <Button variant="outlined" onClick={() => { setMobileOpen(false); navigate('/contact') }}>{t('nav.login')}</Button>
              <Button variant="contained" onClick={() => { setMobileOpen(false); navigate('/contact') }}>{t('nav.requestDemo')}</Button>
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  )
}
