import React, { useState } from 'react'

const App = () => {
  const fruits=["Apple","BAnana","Orange"]
  const [search,setSearch]= useState("")

const filtered= fruits.filter(item=>
  item.toLowerCase().includes(search.toLowerCase())
) 

  return (
    <div>
<input
type="text"
placeholder='text'
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
<ul>
  {filtered.map((item,index)=>{
   return <li key={index}>{item}</li>
  })

  }
</ul>


    </div>
  )
}

export default App