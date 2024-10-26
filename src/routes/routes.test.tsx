import { createRoutes, generateNestedRoutes, generateRoutes } from './index'

describe('Routes', () => {
  it('should return nested routes', () => {
    const routes = generateNestedRoutes([{ path: '/a/b' }, { path: '/a' }, { path: '/' }])

    const expectedRoutes = [{ path: '/', children: [{ path: 'a', children: [{ path: 'b' }] }] }]

    expect(JSON.stringify(routes)).toBe(JSON.stringify(expectedRoutes))
  })

  it('should have correct path defined', () => {
    const routes = createRoutes({
      '../pages/index.tsx': { default: () => <></> },
      '../pages/a/index.tsx': { default: () => <></> },
      '../pages/a/b/index.tsx': { default: () => <></> },
    })

    expect(routes[0]?.path).toBe('/a/b')
  })

  it('should scan pages folder to get routes config', () => {
    const q = generateRoutes()

    expect(q?.[0]?.path).toBe('/')
  })
})
