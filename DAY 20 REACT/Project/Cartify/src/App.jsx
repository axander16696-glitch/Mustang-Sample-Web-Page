import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
     
    </>
  )
}

export default App
