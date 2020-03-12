import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import SlideShow from './Slider.js'

//live.websites.hibu.com.

const Home = () => (
 <>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>The Elysian Catering
    </Header.Content>
    <Header.Content as="h5" className="motto" style={{margin: ".4em 0 0 0"}}>" Fresh Earth Conscious Community Building Catering "</Header.Content>
   </div>
  </div>
  <div className="homeContentGrid">
      <div className="slideShow">
       <SlideShow />
      </div>
     <div className='missionStatement'>
      <Header.Content as="h3" style={{margin: "0 1em .5em 1em"}}>Food should taste good. It should feel good. It should do good things for you and the world around you.</Header.Content>
      <Header.Content as="p">~ The Elysian Catering Promise ~</Header.Content>
     </div>
     <div className='twitter'>
      <Twitter style={{"alignText": "center"}}/>
     </div>
   </div>
  
</>
)



export default Home;