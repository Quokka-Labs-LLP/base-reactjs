import type { Theme, Components } from '@mui/material/styles'

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: { root: () => ({}) },
}

export const menu = { MuiMenuItem }
