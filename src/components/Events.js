import React from 'react'
import {Header, Image, Container} from 'semantic-ui-react'
import Festival from '../Images/festival.jpeg'
import Twitter from './Twitter'

const Press = () => (
  <Container>
  <Header.Content as="h1">This will be press releases or upcoming Events</Header.Content>
  <Header.Content as="p">I can put twitter events here but styled better than the scrolling element on the home page or we can use that one here.</Header.Content>
  <Image
  src={Festival}
  width="100%"
  
  />
  <br/>
  <Twitter/>
  </Container>
)

export default Press;