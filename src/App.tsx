import { Suspense } from 'react'
import Router from './routes/RouterProvider'
import { ThemeProvider } from '@/components/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
