import { useContext } from "react"
import CounterContext from "./CounterContext"


const UseContextComponent = () => {

    const { increment,decrement ,count,check} = useContext(CounterContext)
  return (
    <div>
           <button onClick={increment}>inc {count}</button> 

   <button onClick={decrement}>dec {count}</button> 
<p>{check}</p>
    </div>
  )
}

export default UseContextComponent