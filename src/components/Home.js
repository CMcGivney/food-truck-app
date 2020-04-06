import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import SlideShow from './Slider.js'
// import ImageCarousel from './Carousel.js'
import YouTube from 'react-youtube-embed'

//live.websites.hibu.com.

const Home = () => (
 <>
  <div className="homeContentGrid">
   <div className="titleBox">
    <div className="title">
     <div className="logo">
      <Header.Content as="h1" className="elysianLogo">Elysian</Header.Content>
      <Header.Content as="h1" className="cateringLogo">Catering</Header.Content>
     </div>
     {/* <Header.Content as="h3" className="motto">"A Fresh, Earth Conscious, Community Building, Catering Team"</Header.Content> */}
     <Header.Content as="h3" className="motto">"You Dream It & We Do It!"</Header.Content>
    </div>
   </div>
     <div className="slideShow">
      <SlideShow />
     </div>
       <div className="affiliations">
         <Header.Content as="h3" className="com_header">Community Affiliations</Header.Content>
         <a href="https://bbbsu.org/" alt="Big Brother Big Sister of Utah Link"><div className="bbbsUtah"></div></a>
         <a href="https://www.ccsnorthernutah.org/" alt="Catholic Community Services of Northern Utah"><div className="catholicCommunity"></div></a>
         <a href="https://www.voaut.org/" alt="Volunteers of America utah"><div className="voAmerica"></div></a>
   </div>
   <div className='missionStatement'>
      <Header.Content as="h3" style={{margin: "0 1em .5em 1em"}}>Food should taste good. It should feel good. It should do good things for you and the world around you.</Header.Content>
      <Header.Content as="p">~ The Elysian Catering Promise ~</Header.Content>
   </div>
    <div className="twitterContainer">
     <div className="mediaTitle">
       <Header.Content as="h3" className="aboutHead">Want to know where we are cooking? </Header.Content>
       <Header.Content as="h5" className="aboutMeta">*Follow us on Twitter!</Header.Content>
     </div>
     <div className='twitter'>
      <Twitter style={{"alignText": "center"}}/>
     </div>
    </div>
    <div className="youtubeContainer" style={{marginTop: "2rem"}}>
     <div className="mediaTitle">
       <Header.Content as="h3" className="aboutHead">Want to see what we are up too? </Header.Content>
       <Header.Content as="h5" className="aboutMeta">*Subscribe to Chef AG's YouTube!</Header.Content>
     </div>
    <div className="youtube">
      <YouTube id="2B9ZMw1kp9g" appendSrc="?autoplay=1&playlist=2B9ZMw1kp9g&loop=1&modestbranding=1&samesite=none"/>
     </div>
   </div>
 </div>
  
</>
)



export default Home;