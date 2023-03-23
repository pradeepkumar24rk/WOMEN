import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Career from './Career'
import Thoughts from './Thoughts'
import About from '../component/About'
const NavPage = () => {
  return (
    <div className='NavPage'>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Career' element={<Career/>}/>
            <Route path='/Thoughts' element={<Thoughts/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default NavPage