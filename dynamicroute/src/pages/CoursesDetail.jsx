import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
    const params =useParams()
    console.log(params.id);
    
  return (
    <div >
      <h1 > {params.courseId}course details</h1>

    </div>
  )
}

export default CoursesDetail