import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const { id } = useParams();

  return (
    <div>
      <p>User: <b>{ id }</b></p>
    </div>
  )
}

export default User