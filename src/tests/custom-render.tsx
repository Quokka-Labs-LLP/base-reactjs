import { render, type RenderResult } from '@testing-library/react'
import type { JSX } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

export const customRender = (Component: () => JSX.Element, props?: unknown): RenderResult => {
  const router = createMemoryRouter(
    [{ path: '/', element: <Component {...(props || {})} /> }],
    { initialEntries: ['/'] }
  )

  return render(<RouterProvider router={router} />)
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
