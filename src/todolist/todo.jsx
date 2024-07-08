import React, { useContext, useState } from 'react'
import TodoStore from '../store/todoStore'

const Todo = () => {
    // const  {check,todo}  = useContext(TodoStore)
    const [todo,setTodo]  = useState("")
    const [gettodo,setGettodo]  = useState([]) 
    const [editItems,setEditItems]  = useState("") 
    const [editId,setEditId]  = useState(null) 




const handleSubmit = (e)=>{
e.preventDefault();
console.log(todo,'todo')
const todotrim =  todo.trim()
if(todotrim.length>0){
    setGettodo([...gettodo,todo])

}
setTodo("")
}
console.log(gettodo,'gettodo')

const  handleDelete = (deleteId)=>{
const deletetodo = gettodo.filter((items,id)=>id!==deleteId)

setGettodo(deletetodo)
}
const  handleEdit = (items,editId)=>{
    setEditItems(items)
setEditId(editId)

    console.log(items,editId)
   
    }

const handleEditSave = ()=>{
 
    const editSave = gettodo.map((items,index)=>index===editId?editItems:items)
    console.log(editSave,'editItems')

    setGettodo(editSave)
    setEditId(null)
    
    setEditItems("")
}
  return (
    <>
<div className="">
    <form action="" onSubmit={handleSubmit}>
<input type="text" value={todo}  onChange={(e)=>setTodo(e.target.value)}  />
<button type="submit">Add</button>
</form>
</div>
    {gettodo&&gettodo.length>0&&gettodo.map((items,index)=>{
        let todoContent;
if(editmodal){
    console.log('execute this after edit click')
 todoContent = (<><input type="text" value={editItems}  onChange={(e)=>setEditItems(e.target.value)}  /><button  onClick={()=>handleEditSave()}>Save</button></>)
}else{
    console.log(' click  this without edit click')

    todoContent  = (<>{items} <button  onClick={()=>handleEdit(items,index)}>Edit</button>
</>)
}
        
      return ( <ul key={index}>
        <li  > {todoContent}<button  onClick={()=>handleDelete(index)}>delete</button></li>  
        </ul>)
      
    })}    


    
    </>
  )
}

export default Todo