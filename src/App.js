import React, {Component} from 'react';
import './Components/Fontawesome/Fontawesome'
import Homepage from './homepage/homepage';
import Pizzabuilder from './Pizzabuilder/Pizzabuilder'
import Aux from './hoc/Auxillary/Auxillary'
import PizzaBuilder from './Pizzabuilder/Pizzabuilder';
import Radium, {StyleRoot} from 'radium';


class App extends Component{
  render(){
    return (
    <Aux>
      <StyleRoot>
       <PizzaBuilder/>
      </StyleRoot>
    </Aux>
    )
  }
}

export default Radium(App);
