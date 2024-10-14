import { extendTheme, type Theme } from '@mui/material/styles'
import {
  customShadows,
  shadows,
  typography,
  colorSchemes,
  components,
} from './core'
import { ThemeColorScheme } from './types'

export function createTheme(themeMode: ThemeColorScheme): Theme {
  const initialTheme = {
    colorSchemes,
    shadows: shadows(themeMode),
    customShadows: customShadows(themeMode),
    shape: { borderRadius: 8 },
    typography,
    components,
  }

  const theme = extendTheme(initialTheme)

  return theme
}
