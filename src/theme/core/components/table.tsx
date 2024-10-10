import type { Theme, Components } from '@mui/material/styles'

import { tableRowClasses } from '@mui/material/TableRow'
import { tableCellClasses } from '@mui/material/TableCell'

import { varAlpha } from '../../styles'

const MuiTableContainer: Components<Theme>['MuiTableContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      scrollbarWidth: 'thin',
      scrollbarColor: `${varAlpha(theme.palette.text.disabledChannel, 0.4)} ${varAlpha(theme.palette.text.disabledChannel, 0.08)}`,
    }),
  },
}

const MuiTable: Components<Theme>['MuiTable'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '--palette-TableCell-border': theme.palette.divider,
    }),
  },
}

const MuiTableRow: Components<Theme>['MuiTableRow'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${tableRowClasses.selected}`]: {
        backgroundColor: varAlpha(theme.palette.primary.dark, 0.04),
        '&:hover': {
          backgroundColor: varAlpha(theme.palette.primary.dark, 0.08),
        },
      },
      '&:last-of-type': {
        [`& .${tableCellClasses.root}`]: { borderColor: 'transparent' },
      },
    }),
  },
}

const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: { borderBottomStyle: 'dashed' },
    head: ({ theme }) => ({
      fontSize: 14,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightSemiBold,
      backgroundColor: theme.palette.background.neutral,
    }),
    stickyHeader: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
    }),
    paddingCheckbox: ({ theme }) => ({ paddingLeft: theme.spacing(1) }),
  },
}

const MuiTablePagination: Components<Theme>['MuiTablePagination'] = {
  defaultProps: {
    backIconButtonProps: { size: 'small' },
    nextIconButtonProps: { size: 'small' },
    slotProps: { select: { name: 'table-pagination-select' } },
  },

  styleOverrides: {
    root: { width: '100%' },
    toolbar: { height: 64 },
    actions: { marginRight: 8 },
    select: ({ theme }) => ({
      paddingLeft: 8,
      '&:focus': { borderRadius: theme.shape.borderRadius },
    }),
    selectIcon: {
      right: 4,
      width: 16,
      height: 16,
      top: 'calc(50% - 8px)',
    },
  },
}

export const table = {
  MuiTable,
  MuiTableRow,
  MuiTableCell,
  MuiTableContainer,
  MuiTablePagination,
}
