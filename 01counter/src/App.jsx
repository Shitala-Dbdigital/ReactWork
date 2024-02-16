import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15) 
 //let counter = 5;
 const addvalue = () =>{
  if(counter < 20){
//counter = counter + 1;
setCounter(prevCounter=> prevCounter+1)
setCounter(prevCounter=> prevCounter+1)
setCounter(prevCounter=> prevCounter+1)
setCounter(prevCounter=> prevCounter+1)
setCounter(prevCounter=> prevCounter+1)
  }
 }
 const removevalue =()=>{
  if (counter > 0){
  setCounter(counter - 1)
  }
 }

  return (
    <>
     <h1>sheetal aur code</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addvalue}>Add Value {counter}</button>
     <br/>
     <button onClick={removevalue}>Remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
