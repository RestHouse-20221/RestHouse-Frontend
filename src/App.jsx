import { useState } from 'react'

// COMPONENTS
import Navbar from './Components/Navbar/Navbar'
// import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
    </div>
  )
}

export default App
