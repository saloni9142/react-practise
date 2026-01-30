import React from 'react'
import { useState } from 'react'

const App = () => {
const [text, setText] = useState("")
const [todos, setTodos] = useState([])
const addTodo =()=>{

  if(text=== "") return;
  setTodos([...todos,text]);
  setText("")
}

const removeTodo =(removeIndex) =>{
 const newTodo= todos.filter((_,index)=> index !==removeIndex)
 setTodos(newTodo);


}

const toggle=(index)=>{
  const newTodos=[...todos];
  newTodos[index].completed=!newTodos[index].completed;
  setTodos(newTodos);

}


  return (
    <div>
      <input 
      value={text}
      onChange={(e)=>{
        setText(e.target.value)
      }}
      />
      <p>{text}</p>
      <button onClick={addTodo}>Add</button>
      <ul>
       { todos.map((todo,index)=>(
          <li key={index}>{todo}
          <button onClick={()=>removeTodo(index)}>delete</button>

           <button onClick={()=>toggle(index)}>toggle</button>
          </li>
        )) }
      </ul>
      
    </div>
  )
}

export default App

// toggle