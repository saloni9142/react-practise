import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=10'
    )
    setUserData(response.data)
    console.log("data aa gya")
  }

  useEffect(function(){
    getData()

  },[])
  let printUserData= "no user available"
  if(userData.length>0){
    printUserData= userData.map(function(elem,idx){
      return <div>
        <a href={elem.url} target='_blank'>
        <img src={elem.downloading_url} alt=""/>
        </a>
      </div>
    })
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="flex gap-4 flex-wrap mt-4">
        {userData.length > 0
          ? userData.map((elem, idx) => (
              <img
                key={idx}
                className="h-40"
                src={elem.download_url}
                alt="img"
              />
            ))
          : "No User Available"}
      </div>
    </div>
  )
}

export default App
