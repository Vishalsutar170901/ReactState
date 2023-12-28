import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] =useState(0);
  function updatecount(){
   setCount(count+1)
  }
  return (
   <>
   <div className='box'>
    <h1>when you clicked on button {count}<br></br>
    <button className='btn' onClick={updatecount}>click</button></h1> 
    </div>
   </>
  );
}

export default App;
