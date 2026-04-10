import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs =['photos' , 'videos']

    const dispatch = useDispatch()
    useSelector((state)=> state.search.activeTabs)
  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem,idx){
            return <button className='bg-gray-600 px-5 py-2' key ={idx}
            onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}
            >{elem}</button>
        })}
    </div>
  )
}

export default Tabs