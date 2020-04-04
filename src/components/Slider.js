import React from 'react'
import { Slide } from 'react-slideshow-image'
import FoamCaviar from '../Images/foamCaviar.jpeg'
import salmonCuc from '../Images/salmonCuc.jpeg'
import shavedSalad from '../Images/shavedSalad.jpeg'
import cucumberSalad from '../Images/cucumberSalad.jpeg'
import nicoiseSpin from '../Images/nicoiseSpin.jpeg'
import saladOne from '../Images/saladOne.jpeg'
import tunaCan from '../Images/tunaCan.jpeg'
import appDish from '../Images/appDish.jpeg'
import lobstahAmaebi from '../Images/lobstahAmaebi.jpeg'
import shotGlassDessert from '../Images/shotGlassDessert.jpeg'
import sweetFriedPrawns from '../Images/sweetFriedPrawns.jpeg'
import yingYangSoup from '../Images/yingYangSoup.jpeg'
import peachSalad from '../Images/peachSalad.jpeg'
import chartBoard from '../Images/chartBoard.jpeg'
import dessertOne from '../Images/dessertOne.jpeg'
import dessertTwo from '../Images/dessertTwo.jpeg'
import dessertThree from '../Images/dessertThree.jpeg'

 

const slideImages = [
  FoamCaviar, salmonCuc, shavedSalad, cucumberSalad, nicoiseSpin,
  saladOne, tunaCan, appDish, lobstahAmaebi, sweetFriedPrawns, yingYangSoup, peachSalad, chartBoard,
  dessertOne, dessertTwo, dessertThree, shotGlassDessert,
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
 const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[13]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[14]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[15]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[16]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;