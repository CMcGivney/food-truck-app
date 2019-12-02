import React from 'react'
import {Container, Header, Image} from 'semantic-ui-react'
import SocialFollows from './SocialFollows'
import WoodPlate from "../Images/plateOnWood.jpeg"

const Contact = () => (
 <Container>
   <div className="contactGrid"> 
    <Header as='h1' className="conHeader" color="blue">The Elysian Catering</Header>
    <div className="emailBox">
     <Header as="h3" className="contactHead">Drop Us A Email</Header>
     <a className="email" href="mailto:yourEmailhere@gmail.com?Subject=Hello%20Chris">YourEmailhere@gmail.com</a>
    </div>
    <Header as="h3" className="socialFollows">
      <SocialFollows/>
    </Header>
  </div>
 </Container>
)

export default Contact;