import React, { useEffect, useState } from 'react'

const Stoppausereset = () => {
    const [start,setStart] = useState()
    const [count,setCount] = useState(0)
    useEffect(()=>{
        let interval ;
        interval = setInterval(()=>{
            clearInterval(interval)
 if(start){
    setCount((prev)=>prev+1)

 }
 
 

        },100)

return ()=>clearInterval(interval)

    },[start,count])
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setStart(true)}> start</button>
      <button  onClick={()=>setStart(false)}>pause</button>
      <button  onClick={()=>setCount(0)}>reset</button>  
        
        </div>
  )
}

export default Stoppausereset 