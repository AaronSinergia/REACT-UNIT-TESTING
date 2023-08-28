import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [text, setText] = useState(' ')
  const handleInput = (e) => setText(e.target.value)

  return (
   <div className='App'>
    
      <img data-testid="gifer" src="https://qph.cf2.quoracdn.net/main-qimg-8b9d64dd7a997f9c55116b167429a478" alt="gifer" />
      <div>
        <input 
          type="text" 
          onChange={handleInput} 
          placeholder='Type your name'/>
        <h1>Hello {text}</h1>
      </div>
      <Footer />
   </div>
  )
}

export default App
