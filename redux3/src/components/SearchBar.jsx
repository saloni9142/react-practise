import React, { useState } from 'react'
import {useDispatch} from "react-redux"

const SearchBar = () => {
    const [text,setText] =useState('')

    const dispatch = useDispatch()
    const submithandler =(e) =>{
         e.preventDefault()
         dispatch(setQuery(text))
         
        console.log("form submitted");
        setText('')
       
        
        
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submithandler(e)
        }}
        className='flex bg-gray-900 gap-5 py-10 px-14'>
            <input 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            required
            className=' w-full border-2 px-2 py-2 text-xl rounded outline-none'
            type="text" placeholder='Search anything...' />
            <button className='active:scale-95 cursor-pointer border-2 px-2 py-2 text-xl rounded outline-none'>search </button>
        </form>
    </div>
  )
}

export default SearchBar