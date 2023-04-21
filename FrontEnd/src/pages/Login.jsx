import styled from "styled-components"
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../component/auth";

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
width: 35%;
padding: 20px;
height: 400px;
background: rgba( 2, 2, 2, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
color: white;

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
padding:14px;
font-size: 15px;
border-radius: 10px;
border: 2px solid gray;
&:focus{
border-color: #d1d1d1;
outline: none;
}

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
  const auth=useAuth();


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(reg);
    axios.post('http://localhost:5001/api/auth/login',{            //api call
      username:reg.name,
      password:reg.password
    })
      .then(res=>{
        console.log(res.data.username);
        auth.login(res.data.username)
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
            type={"password"}
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



