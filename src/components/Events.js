import React from 'react'
import {Header, Image, Container} from 'semantic-ui-react'
import Festival from '../Images/festival.jpeg'
import Twitter from './Twitter'
import Grams from './Instagram'

const Press = () => (
  <Container>
  <Header.Content as="h1">This will be press releases or upcoming Events</Header.Content>
  <Header.Content as="p">I can put twitter events here but styled better than the scrolling element on the home page or we can use that one here.</Header.Content>
  <Image
  src={Festival}
  width="100%"
  
  />
  <br/>
  <div className="twitter">
  <Twitter/>
  </div>
  <br/>
  <div>
    <Grams/>
  </div>
  </Container>
)

export default Press;