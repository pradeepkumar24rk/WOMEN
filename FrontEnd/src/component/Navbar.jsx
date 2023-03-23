import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const link={
    textDecoration:"none",
    color:"white"
}

const Navbar = () => {
  return (
    <Container>
        <Left>
            <nav>
                <ul>
                    <Link to='/Home' style={link}><li>Home</li></Link>  
                    <Link to='/Career' style={link}><li>careerguide</li></Link>
                    <Link to='/Thoughts' style={link}><li>Thoughts</li></Link>
                </ul>
            </nav>

        </Left>
        <Middle>
            <Span>Women Journey</Span>
        </Middle>
        <Right>
            <Span>Madhumitha</Span>
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