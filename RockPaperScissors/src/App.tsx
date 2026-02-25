import { useState } from 'react'
import './App.css'
import Headers from "./Components/Headers"

function App() {
  const [choose, setChoose] = useState("Choose One")
  return (
    <div className="main">
      <Headers/>
      <h1> {choose} </h1>
      <button onClick={()=>setChoose("You choosed Rock")}>Rock</button>
      <button onClick={()=>setChoose("You choosed Paper")}>Paper</button>
      <button onClick={()=>setChoose("You choosed Scissors")}>Scissors</button>
      <button onClick={(()=>setChoose("Choose One"))}>Reset</button>
    </div>
  )
}

export default App
