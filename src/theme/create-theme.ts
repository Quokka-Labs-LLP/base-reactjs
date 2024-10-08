import { extendTheme, type Theme } from '@mui/material/styles'
import { customShadows, shadows, typography, colorSchemes } from './core'
import { ThemeColorScheme } from './types'

export function createTheme(themeMode: ThemeColorScheme): Theme {
  const initialTheme = {
    colorSchemes,
    shadows: shadows(themeMode),
    customShadows: customShadows(themeMode),
    shape: { borderRadius: 8 },
    typography,
  }

  const theme = extendTheme(initialTheme)

  return theme
}
