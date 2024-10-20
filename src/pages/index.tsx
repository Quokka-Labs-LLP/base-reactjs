import type { JSX } from 'react'

import { isRouteErrorResponse, json, Outlet, useLoaderData, useRouteError } from 'react-router-dom'

export function loader(): Response {
  return json('Tanmay')
}

export function Component(): JSX.Element {
  const loaderData = useLoaderData() as string

  return (
    <>
      <h1>Index Page</h1>
      <p>Hi {loaderData || ''}</p>

      <Outlet />
    </>
  )
}

export function ErrorBoundary(): JSX.Element {
  const error: Error & string = useRouteError() as Error & string

  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{error.message || error}</h1>
  )
}

// If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = 'IndexErrorBoundary'
