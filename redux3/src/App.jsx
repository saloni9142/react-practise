
   import React from 'react'
import fetchPhotos, { fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from "./components/Tabs"
import ResultGrid from './components/ResultGrid'
   
   const App = () => {
    
    
    
    
     return (
       <div className='h-screen w-full bg-blue-700'>
        {/* <button className= 'bg-blue-700  px-4 py-2 m-5' onClick={async()=>{
         const data= await fetchPhotos('cat')
         console.log(data.results);
         
        }}>Get photos</button>
        <button className=' bg-blue-700  px-4 py-2 m-5' onClick={async()=>{
         const data= await fetchVideos('cat')
         console.log(data.videos);
         
        }}>Get videos</button> */}

        <SearchBar/>
        <Tabs/>
        <ResultGrid/>
       </div>
     )
   }
   
   export default App