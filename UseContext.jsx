import { useState } from "react";
import CounterContext from "./CounterContext";



const CounterProvider = ({children}) => {
    const [count,setCount] = useState(1)
const check = "value"
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
  return (
   
    <CounterContext.Provider value={{ increment,decrement ,count,check}}>{children}</CounterContext.Provider>
  )
}

export default CounterProvider;




