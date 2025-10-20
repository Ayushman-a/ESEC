# ESEC Color System - Complete Guide

## 📚 Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Available Colors](#available-colors)
4. [Usage Examples](#usage-examples)
5. [Updating Colors](#updating-colors)
6. [Best Practices](#best-practices)

---

## Overview

All colors in the ESEC application are now centralized in a single location: `src/theme/colors.ts`

**Benefits:**
- ✅ Change colors in ONE place, updates EVERYWHERE
- ✅ Consistent design across the entire application
- ✅ Easy to maintain and scale
- ✅ Automatic light/dark mode support
- ✅ Type-safe with TypeScript

---

## Quick Start

### In React Components

```tsx
import { useColors } from '../theme/useColors'

function MyComponent() {
  const colors = useColors()

  return (
    <Box sx={{
      background: colors.primary,              // Primary brand color
      border: `1px solid ${colors.border.primary}`,
      color: colors.text.primary,
      '&:hover': {
        background: colors.interactive.background
      }
    }}>
      Content
    </Box>
  )
}
```

### In CSS Files

Use the CSS variables defined in `src/styles.css`:

```css
.my-element {
  color: var(--cyan);           /* Dark mode primary */
  background: var(--bg-dark);   /* Dark mode background */
}

body.light-mode .my-element {
  color: var(--cyan-light);     /* Light mode primary */
  background: var(--bg-light);  /* Light mode background */
}
```

---

## Available Colors

### 1. Brand Colors (`colors.brand`)

Primary and secondary brand colors:

```tsx
colors.brand.primary.dark      // #00f0ff (Bright cyan - dark mode)
colors.brand.primary.light     // #0097a7 (Teal - light mode)
colors.brand.primary.darker    // #00b8cc
colors.brand.primary.lighter   // #4dd0e1

colors.brand.secondary.dark    // #a855f7 (Purple - dark mode)
colors.brand.secondary.light   // #7c3aed (Deep purple - light mode)
colors.brand.secondary.darker  // #5b21b6
colors.brand.secondary.lighter // #a78bfa
```

**Quick access:**
```tsx
colors.primary     // Automatically picks dark or light based on theme
colors.secondary   // Automatically picks dark or light based on theme
```

### 2. Accent Colors (`colors.brand.accent`)

```tsx
colors.brand.accent.green        // #10b981 (Success/positive)
colors.brand.accent.orange       // #f59e0b (Warning - dark mode)
colors.brand.accent.orangeLight  // #ea580c (Warning - light mode)
colors.brand.accent.red          // #ef4444 (Error - dark mode)
colors.brand.accent.redLight     // #dc2626 (Error - light mode)
colors.brand.accent.blue         // #3b82f6 (Info)
colors.brand.accent.pink         // #ec4899 (Special highlight)
```

### 3. Background Colors (`colors.background`)

```tsx
colors.background.default   // Main page background
colors.background.paper     // Cards, panels, paper surfaces
colors.background.elevated  // Modals, menus, elevated surfaces
colors.background.surface   // Secondary surfaces
colors.background.overlay   // Navbar, footer overlays
```

### 4. Text Colors (`colors.text`)

```tsx
colors.text.primary     // Main text color
colors.text.secondary   // Secondary/muted text color
```

### 5. Border Colors (`colors.border`)

```tsx
colors.border.primary    // Primary borders (e.g., focused inputs)
colors.border.secondary  // Subtle borders
colors.border.subtle     // Very subtle borders (dividers)
colors.border.purple     // Purple accent borders
```

### 6. Gradients (`colors.gradient`)

```tsx
colors.gradient.primary         // Cyan to purple gradient
colors.gradient.primaryReverse  // Purple to cyan gradient
colors.gradient.subtle          // Subtle background gradient
colors.gradient.text            // Text gradient effect
colors.gradient.radial          // Radial gradient for backgrounds
```

### 7. Shadows (`colors.shadow`)

```tsx
colors.shadow.primary   // Primary glow effect
colors.shadow.secondary // Secondary glow effect
colors.shadow.subtle    // Subtle shadow for cards
colors.shadow.hover     // Shadow on hover state
```

### 8. Interactive States (`colors.interactive`)

```tsx
colors.interactive.background       // Hover background color
colors.interactive.backgroundSubtle // Subtle hover background
colors.interactive.border           // Hover border color
```

---

## Usage Examples

### Example 1: Simple Button with Hover

```tsx
import { useColors } from '../theme/useColors'

function MyButton() {
  const colors = useColors()

  return (
    <Button sx={{
      background: colors.gradient.primary,
      border: `1px solid ${colors.border.primary}`,
      color: '#fff',
      '&:hover': {
        background: colors.interactive.background,
        borderColor: colors.interactive.border,
        boxShadow: colors.shadow.hover
      }
    }}>
      Click Me
    </Button>
  )
}
```

### Example 2: Card with Theme-Aware Styling

```tsx
import { useColors } from '../theme/useColors'

function FeatureCard() {
  const colors = useColors()

  return (
    <Paper sx={{
      p: 3,
      background: colors.background.paper,
      border: `1px solid ${colors.border.secondary}`,
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: colors.shadow.hover,
        border: `1px solid ${colors.border.primary}`
      }
    }}>
      <Typography color={colors.text.primary}>Title</Typography>
      <Typography color={colors.text.secondary}>Description</Typography>
    </Paper>
  )
}
```

### Example 3: Dropdown Menu

```tsx
import { useColors } from '../theme/useColors'

function MyMenu() {
  const colors = useColors()

  return (
    <Menu
      slotProps={{
        paper: {
          sx: {
            background: colors.background.elevated,
            border: `1px solid ${colors.border.secondary}`,
            boxShadow: colors.shadow.subtle,
            backdropFilter: 'blur(20px)'
          }
        }
      }}
    >
      <MenuItem sx={{
        '&:hover': {
          background: colors.interactive.background,
          color: colors.primary
        }
      }}>
        Menu Item
      </MenuItem>
    </Menu>
  )
}
```

### Example 4: Icon with Accent Color

```tsx
import { useColors } from '../theme/useColors'

function StatusIcon({ status }: { status: 'success' | 'error' | 'warning' }) {
  const colors = useColors()

  const iconColor = {
    success: colors.brand.accent.green,
    error: colors.brand.accent.red,
    warning: colors.brand.accent.orange
  }[status]

  return <Icon icon="mdi:check-circle" color={iconColor} />
}
```

---

## Updating Colors

### Changing Brand Colors

**To change the primary color across the entire app:**

1. Open `src/theme/colors.ts`
2. Update the `brandColors.primary` values:

```ts
export const brandColors = {
  primary: {
    dark: '#YOUR_DARK_MODE_COLOR',   // e.g., '#00f0ff'
    light: '#YOUR_LIGHT_MODE_COLOR',  // e.g., '#0097a7'
    darker: '#DARKER_VARIANT',
    lighter: '#LIGHTER_VARIANT',
  },
  // ...
}
```

3. Save the file
4. **That's it!** All components using `colors.primary` will update automatically ✨

### Changing Specific Colors

**Example: Change hover background color:**

```ts
// In src/theme/colors.ts
export const interactiveColors = {
  dark: {
    background: 'rgba(YOUR_COLOR, 0.1)',  // Update this
    // ...
  },
  light: {
    background: 'rgba(YOUR_COLOR, 0.1)',  // And this
    // ...
  }
}
```

### Adding New Colors

```ts
// In src/theme/colors.ts
export const brandColors = {
  // ... existing colors ...

  // Add new color category
  tertiary: {
    dark: '#ff6b6b',
    light: '#ee5a6f',
  }
}
```

Then update the `getColors` function to export it:

```ts
export const getColors = (mode: 'dark' | 'light') => ({
  // ... existing ...
  tertiary: brandColors.tertiary[mode],  // Add this
})
```

---

## Best Practices

### ✅ DO:

1. **Use the `useColors()` hook in components:**
   ```tsx
   const colors = useColors()
   ```

2. **Use semantic color names:**
   ```tsx
   // Good
   background: colors.background.paper

   // Avoid
   background: '#f8fafc'
   ```

3. **Use the color system for ALL colors:**
   ```tsx
   // Good
   border: `1px solid ${colors.border.primary}`

   // Avoid
   border: '1px solid rgba(0, 240, 255, 0.3)'
   ```

4. **Let the system handle theme switching:**
   ```tsx
   // Good - Automatically adapts to theme
   color: colors.primary

   // Avoid - Manual theme checking
   color: mode === 'dark' ? '#00f0ff' : '#0097a7'
   ```

### ❌ DON'T:

1. **Don't hardcode color values:**
   ```tsx
   // ❌ Bad
   background: '#00f0ff'

   // ✅ Good
   background: colors.primary
   ```

2. **Don't check theme mode manually if color exists:**
   ```tsx
   // ❌ Bad
   const bgColor = mode === 'dark' ? '#0a0e1a' : '#f8fafc'

   // ✅ Good
   const bgColor = colors.background.default
   ```

3. **Don't mix color systems:**
   ```tsx
   // ❌ Bad - Inconsistent
   border: '1px solid rgba(0, 240, 255, 0.3)'
   color: colors.primary

   // ✅ Good - Consistent
   border: `1px solid ${colors.border.primary}`
   color: colors.primary
   ```

---

## Migration Guide

### Converting Existing Components

**Before:**
```tsx
function MyComponent() {
  const { mode } = useThemeMode()

  return (
    <Box sx={{
      background: mode === 'dark' ? '#0a0e1a' : '#f8fafc',
      border: mode === 'dark'
        ? '1px solid rgba(0, 240, 255, 0.3)'
        : '1px solid rgba(0, 151, 167, 0.3)',
      color: mode === 'dark' ? '#00f0ff' : '#0097a7'
    }}>
      Content
    </Box>
  )
}
```

**After:**
```tsx
import { useColors } from '../theme/useColors'

function MyComponent() {
  const colors = useColors()

  return (
    <Box sx={{
      background: colors.background.default,
      border: `1px solid ${colors.border.primary}`,
      color: colors.primary
    }}>
      Content
    </Box>
  )
}
```

✨ **Much cleaner and easier to maintain!**

---

## File Structure

```
src/
├── theme/
│   ├── colors.ts      ← All color definitions
│   └── useColors.ts   ← Hook to access colors
├── ThemeContext.tsx   ← Uses colors.ts
└── components/
    └── Navbar.tsx     ← Example: Uses useColors hook
```

---

## Need Help?

- **File to edit:** `src/theme/colors.ts`
- **Hook to use:** `import { useColors } from '../theme/useColors'`
- **Example:** See `src/components/Navbar.tsx` for complete implementation

Happy theming! 🎨✨
