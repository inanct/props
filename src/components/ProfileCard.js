import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className='border flex flex-col items-center justify-center '>
    <h2 className='text-2xl font-bold'>Profile Card</h2>
    <p>Name: {props.user.name}</p>
    <p>Surname: {props.user.surname}</p>
    <p>Age: {props.user.age}</p>
    <p>Gender: {props.user.gender}</p>

    </div>
  )
}

export default ProfileCard