import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15); //hooks to update all counter reference all at once

  const addValue = () => {
    if (counter < 20) {
      // If you want to update like 4 number at once, this will not work and it updates in batches
      // as it is doing the same thing, the useState will send this in batches and will only update it once
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      //Update like 4 number at once
      // it is a callback function which fetches the previos number and then updates it accordingly/
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  
  return (
    <>
      <h1> Basic Counter </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
