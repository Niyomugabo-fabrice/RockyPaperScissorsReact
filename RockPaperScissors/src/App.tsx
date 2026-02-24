import { useState } from 'react'
import './App.css'

function App() {
  const [choose, setChoose] = useState("")
  
  return (
    <div className="main">
      <button onClick={()=>setChoose("Rocky")}>Rock</button>
      <button onClick={()=>setChoose("Paper")}>Paper</button>
      <button onClick={()=>setChoose("Scissors")}>Scissors</button>
       <h1>You Chooseed {choose} </h1>
    </div>
  )
}

export default App
