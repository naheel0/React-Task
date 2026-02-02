import React, { useEffect, useState } from 'react'

export default function TrafficLight() {
  const [light,setLight]=useState('red')
  useEffect(()=>{
    const interval=setInterval(()=>{
      setLight((l)=>{
        if(l==='red')return 'yellow'
        if(l==='yellow')return 'green'
        return 'red'
      })
    },3000)
    return ()=>clearInterval(interval)
  },[])
  return (
    <div style={{
      width:80,
      borderRadius:'10px',
      backgroundColor:'black',
      padding:"10px"
    }}>
      {['red','yellow','green'].map((c)=>(
        <div key={c} style={{
          width:50,
          height:50,
          margin:'10px auto',
          borderRadius:'50%',
          backgroundColor:light===c?c:'gray'
        }}></div>
      ))}
    </div>
  )
}
