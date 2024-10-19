import { startTransition, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { generateRoutes, type IRoutes } from './routes'

import './index.css'

const routes: IRoutes[] = generateRoutes()
const router = createBrowserRouter(routes)

const container = document.getElementById('root') || document.body

startTransition(() => {
  createRoot(container).render(
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
})
