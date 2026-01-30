import React from 'react'
import axios from 'axios'

// const PostApi = () => {

    const api = axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/posts"
    });


    // get method

    export const getPost =() =>{
        return api.get("/posts");
    }
//   return (
//     <div>PostApi</div>
//   )
// }

// export default PostApi