
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [recode,setRecode]=useState([])

   useEffect(()=>{
      fetch("https://dummyjson.com/quotes")
      .then(res => res.json())
      .then(data =>setRecode(data.quotes.slice(0, 10)))
      .catch(err =>console.log(err))
   },[])
  return (
    <div className='main-div'>
       <ul>
        {recode.map((list,index)=>(
          <li key ={index}> <h1>{list.quote}</h1></li>
        ))}
       </ul>
    </div>
  )}

export default App;
