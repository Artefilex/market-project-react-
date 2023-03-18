import React from 'react'
import "./navbar.css"
import {  NavLink } from "react-router-dom"
import { Button} from '@chakra-ui/react'
const Navbar = () => {
    return (
       
            <nav className='navbar'>
                <div className='navbar__left'>
                 <div className="navbar__left-logo">
                    <NavLink to="/"> Artefilex </NavLink>
                 </div>
                 <ul className='navbar__left-menu'>
                    <li>
                    <NavLink to="/">Products</NavLink>
                    
                    </li>
                 </ul>
                </div>
                <div className='navbar__right'>
                <NavLink to="/signin">
                    <Button colorScheme='blue'>Login</Button>

                </NavLink>
                <NavLink to="/signup">
                    <Button colorScheme='blue'>Register</Button>
                 </NavLink>
                </div>
               
                
               
                
            </nav>
        
    )
}

export default Navbar