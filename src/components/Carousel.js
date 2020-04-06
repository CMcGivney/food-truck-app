import React, { Component } from 'react';
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class ImageCarousel extends Component {
    render() {
        return (
            <Carousel swipeable
                      autoPlay
                      infiniteLoop
                      >
                <div>
                    <img src= {FoamCaviar}  alt="FoamCaviar Dish" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={salmonCuc} alt="salmonCuc"  />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={shavedSalad} alt="shavedSalad" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={cucumberSalad} alt="cucumberSalad" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={chartBoard} alt="chartBoard" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={nicoiseSpin} alt="nicoiseSpin" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={saladOne} alt="saladOne" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={tunaCan} alt="tunaCan" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={lobstahAmaebi} alt="" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={appDish} alt="appDish" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={yingYangSoup} alt="yingYangSoup" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={sweetFriedPrawns} alt="sweetFriedPrawns" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={peachSalad} alt="peachSalad" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={dessertOne} alt="dessertOne" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={dessertTwo} alt="dessertTwo" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={dessertThree} alt="dessertThree" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={shotGlassDessert} alt="shotGlassDessert" />
                    <p className="legend"></p>
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel