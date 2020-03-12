import React from 'react'
import {Header, Image,} from 'semantic-ui-react'
import HeadShot from '../Images/mainImg.jpg'
const About = () => (
  <>
   <div className='aboutTitle'>
    <Header.Content as="h2" className= "aboutHead" style={{"textAlign": "center"}}>Asunta Garibay</Header.Content>
    <Header.Content as="p">Chef & Founder</Header.Content>
   </div>
    <div className="aboutMeContainer">
     <div className="personalImg">
      <Image
       src = {HeadShot}
       alt= "Head shot of Elysian Founder"
       height="150px"
       width="150px"
       />
     </div>
     <div className="aboutMeText">
       <p> I attended Le Cordon Bleu Los Angeles, graduated in 2007 with high honors, a 3.93.
           I started my career in 2007 at <a href="https://www.citrinandmelisse.com/melissemenu">Melisse</a> in Santa Monica. 
           I am a Michelin star trained chef from Los Angeles where I worked at Melisse and <a href="https://www.patinagroup.com/patina-restaurant/menu">Patina</a>.  
           As a lead Chef I have cooked for many award shows in Los Angeles; MTV awards, The Emmys, The Oscars & The Screen Actors Guild. 
           Currently a member in good standing with the American Culinary Federation since 2007, the IACP (International Association of Culinary Professionals) since 2017, Member of Utah Restaurant Association since 2017, the WCP (Women Chef Professionals) since 2017, ServeSafe management certified since 2014, and HAACP certified since 2019.
       </p>
       <p>Something about why you started cooking or why you started the catering business. Cook good food for good people blah blah blah</p>
     </div>
</div>
  </>
)

export default About