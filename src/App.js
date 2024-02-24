import React from 'react'
import ProfileCard from './components/ProfileCard'

const App = () => {
  //user information
  const user = {
    name:"John",
    surname:"Doe",
    age:"25",
    gender:"male",
  }
  return (
    <div>
      <ProfileCard user={user}/>
    </div>
  )
}

export default App