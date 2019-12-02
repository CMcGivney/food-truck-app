import React from 'react'
import {Header, Container} from 'semantic-ui-react'
// import MainImg from './Images/mainImg.jpg'

const Home = () => (
 <Container>
  <div className="titleBox">
   <div className="title">
    <Header as="h1" color="black" className="mainHeader">The Elysian Food Truck & Catering</Header>
    <Header as="p" color="yellow">"Sustainable Earth Conscious Food Truck"</Header>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='about'>
      <Header as="h3">What we are all about</Header>
     </div>
     <div className='twitter'>
      <Header as="h3">Twitter Feed goes here</Header>
     </div>
   </div>
  
</Container>
)



export default Home;