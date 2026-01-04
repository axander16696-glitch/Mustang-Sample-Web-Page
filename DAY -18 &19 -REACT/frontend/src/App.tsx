import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import File1 from './File1.jsx'
import File2 from './File2.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <File1></File1>
    <File2></File2>
    <File1></File1>
    <File2></File2>
    </>
  )
}

export default App
