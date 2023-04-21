import React,{useState} from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchInput,setSearchInput]=useState('');
  const navigate = useNavigate();
  const handleSearch=(e)=>{
    e.preventDefault();

    navigate(`/About/${searchInput}`)    
}
  return (
    <Container>
      <Women>
        <Span>
            Women
        </Span>
        <Search onSubmit={handleSearch}>
            <Input type='text' placeholder='Search Women Jouney' required  value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}></Input>
            <BsSearch  style={{color:"white",fontSize:25,marginRight:20}}/>
            <button type='submit'></button>
        </Search>
      </Women>
    </Container>
  )
}

export default Home

const Container = styled.div`
     display: flex;
     background: linear-gradient(
      rgba(201, 201, 201, 0.397),
      rgba(255, 255, 255, 0.116)
    ),
    url("https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&w=1600")
      center;
    justify-content: center;
    align-items: center;
    height: calc( 100vh - 10vh );
    background-repeat: no-repeat;
    background-size: cover;
`
const Women =styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;

`
const Span =styled.span`
font-size: 300px;
color: white;

`
const Search =styled.form`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 20px;
    
`
const Input=styled.input`
padding: 20px;
width:700px ;
border: none;
font-size: 24px;
color: white;
::placeholder{
    color:#ffffff7a;;
    font-size: 24px;
}
&:focus{
    outline: none;
}
background-color:rgba(201, 201, 201, 0);

`
