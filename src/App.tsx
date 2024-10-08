import { Suspense } from 'react'
import Router from './routes/RouterProvider'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from './theme/create-theme'

const App = () => {
  const theme = createTheme('light')

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
