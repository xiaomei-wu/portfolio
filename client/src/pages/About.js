import React from 'react';
import styled from 'styled-components';

import Me from '../images/me2.png'

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

const Img = styled.img`
  width: 330px;
  height: 339px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`
const Headline = styled.h1`
  font-size: 4em
`
const Paragraph = styled.p`
  padding: 50px;
  color: white;
  line-height: 1.8
`

const About = () => {
  return (
    <Wrapper>
      <Headline>ABOUT ME</Headline>
      <Container>
      <Img src={Me} />
      <Paragraph>Hi! I’m Xiaomei, a full-stack web developer based in Berlin, Germany. After <br />
      completing an MA degree in German Literature, I’ve decided to take the leap to <br />
      pursue a career in software engineering. I’ve graduated from a full-time immersive <br />
      software engineering program at Ironhack in Berlin. I love to learn new technologies and
      flex my creativity to create amazing things. </Paragraph>
      </Container>
    </Wrapper>
  )
}

export default About
