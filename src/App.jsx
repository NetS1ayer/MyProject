import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

          <img src="https://www.thesafaricollection.com/wp-content/uploads/2022/07/The-Safari-Collection-Hey-You-Giraffe-Manor-1.jpg"/>
      </div>
      <h1>My First Ormen</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count your DEBILIZM {count}
        </button>
        <p>
        </p>
      </div>
    </>
  )
}

export default App
