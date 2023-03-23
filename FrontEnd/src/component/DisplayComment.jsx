import React from 'react'
import styled from 'styled-components'

const DisplayComment = () => {
    const comments=[
        {
            Username:'Pradeep',
            Comment:'This is an honest review after watching your tutorials of React and Hooks. I must say that the way you have exaplained the concepts, I don\'t think so anybody else in youtube have explained that well. Also, the way you have structured this course and the examples you gave has helped a lot to understand the concepts very well.  At first I just watched your videos simultaneously practising little bit of it, then I tried to make a simple project using Hooks, and again watched some concepts to understand it better. And trust me now i feel like I have understood most of it and can apply these concepts very well. I can say that a newbie who want to learn react & hooks they must  watch your videos first with little bit of practice and I can bet that s/he will be very much comfortable after it. Also, I think that you must teach some advance concepts and some good projects :) . "Thanks a bunch" !'
        },
        {
            Username:'Pravin',
            Comment:'Just finished the whole playlist to get myself up to date with hooks... Great tutorials. You made it so easy to understand and follow. I appreciate your effort. Keep doing great work and have a good day.'
        },
        {
            Username:'Madhumitha',
            Comment:'Done with Hooks!Guys just watch this series and make notes regularly, this is way better and structured properly than many other paid courses..... I was able to do a simple project on my own which gave me so much of confidence!!! Gonna start Redux ❤️😊😊😊'
        },
        {
            Username:'Natasha',
            Comment:'Thanks a lot brother ! I have never ever seen a tutorial like this before. The way you explained all the basic and advance concepts of react with such simple examples is remarkable. I will now make a react app and start my Journey as a react developer. Thanks again. Keep it up and I wish you all the success you\'ve ever desired.  Love from Pakistan Ustaad(teacher) Jee. <3'
        },
        {
            Username:'Pradeep',
            Comment:'Your secret API keys are listed below. Please note that we do not display your secret API keys again after you generate them.Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically rotate any API key that we\'ve found has leaked publicly.'
        },
        {
            Username:'Madhumitha',
            Comment:'I am madhu'
        },
    ]
  return (
    <Container>
    {
        comments.map(data=>
            <Dis>
            <Name>{data.Username}</Name>
            <Desc>{data.Comment}</Desc>
            <hr></hr>
            </Dis>
        )
    }
    </Container>
  )
}

export default DisplayComment

const Container=styled.div`
    margin: 20px;
    font-size: 20px;
`
const Dis=styled.div`
    margin-top: 20px;
`
const Name =styled.span`
    color: white;
`
const Desc=styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
`
