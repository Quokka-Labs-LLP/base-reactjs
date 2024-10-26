import { expect, vi } from 'vitest'

import { Component, loader } from '@/pages/index'
import { customRender, screen } from './custom-render'

vi.mock('react-router-dom', async () => {
  const module = await vi.importActual('react-router-dom')

  return {
    ...module,
    useLoaderData: vi.fn(() => 'Tanmay'),
  }
})

describe('Index Page Component', () => {
  it('should render without explode', () => {
    customRender(Component)

    expect(screen.getByText('Hi Tanmay')).not.toBeNull()
  })
})

describe('Index Page loader', () => {
  it('should render without explode', async () => {
    const result = loader()

    expect(await result.json()).toBe('Tanmay')
  })
})
