import './App.css';
import React, { useState } from 'react';

function App(){
   const [color,setColor]=useState(false)
   const handleColor =()=>setColor(prev => !prev)
   return(
    <div style={{ backgroundColor: color ? 'black' : 'white' }} className='mainDiv'>
      <button onClick={handleColor} className='btn btn-success'>Switch Theme</button>
    </div>
   )
}


export default App;
