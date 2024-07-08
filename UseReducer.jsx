import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState  = {inc:0,dec:0}

    const reducer = (state,action)=>{

        // console.log(state,'state')
        // console.log(action,'action')

        switch (action.type) {   
        case "inc":
            return {inc: state.inc + 1};
            case "dec":
                return {...state,dec :state.dec - 1};

                default:
                    return  state;
        }



    }

const [state,dispatch] = useReducer(reducer,initialState)



  return (
    <div>UseReducer

          <button onClick={()=>dispatch({type:"inc"})}>Inc {state.inc}</button>  
          <button onClick={()=>dispatch({type:"dec"})}>Dec {state.dec}</button>  

    </div>
  )
}

export default UseReducer