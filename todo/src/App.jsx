import React from 'react'
import { useState } from 'react'

const App = () => {
const [text, setText] = useState("")
const [todos, setTodos] = useState([])
const addTodo =()=>{

  if(text=== "") return;
   setTodos([...todos,text]);   //...todos (Spread Operator): Ye purani saari todos list ki ek copy banata hai.
                                 //text: Us copy ke aakhri mein naya text (jo user ne likha hai) jod deta hai.
  setText("")                    //aise hi todo add ho jata hai, hum input box ko khali kar dete hain taaki user naya todo likh sake. Isse User Experience (UX) accha hota hai.
}

const removeTodo =(index) =>{
 const newTodo= todos.filter((_,i)=> i !==index)
 setTodos(newTodo);


}
const toggle = (indexToChange) => {
  const updatedTodos = todos.map((item, index) => {
    if (index === indexToChange) {
      // Sirf is wale item ko badlo
      return { ...item, completed: !item.completed };
    }
    // Baaki sab items ko waise hi rehne do
    return item;
  });
  
  setTodos(updatedTodos);
};
  return (
    // <div>
    //   <input 
    //   value={text}
    //   onChange={(e)=>{
    //     setText(e.target.value)
    //   }}
    //   />
    //   <p>{text}</p>
    //   <button onClick={addTodo}>Add</button>
    //   <ul>
    //    { todos.map((todo,index)=>(
    //       <li key={index}>{todo}
    //       <button onClick={()=>removeTodo(index)}>delete</button>

    //        <button onClick={()=>toggle(index)}>toggle</button>
    //       </li>
    //     )) }
    //   </ul>
      
    // </div>

    <>
    <input
    type="text"
    value={text}
    onChange={(e)=>{
     setText (e.target.value)
    }}
   
    />

     <button onClick={addTodo}>add</button>
     {
      <ul>
        {
        todos.map((item,index) =>(
          <li key={index}  style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item}
          <button onClick={()=>removeTodo(index)}>delete</button>
<button onClick={()=>toggle(index)}>toggle</button></li>
          

        ))
}

      </ul>
     }
    </>
  )
}

export default App

// toggle