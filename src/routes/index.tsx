import type { ComponentType, ReactNode } from 'react'

export interface IRoutes {
  path: string
  element?: ReactNode
  Component?: ComponentType
  ErrorBoundary?: ComponentType
  children?: IRoutes[]
}

export type Mod = {
  ErrorBoundary?: ComponentType
  default: ComponentType
  action?: ComponentType
  loader?: ComponentType
}

export type Page = {
  [key: string]: Mod
}

const sliceOutLastPath = (path: string): string => `/${path.split('/').filter(Boolean).slice(0, -1).join('/')}`

function getParentRouteIndex(path: string, routes: IRoutes[]): number {
  const nestedPath = sliceOutLastPath(path)
  const parentRouteIndex = routes.findIndex((r: IRoutes) => r.path === nestedPath)

  if (parentRouteIndex > -1 && path !== '/') {
    return parentRouteIndex
  }

  return getParentRouteIndex(nestedPath, routes)
}

export function generateNestedRoutes(routes: IRoutes[]): IRoutes[] {
  for (const route of routes) {
    const { path } = route

    if (path !== '/') {
      const parentRouteIndex = getParentRouteIndex(path, routes)
      const children = routes[parentRouteIndex].children
      const parentPath = routes[parentRouteIndex].path

      // Add a children in a route
      routes[parentRouteIndex].children = [
        ...(children || []),
        {
          ...route,
          // Remove parent route pathname  /blog/:id => :id
          path: path.replace(parentPath === '/' ? '/' : `${parentPath}/`, ''),
        },
      ]

      routes = routes.filter(r => r.path !== path && path !== '/')
    }
  }

  return routes
}

export function generateRoutes(): IRoutes[] {
  const eager: Page = import.meta.glob('../pages/**/*.tsx', { eager: true })
  const routes: IRoutes[] = []
  // eslint-disable-next-line sonarjs/slow-regex
  const catchRegex = /\[(.+)\]/g

  for (const path of Object.keys(eager)) {
    let routePath = path.slice(8, -4)
    routePath = routePath.replace(catchRegex, ':$1')

    // handle index routes
    if (routePath.endsWith('/index')) {
      routePath = routePath.slice(0, -6) || '/'
    }

    const route: IRoutes = {
      Component: eager[path].default,
      path: routePath,
      ...(eager[path].action ? { action: eager[path].action } : {}),
      ...(eager[path].loader ? { loader: eager[path].loader } : {}),
      ...(eager[path].ErrorBoundary ? { ErrorBoundary: eager[path].ErrorBoundary } : {}),
    }

    routes.push(route)
  }

  // sort routes to ensure that child routes are procesed before parent routes
  routes.sort((a, b) => b.path.split('/').length - a.path.split('/').length)

  // create a nested structure
  return generateNestedRoutes(routes)
}
