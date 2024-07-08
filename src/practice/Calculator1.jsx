import React, { useState } from 'react'

const Calculator1 = () => {
    const [calValues,setcalValues]  = useState("")
    const [result,setResult]  = useState(null)

const handleItems = (calItems)=>{
if(calItems==="="){
    // setResult()
    handleCalculator()



}else if(calItems==="ac"){
   
    setcalValues("")
    setResult(null)
    console.log("ac")

}else{
    setcalValues(calValues+calItems)
}

}

const     handleCalculator = ()=>{
try{
    setResult(eval(calValues))
    console.log(result,"result")

}catch(error){
    setResult('Error')

    console.log('error',"error")

}

}
  return (
    <div>
        
        <h1>{calValues}</h1>
        <h4>{result}</h4>
        {['7','8','9','4','5','6','3','2','1','=','+','-','/','*','0','ac'].map((calItems)=>(
            <>
            <button key={calItems} value={calItems} onClick={()=>handleItems(calItems)}>{calItems}</button>
            </>

        ))}
    </div>
  )
}

export default Calculator1