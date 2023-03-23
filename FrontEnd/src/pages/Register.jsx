import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;

`;

const Input = styled.input`
flex: 1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;

`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;

`;

const Button = styled.button`

width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;


`;


const Register = () => {
  const [reg,setReg]=useState({name:"",email:"",password:""});
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(reg);
    axios.post('http://localhost:5001/api/auth/register',{            //api call
      username:reg.name,
      email:reg.email,
      password:reg.password
    })
      .then(response=>{
        navigate("/");
      })
      .catch(error=>{
        console.log(error);
      })
  }
  return (
   <Container>
    <Wrapper>
        <Title>Create an account</Title>
        <Form onSubmit={handleSubmit}>
            
            <Input placeholder="username" type={Text}
            value={reg.name} 
            onChange={
              (e)=>{
                setReg({...reg,name:e.target.value});
              }
            }/>
            <Input placeholder="email"
            type={Text}  value={reg.email} 
            onChange={
              (e)=>{
                setReg({...reg,email:e.target.value});
              }
            }/>
            <Input placeholder="password" type={Text}
            value={reg.password}
            onChange={
              (e)=>{
                setReg({...reg,password:e.target.value})
              }
            }/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">
                CREATE
            </Button>
        </Form>
    </Wrapper>
   </Container>
  )
}


export default Register
