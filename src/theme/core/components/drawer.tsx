import type { Theme, Components } from '@mui/material/styles'

import { varAlpha, stylesMode } from '../../styles'

const MuiDrawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    paperAnchorRight: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'temporary' && {
        boxShadow: `-40px 40px 80px -8px ${varAlpha(theme.palette.grey['500Channel'], 0.24)}`,
        [stylesMode.dark]: {
          boxShadow: `-40px 40px 80px -8px ${varAlpha(theme.palette.common.blackChannel, 0.24)}`,
        },
      }),
    }),
    paperAnchorLeft: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'temporary' && {
        boxShadow: `40px 40px 80px -8px ${varAlpha(theme.palette.grey['500Channel'], 0.24)}`,
        [stylesMode.dark]: {
          boxShadow: `40px 40px 80px -8px  ${varAlpha(theme.palette.common.blackChannel, 0.24)}`,
        },
      }),
    }),
  },
}

export const drawer = { MuiDrawer }
