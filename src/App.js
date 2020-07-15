import React, {Component} from 'react';
import './Components/Fontawesome/Fontawesome'
import Homepage from './homepage/homepage';
import PizzaModal from './Components/Modal/PizzaModal/Pizzamodal'
import Aux from './hoc/Auxillary/Auxillary'



class App extends Component{
  render(){
    return (
    <Aux>
      <Homepage/>
      <PizzaModal/>
    </Aux>
    )
  }
}

export default App;
