import React from 'react'

import { useParams } from "react-router-dom";

const Workout = () => {

  const { userId} = useParams();

  return (
    <div>Workout of {userId} </div>
  )
}

export default Workout