import React from 'react'
import {Header,} from 'semantic-ui-react'
import SocialFollows from './SocialFollows'


const Contact = () => (
 <>
   <div className="contactGrid"> 
   <div className="headerCont">
    <Header.Content as='h1' className="conHeader">The Elysian Catering Company</Header.Content>
    </div>
    <div className="emailBox">
     <Header as="h3" className="contactHead">Drop Us A Email</Header>
     <a className="email" href="mailto:?Subject=Hello%20Chris">YourEmailhere@gmail.com</a>
    </div>
    
    <Header.Content as="h3" className="socialFollows">
    Lets Connect
      <SocialFollows/>
    </Header.Content>
    
  </div>
 </>
)

export default Contact;