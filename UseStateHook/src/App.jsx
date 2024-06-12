import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hook2 from './component/Hook2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hook2/>
    </>
  )
}

export default App
