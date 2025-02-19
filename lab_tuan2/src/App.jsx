import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex1 from './component/ex1'
import Ex2 from './component/ex2'
import Ex3 from './component/ex3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex1/>
      <br />
      <Ex2/>
      <br />
      <Ex3/>
    </>
  )
}

export default App
