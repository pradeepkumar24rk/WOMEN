import React from 'react'
import styled from 'styled-components'
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from './auth';


const Navbar = () => {
    const auth=useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        auth.user=null;
        navigate('/');

    }
  return (
    <Container>
       {auth.user && 
       <Left>
            <nav>
                <ul>
                    <Nav to='/Home' ><li>Home</li></Nav>  
                    <Nav to='/Career' ><li>careerguide</li></Nav>
                    <Nav to='/Thoughts' ><li>Thoughts</li></Nav>
                </ul>
            </nav>

        </Left>
       } 
        <Middle>
            <Span>Women Journey</Span>
        </Middle>
        <Right>
            {!auth.user ?
                <Nav to='/'>Login</Nav> : <Span onClick={handleLogout} style={{cursor:'pointer'}}>{auth.user}</Span>
            }
        </Right>
      
    </Container>
  )
}

export default Navbar


const Container=styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    font-size: 20px;
    background:#0f121f;
    color: white;
`
const Left=styled.div`
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    li{
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            height: 2px;
            width: 0;
            top: 25px;
            transition: 0.5s;
            /* color: red; */
            background-color: #a19c9c;
        }
        &:hover{
            &::before{
                width: 100%;
            }
      }  
    }

`
const Nav=styled(NavLink)`
  text-decoration: none;
    color:white;
    &.active{
       /* background-color: red; */
       position: relative;
       &::before{
        content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            top: 25px;
            transition: 0.5s;
            /* color: red; */
            background-color: #a19c9c;
       }
    }
`
const Middle=styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-transform: uppercase;
    font-weight: 300px;
    font-size: 30px;
    margin-right: 50px;
`
const Span=styled.span`
    
`
const Right=styled.div`

font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 25px;
    
`