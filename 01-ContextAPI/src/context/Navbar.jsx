import React, { useState, createContext, useContext } from 'react'
import NavLink from './NavLink'

export const NavbarContext =  createContext(null);

// custom hook
export const useAppContext = ()  => useContext(NavbarContext)

const Navbar = () => {
    const [user, setUser] = useState({name:'bob'})
    const logout = () =>{
        setUser(null);
    }

    return (
        <NavbarContext.Provider value={{user, logout}}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLink />
            </nav>
        </NavbarContext.Provider>
    )
}

export default Navbar
