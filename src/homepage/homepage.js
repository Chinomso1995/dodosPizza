import React, {Component} from 'react';
import Carousel from './carousel/carousel';
import Header from '../homepage/header/header';
import Pizza from './Pizza/Pizza';
import Aux from '../hoc/Auxillary/Auxillary'

class homePage extends Component{
  render (){
    return (
      <Aux>
       <Header/>
       <Carousel/>
       <Pizza/>
      </Aux>  
    )
  }
}

export default homePage;