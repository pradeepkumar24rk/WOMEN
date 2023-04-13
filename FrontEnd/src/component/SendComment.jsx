import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineSend} from 'react-icons/ai'
import axios from 'axios'
import { useAuth } from './auth'

const SendComment = () => {
    const auth=useAuth()
    const [comment,setComment]=useState('')
    const handlecomment=(e)=>{
        e.preventDefault();
        console.log(comment);
      axios.post('http://localhost:5001/api/post/comments',{
            username:auth.user,
            comment:comment,
      })
      .then((res)=>{
        console.log(res.data);
        setComment("");
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    
  return (
    <Container>
        <Heading>Share Your Comments</Heading>
        <Sending>
            <form onSubmit={handlecomment} style={forms}>

            <Input typeof='string' value={comment} onChange={(e)=>setComment(e.target.value)}></Input>
            <SendButton type='submit'><AiOutlineSend style={{fontSize:30,color:"white"}}/></SendButton>
            </form>
        </Sending>
    </Container>
  )
}

export default SendComment

const Container = styled.div`
    margin-left: 50px;

`
const forms={
    display:"flex",
    alignItems:"center"
}
const Heading = styled.h1`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-bottom: 10px;
color: white;

`
const Sending = styled.div`
display: flex;
align-items: center;
gap: 10px;
overflow: hidden;
`
const Input = styled.textarea`
padding: 20px;
width: 400px;
font-size: 20px;
background: #f1eef129;
color: white;
&:focus{
    outline: none;
}
`
const SendButton = styled.button`
padding: 10px;
background-color: var(--lgreen);
border: none;
border-radius: 10px;
&:hover{
    background-color: #e2c185;
}

`