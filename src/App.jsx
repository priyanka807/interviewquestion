import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todolist/todo'
import Infintiballer from './infinitiballer/Infintiballer'
import Stoppausereset from './practice/stoppausereset'
import InfinitiBaller from './practice/InfinitiBaller'
import Dropdown from './practice/dropdown'
import Todolist from './practice/todolist'
import Calculator from './practice/calculator'
import Calculator1 from './practice/Calculator1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Infintiballer/> */}
    {/* <Todo/> */}
    <Calculator1/>
    {/* <Calculator/> */}
    {/* <Todolist/> */}
    {/* <Dropdown/>
    <InfinitiBaller/>
    <Stoppausereset/> */}
    </>
   
  )
}

export default App
