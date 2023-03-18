import React from 'react'
import './header.css'
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Navbar  from "../../components/navbar/Navbar"

import { Signin, Signup, Products } from '../../pages/import'
const Header = () => {
  return (
    <>
    <Router>
        <Navbar/>


       <div className='routes__container'>
       <Routes>
          <Route path='/' exact  Component={Products} />
          <Route path='/signin'  Component={Signin} />
          <Route path='/signup'  Component={Signup}/>
        </Routes>
       </div>
     </Router>
    
    </>
  )
}

export default Header