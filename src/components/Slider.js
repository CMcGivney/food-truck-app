import React from 'react'
import { Slide } from 'react-slideshow-image'
import FoamCaviar from '../Images/foamCaviar.jpeg'
import salmonCuc from '../Images/salmonCuc.jpeg'
import shavedSalad from '../Images/shavedSalad.jpeg'
import amaebi from '../Images/amaebi.jpeg'
import bolinese from '../Images/bolinese.jpeg'
import nicoiseSpin from '../Images/nicoiseSpin.jpeg'
import saladOne from '../Images/saladOne.jpeg'
import tunaCan from '../Images/tunaCan.jpeg'
import yingYangSoup from '../Images/yingYangSoup.jpeg'
import tomatoSalad from '../Images/tomatoSalad.jpeg'
import peachSalad from '../Images/peachSalad.jpeg'
import chartBoard from '../Images/chartBoard.jpeg'
import dessertOne from '../Images/dessertOne.jpeg'
import dessertTwo from '../Images/dessertTwo.jpeg'
import dessertThree from '../Images/dessertThree.jpeg'

 
const slideImages = [
  FoamCaviar, salmonCuc, shavedSalad, amaebi, bolinese, nicoiseSpin,
  saladOne, tunaCan, yingYangSoup, tomatoSalad, peachSalad, chartBoard,
  dessertOne, dessertTwo, dessertThree,
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
        </Slide>
      </div>
    )
}

export default Slideshow;