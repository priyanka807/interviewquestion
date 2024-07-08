
import React from 'react'
import './iinfinitive.css'
import { useState,useEffect } from 'react';
const InfinitiveBaller = () => {
    const [inc,setInc] = useState(0)
    const [active,setActive] = useState([
        { active:true },      
        { active:false },
        { active:false }
      ]
    );
   const limit = 1
   useEffect(()=>{

   },[active])
const infinitiveBaller = ()=>{

    setInc((prev)=>(prev+limit+active.length)%active.length)
//  const interval = setInterval(()=>{

//    })
}
  return (
    <>
    {/* <div className="infinitive-container">
    {active.map((items,id) => (
            <div className="items" key={id}  onClick={infinitiveBaller}>{items.active&&'=>'}</div> 
        ))}
    </div> */}
     {/* const findIndex = active.findIndex((item)=>item.active===true)  
  if(findIndex===0 && findIndex!==-1){
   const updateActive = active.map((item,index)=>({...item,active:index===findIndex+1}))
  setActive(updateActive)
   console.log(updateActive,'update')
  }
    
    setInc((prev)=>(prev+limit+active.length)%active.length)

    console.log(inc,'inc')   */}
    </>
  )
}

export default InfinitiveBaller