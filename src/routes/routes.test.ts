import { generateNestedRoutes } from './index'

describe('Routes', () => {
  it('should return nested routes', () => {
    const routes = generateNestedRoutes([{ path: '/' }, { path: '/a' }])

    const expectedRoutes = [{ path: '/', children: [{ path: 'a' }] }]

    expect(JSON.stringify(routes)).toBe(JSON.stringify(expectedRoutes))
  })
})
