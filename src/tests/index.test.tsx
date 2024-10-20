import { screen } from '@testing-library/react'
import { expect, vi } from 'vitest'

import { Component } from '../pages/index'
import { customRender } from './custom-render'

vi.mock('react-router-dom', async () => {
  const module = await vi.importActual('react-router-dom')

  return {
    ...module,
    useLoaderData: vi.fn(() => 'Tanmay'),
  }
})

describe('Index Page', () => {
  it('should render without explode', () => {
    customRender(Component)

    expect(screen.getByText('Hi Tanmay')).not.toBeNull()
  })
})
