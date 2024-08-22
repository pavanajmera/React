import React, { useContext } from 'react'
import { NavbarContext, useAppContext } from './Navbar'

const UserContainer = () => {
  // const {user, logout} = useContext(NavbarContext); {/* Random use */}
  const {user, logout} = useAppContext(); {/* from custom hook */}
  
  return (
    <div className="user-container">
      {
        user ? (
          <>
            <p>Hello There, {user?.name?.toUpperCase()}</p>
            <button className="btn" onClick={logout}>logout</button>
          </>
        )  
        :
        <p>Please login</p>
      }
    </div>
  )
}

export default UserContainer
