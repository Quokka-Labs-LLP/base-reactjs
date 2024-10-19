import type { JSX } from 'react'
import { useState } from 'react'

import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  const updateCount = (): void => setCount(count => count + 1)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={updateCount} type='button'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
