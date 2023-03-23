import React from 'react'
import styled from 'styled-components';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { BsFacebook ,BsFillTelephoneFill} from 'react-icons/bs';
import { FaInstagram,FaTwitter,FaPinterestP,FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail} from 'react-icons/md';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';

const Container=styled.div`
  //  background-color:red;
   display:flex;
   
   
`

const Left=styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;

`
const Logo=styled.h1`

`

const Desc=styled.p`
margin:20px 0px;
`

const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
margin-right:20px;
width:40px;
height:40px;
border-radius:50%;
background-color:#${props=>props.color};
color:white;
display:flex;
align-items:center;
justify-content:center;

`


const Center=styled.div`
  flex:1;
  padding:20px;
`
const Title=styled.h3`
margin-bottom:30px;
`
const List=styled.ul`
  margin:0px;
  padding:0px;
  
  display:flex;
  flex-wrap:wrap;
  list-style:none;

`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`





const Right=styled.div`
  flex:1;
  padding:20px;
`
const ContactItem=styled.div` 
display:flex;
align-items:center;
margin-bottom:20px;
`
const Payment=styled.img`
width:50%
`


// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;


const Footer = () => {
  return (
    <Container>

      <Left>
          <Logo>Women Journey</Logo>
          <Desc>“The word ‘female,’ when inserted in front of something, is always with a note of surprise. Female COO, female pilot, female surgeon — as if the gender implies surprise … One day there won’t be female leaders. There will just be leaders.”</Desc>
          <SocialContainer>
            <SocialIcon color='385999'>
              <BsFacebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
              <FaInstagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
              <FaTwitter/>
            </SocialIcon>
            <SocialIcon color='E60023'>
              <FaPinterestP/>
            </SocialIcon>
          </SocialContainer>
      </Left>

      <Center>
          <Title>Useful Link</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>
          </List>
      </Center>

      <Right>
          <Title>Contact</Title>
          <ContactItem><FaMapMarkerAlt style={{marginRight:"10px"}}/>313E ,Dubai Main road,Dubai</ContactItem>
          <ContactItem><BsFillTelephoneFill style={{marginRight:"10px"}}/>987654321</ContactItem>
          <ContactItem><MdMail style={{marginRight:"10px"}}/>shop@gmail.com</ContactItem>
          <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'></Payment>
      </Right>

    </Container>
  )
}

export default Footer