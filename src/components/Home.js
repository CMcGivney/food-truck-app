import React from 'react'
import {Header, Container} from 'semantic-ui-react'
import Twitter from './Twitter.js'

const Home = () => (
 <Container>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1">The Elysian Catering
    </Header.Content>
    {/* <Header.Subheader className="mainHeader" as="h5">Food Truck & Catering
    </Header.Subheader> */}
    <Header as="h5" color="black">"Sustainable Earth Conscious Food Truck Catering"</Header>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h3">Food as it should be. Food should taste good. It should feel good. It should do good things for you and the world around you.</Header.Content>
      <Header.Content as="p">"Panera Bread Mission Statement"</Header.Content>
     </div>
     <div className='twitter'>
      <Twitter/>
     </div>
   </div>
  
</Container>
)



export default Home;