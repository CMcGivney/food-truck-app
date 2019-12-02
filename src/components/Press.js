import React from 'react'
import {Header, Image, Container} from 'semantic-ui-react'
import Festival from '../Images/festival.jpeg'


const Press = () => (
  <Container>
  <Header as="h1">This will be press releases or upcoming Events</Header>
  <Header as="p">This will be trickier but I could connect google calendar to this page. That way what you put into the calendar will show up here. Or we could just stick a twitter feed into this page since we will be running it on the home page anyway.</Header>
  <Image
  src={Festival}
  width="100%"
  
  />
  </Container>
)

export default Press;