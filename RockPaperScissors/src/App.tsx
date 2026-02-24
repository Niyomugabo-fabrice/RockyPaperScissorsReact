import { useState } from 'react'
import './App.css'
import Headers from "./Components/Headers"

function App() {
  const [choose, setChoose] = useState("")
  return (
    <div className="main">
      <Headers/>
      <h1>You Chooseed {choose} </h1>
      <button onClick={()=>setChoose("Rocky")}>Rock</button>
      <button onClick={()=>setChoose("Paper")}>Paper</button>
      <button onClick={()=>setChoose("Scissors")}>Scissors</button>
      <div className="bought"></div>
    </div>
  )
}

export default App
