import React from 'react'
import { useParams } from "react-router-dom";


const Nutrition = () => {

  const { userId} = useParams();


  return (
    <div>Nutrition of {userId} </div>
    
  )
}

export default Nutrition