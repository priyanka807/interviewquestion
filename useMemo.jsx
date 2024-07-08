


import React, { useCallback, useMemo,memo ,useState,useEffect, useRef  } from 'react'


const UseMemo = ({data}) => {
    const mutableVarible  = useRef(0)
const ref = useRef("")
useEffect(()=>{
    ref.current.focus()
},[mutableVarible])
console.log(ref.current)

const [first,setFirst] = useState(1)
const [second,setSecond] = useState(1)
const [targetDate,setTargetDate] = useState("")

// const  isEven  = useMemo(()=>{



// },[first])

const isEven =  useCallback(()=>{
    // console.log('execute this function on the sec element also')
 
return   first%2===0
  

},[first])
const handleMutableVariable = ()=>{
    mutableVarible.current =  mutableVarible.current +1 
    alert(`useRef : can access dom directly using useRef  and create mutable variable which will not re-render  ${mutableVarible.current}`)
}
// console.log(isEven,'isEven')

  return (
    <div>
        {/* {data&&`this is coming through props`}
    <button onClick={()=>setFirst(first+1)}>first {first}</button>    
{isEven?'even':"odd"}

    <button onClick={()=>setSecond(second-1)}>second  {second}</button>     */}


<input type="date" name="data" id="date"  value={targetDate}  ref={ref}  onChange={(e)=>setTargetDate(e.target.value)}/>
<button onClick={handleMutableVariable}>mutable variable which we will not re-render </button>     

    </div>
  )
}

export default memo(UseMemo)