import React from 'react'

const App = () => {
  function inputChanging(val){
    console.log(val)

  }
  return (
    <div>
     <input onChange={function(elem){
      inputChanging(elem.target.value);
      
     }}
     type="text"
     placeholder='enter name'/>
    </div>
  )
}

export default App