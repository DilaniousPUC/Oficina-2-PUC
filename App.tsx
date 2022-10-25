import { useState } from 'react'
import reactLogo from './assets/react.svg'
import teste from './assets/sum.png'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [resultado, setResultado] = useState(count - count1)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={teste} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Operations basics</h1>
      {/*<input type="text" onChange={(e) => setText(e.currentTarget)}/>
      <HelloWorld text={text} />*/}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          1st term {count}
        </button>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          2sec term {count1}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setResultado((resultado) => count + count1)}>
          +
        </button>
        <button onClick={() => setResultado((resultado) => count - count1)}>
          -
        </button>
        <button onClick={() => setResultado((resultado) => count / count1)}>
          /
        </button>
        <button onClick={() => setResultado((resultado) => count * count1)}>
          *
        </button>
      </div>
      <div className="card">
        <p>
          Result: {resultado}
        </p>
        <button onClick={() => {setCount(0); setCount1(0); setResultado(0)}}>
          Reset
        </button>
      </div>
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>*/}
    </div>
  )
}

export default App
