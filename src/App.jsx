import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   // let counter = 5;
   let [counter , setCounter] = useState(0)
   const Addvalue = () => {
     // console.log("Value added",Math.random());
     if (counter < 30) {
       setCounter(counter + 1)
     }else{
       ""
     }
     }  
   return (
     <>
      <h1>Counter Project</h1>
      <h1>Counter Count : {counter} </h1>
      <button style={{marginRight:20}} onClick={Addvalue}>Add Button</button>
      <button onClick={() => {
       (counter>0)?setCounter(counter - 1) : ""
       }}>Remove button </button>
      <h1>footer : {counter}</h1>
     </>
   )
}

export default App
