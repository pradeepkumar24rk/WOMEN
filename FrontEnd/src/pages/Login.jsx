import styled from "styled-components"
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
// width: 100vw;
height:calc( 100vh - 10vh);
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
display:flex;
justify-content:center;
align-items:center;
overflow-y:hidden;


`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
height: 400px;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
border-radius: 20px;

margin-left: 190px;

`;
const link ={

  margin: "5px 0px",
  fontSize:"22px",
  
  cursor: "pointer",
}


const Form = styled.form`
display:flex;
flex-direction:column;

`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
padding:30px 0;

`;

const Input = styled.input`
flex: 1;
min-width:40%;
margin:10px  0px;
padding:20px;
font-size: 18px;

`;


const Button = styled.button`

width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;

`;


const Login = () => {
  const [reg,setReg]=useState({name:"",password:""});
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(reg);
    axios.post('http://localhost:5001/api/auth/login',{            //api call
      username:reg.name,
      password:reg.password
    })
      .then(response=>{
        console.log(response);
        navigate("/Home")
      })
      .catch(error=>{
        console.log(error);
      })
  }
  return (
   <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Username"
            type={Text}
            value={reg.name} 
            onChange={
              (e)=>{
                setReg({...reg,name:e.target.value});
              }
            }/>
            <Input placeholder="Password"
            type={Text}
            value={reg.password}
            onChange={
              (e)=>{
                setReg({...reg,password:e.target.value})
              }
            }/>
          
             <Button type="submit">
                LOGIN
            </Button>
            
            <Link to='/Register' style={link}>Create a New account</Link>
        </Form>
    </Wrapper>
   </Container>
  )
}


export default Login



