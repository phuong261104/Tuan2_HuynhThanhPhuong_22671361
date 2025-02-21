import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex1 from './component/ex1'
import Ex2 from './component/ex2'
import Ex3 from './component/ex3'
import Ex4 from './component/ex4'
import Ex5 from './component/ex5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex5 />

    </>
  )
}

export default App
