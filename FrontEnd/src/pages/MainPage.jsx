import React from 'react'
import Navbar from '../component/Navbar'
import NavPage from './NavPage'
import Footer from '../component/Footer'


const MainPage = () => {
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div style={{overflow:'hidden'}}>
            <NavPage/>
        </div>
        <div>
          <Footer/>
        </div>
    </>
  )
}

export default MainPage