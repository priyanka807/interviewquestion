import React, { useEffect, useState } from 'react'

const InfinitiBaller = () => {
    const items = [1,2,3,4]
    const [currentIndex,setCurrentIndex] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
let interval;
interval = setInterval(()=>{
    clearInterval(interval)
    if(isRunning){
setCurrentIndex((prev)=>(prev+1)%items.length)
    }else{
        clearInterval(interval) 
    }
},1000)

return ()=>clearInterval(interval)
    },[isRunning,items.length,currentIndex])
  return (
    <div className='main'>
{items.map((items,index)=>(
    <div className={`item   ${index===currentIndex?'active':''}`} key={index} onClick={()=>setIsRunning(!isRunning)}>
{items}
    </div>
))}

    </div>
  )
}

export default InfinitiBaller