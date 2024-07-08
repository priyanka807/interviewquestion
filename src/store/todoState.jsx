



import React, { useState } from 'react'
import TodoStore from './todoStore';

const TodoState = ({children}) => {
const [todo,setTodo]  = useState("todo")
const check = "hello priyanak"

  return (
    <>
     {/* <TodoStore.Provider  value={{ check}}>{children}</TodoStore.Provider > */}
 <TodoStore.Provider  value={{todo,check}}>
    {children}
    </TodoStore.Provider>

</>
  )
}

export default TodoState;

// import { useState } from "react";
// import  TodoStore from "./todoStore";


// const CounterProvider = ({children}) => {
//     const [count,setCount] = useState(1)
// const check = "value"
// const increment = () => setCount(count + 1);
// const decrement = () => setCount(count - 1);
//   return (
   
//     <TodoStore.Provider value={{ increment,decrement ,count,check}}>{children}</TodoStore.Provider >
//   )
// }

// export default CounterProvider;











