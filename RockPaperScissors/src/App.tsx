import { useState } from 'react'
import './App.css'
import Headers from "./Components/Headers"
import Rock from "./Components/Rock"
import Paper from "./Components/Paper"
import Scissors from ".Components/Scissors"

function App() {
  const [choose, setChoose] = useState("Choose One")
  return (
    <div className="main">
      <Headers/>
      <button onClick={()=>setChoose("ROCK")}>ROCK</button>
      <button onClick={()=>setChoose("PAPER")}>PAPER</button>
      <button onClick={()=>setChoose("SCISSORS")}>SCISSORS</button>
      <button onClick={(()=>setChoose("Choose One"))}>RESET</button>
      {choose ==="ROCK" && <Rock/>}
      {choose ==="PAPER" && <Paper/>}
      {choose ==="SCISSORS" && <Scissors/>}
    </div>
  )
}

export default App
