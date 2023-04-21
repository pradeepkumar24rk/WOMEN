import React, { useState } from 'react'
import styled from 'styled-components'
import ImageUpload from '../component/ImageUpload'

const PostPerson = () => {
    const [details,setDetails]=useState()
  return (
    <Container>
      <Wrapper>
        <Left>
            {/* <ImageUpload/> */}
            left
        </Left>
        <Right>
            right
        </Right>
      </Wrapper>
    </Container>
  )
}

export default PostPerson

const Container=styled.div`

`
const Wrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left =styled.div`
flex: 1;
    
`
const Right=styled.div`
        flex: 1;
`