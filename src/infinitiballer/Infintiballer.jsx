import React, { useState, useEffect } from 'react';
import '../index.css';
import { FaArrowRight } from 'react-icons/fa';

const Infintiballer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [click, setClick] = useState(false);

  const items = ['1', '2', '3'];
 

  useEffect(()=>{
let interval;
if(isRunning){
    interval = setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1)%items.length)
        clearInterval(interval)
    },1000)
}else{
    clearInterval(interval)
}

return ()=>clearInterval(interval)
  },[isRunning,currentIndex,items.length])



 


//   {`item ${index === currentIndex ? 'active' : ''}`} 
  return (
    <div className='main'>
     {items.map((items,index)=>(
        <div className={`item  ${index===currentIndex?'active':''}`}   key={index} onClick={()=>setIsRunning(!isRunning)}>
{items} {index===currentIndex && <FaArrowRight className='arrow'/>}
        </div>
     ))}
    </div>
  );
};

export default Infintiballer;
