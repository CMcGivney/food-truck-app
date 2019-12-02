import React from 'react'
import {Container, Header,} from 'semantic-ui-react'
import SocialFollows from './SocialFollows'


const Contact = () => (
 <Container>
   <div className="contactGrid"> 
   <div className="headerCont">
    <Header.Content as='h1' className="conHeader">The Elysian Catering Food Truck</Header.Content>
    </div>
    <div className="emailBox">
     <Header as="h3" className="contactHead">Drop Us A Email</Header>
     <a className="email" href="mailto:?Subject=Hello%20Chris">YourEmailhere@gmail.com</a>
    </div>
    <Header as="h3" className="socialFollows">
      <SocialFollows/>
    </Header>
  </div>
 </Container>
)

export default Contact;