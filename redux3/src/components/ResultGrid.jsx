import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import fetchPhotos, { fetchVideos } from '../api/mediaApi'

const ResultGrid = () => {
    const {query,activeTab,results,loading,error} =useSelector((store)=> store.search)

    
        useEffect (()=>{
            const getData = async()=>{
             let data
        if(activeTab=='photos'){
           let  response=await fetchPhotos(query)
           data=response.results.map((item)=>({
           id: item.id,
           type : 'photo',
           title: item.alt_description,
           thumbnail : item.urls.small,
           src : item.urls.full
           }));
          
     }
     if(activeTab=='videos'){
              let response= await fetchVideos(query)
              data = response.videos
            // console.log(data);
     }}
     getData()
          },[query,activeTab])
       
    
  return (
    <div>
        <button>Get Data</button>
    </div>
  )
}

export default ResultGrid