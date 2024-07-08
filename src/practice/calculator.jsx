import React, { useState } from 'react'

const CalculatorComponent = () => {
  const [result,setresult] = useState('')

  const [storeMultipleValue,setstoreMultipleValue] = useState('')


  const handleCalculation = ()=>{

    try{
setresult(eval(storeMultipleValue))
    }catch(error){
      setresult('Error')
    }


  }
 

  const handleCalculatorButton = (value)=>{
    if(value==="="){
   
      handleCalculation()
    }else if (value==="reset"){
      setstoreMultipleValue('')
      setresult(null)
    console.log("reset")
    }else{
      setstoreMultipleValue(storeMultipleValue + value)

    
     
    
    }
   

  }

console.log(result,'result')
  return (
    <div>
    <h1>{storeMultipleValue}</h1>
<h5>{result!==null?result:''}</h5>
  
      {['7','8','9','4','5','6','1','2','3','+','%','0','-','=','reset'].map((value,index)=>(
        <>
        <button key={index}  onClick={()=>handleCalculatorButton(value)}>{value}</button>
        </>
      ))}
    </div>
  )
}

export default CalculatorComponent