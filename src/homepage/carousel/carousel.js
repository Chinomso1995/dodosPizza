import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import firstCarouselImage from '../../assets/first-carousel-image.jpeg';
import secondCarouselImage from '../../assets/second-carousel-image.jpeg';
import thirdCarouselImage from '../../assets/third-carousel-image.jpeg';
import fourthCarouselImage from '../../assets/fourth-carousel-image.jpeg';
import fifthCarouselImage from '../../assets/fifth-carousel-image.jpeg';


class carousel extends Component{
  render(){
    return (
      <Carousel showArrows={false}>
       <div>
        <img src={firstCarouselImage} alt="firstImage"/>
       </div>
      <div>
        <img src={secondCarouselImage} alt="secondImage"/>
      </div>
      <div>
        <img src={thirdCarouselImage} alt="thirdImage"/>
      </div>
      <div>
        <img src={fourthCarouselImage} alt="fourthImage"/>
      </div>
      <div>
        <img src={fifthCarouselImage} alt="fifthImage"/>
      </div>
      </Carousel>
      
    )
  }  
}

export default carousel;