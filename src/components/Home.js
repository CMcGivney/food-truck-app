import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter.js'

const Home = () => (
 <>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>The Elysian Catering
    </Header.Content>
    <Header.Content as="h5" className="motto" style={{margin: ".4em 0 0 0"}}>"Sustainable Earth Conscious Food Truck Catering"</Header.Content>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h3" style={{margin: "0 1em 0 1em"}}>Food as it should be. Food should taste good. It should feel good. It should do good things for you and the world around you.</Header.Content>
      <Header.Content as="p">"Panera Bread Mission Statement"</Header.Content>
     </div>
     <div className='twitter'>
      <Twitter/>
     </div>
   </div>
  
</>
)



export default Home;