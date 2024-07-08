import React, { useState } from 'react'

const Todolist = () => {
const [todo,setTodo] = useState("")
const [todoItem,settodoItem] = useState([])
const [editItem,seteditItem] = useState("")
const [editId,seteditId] = useState(null)
console.log(editItem,'edit')
// const [,set] = useState()

const  handleSubmit = (e)=>{
e.preventDefault();
const trimtodo = todo.trim()
if(trimtodo.length>0){
    settodoItem((prev)=>settodoItem([...prev,todo]))
   
}
setTodo("")
}

const  handleDelete = (deleteIndex)=>{

    
    const deletetodo  = todoItem.filter((_,index)=>index!==deleteIndex)
    settodoItem( deletetodo)
    }

    const  handleEdit = (editItems,editId)=>{
        console.log(editItems,editId,'editItems,editId')

        seteditItem(editItems)
    seteditId(editId)
        }

const handleEditsave = ()=>{
    if(editItem.length>0){
        const editsave = todoItem.map((items,index)=>index===editId?editItem:items)

        settodoItem(editsave)
    }



seteditId(null)
}

  return (
    <div>
<form action=""  onSubmit={handleSubmit}>
    <input type="text"  onChange={(e)=>setTodo(e.target.value)}  value={todo} />
    <button type="submit" >add</button>
</form>
{todoItem&&todoItem.length>0&&todoItem.map((items,index)=>{
    let todoContent ;
if(editId===index){
todoContent = (<><input type="text"   value={editItem}  onChange={(e)=>seteditItem(e.target.value)}/><button  onClick={()=>handleEditsave()}>save</button></>) 
}else{
    todoContent = (<>{items}<button onClick={()=>handleEdit(items,index)}>edit</button></>)
}

return (<ul key={index}>
    <li>{todoContent}<button onClick={()=>handleDelete(index)}>delete</button ></li>  
  </ul>)
})}


    </div>
  )
}

export default Todolist
