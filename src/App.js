import React, {Component} from 'react';
import './Components/Fontawesome/Fontawesome'
import Homepage from './homepage/homepage';
import Pizzabuilder from './Pizzabuilder/Pizzabuilder'
import Aux from './hoc/Auxillary/Auxillary'
import PizzaBuilder from './Pizzabuilder/Pizzabuilder';



class App extends Component{
  render(){
    return (
    <Aux>
      <PizzaBuilder/>
    </Aux>
    )
  }
}

export default App;
