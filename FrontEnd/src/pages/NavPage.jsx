import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Career from './Career'
import Thoughts from './Thoughts'
import About from '../component/About'
import PostPerson from './PostPerson'
const NavPage = () => {
  return (
    <div className='NavPage'>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Career' element={<Career/>}/>
            <Route path='/Thoughts' element={<Thoughts/>}/>
            <Route path='/About/:searchInput' element={<About/>}/>
            <Route path='/PostPerson' element={<PostPerson/>}/>
        </Routes>
    </div>
  )
}

export default NavPage