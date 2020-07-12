import React, {Component} from 'react';
import Carousel from './carousel/carousel';
import Header from '../homepage/header/header';
import Pizza from './Pizza/Pizza';
import Sides from './Sides/Sides';
import Desserts from './Desserts/Desserts';
import Drinks from './Drinks/Drinks';
import Footer from './Footer/Footer'
import Aux from '../hoc/Auxillary/Auxillary';

class homePage extends Component{
  render (){
    return (
      <Aux>
       <Header/>
       <Carousel/>
       <Pizza/>
       <Sides/>
       <Desserts/>
       <Drinks/>
       <Footer/>
      </Aux>  
    )
  }
}

export default homePage;