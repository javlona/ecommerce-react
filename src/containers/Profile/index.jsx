import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const data = useSelector(state => state.auth.user)
  return (
    <div>
      <h1>Profile</h1>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </div>
  )
}

export default Profile