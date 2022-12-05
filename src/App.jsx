import { useState } from 'react'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
    </div>
  )
}

export default App
