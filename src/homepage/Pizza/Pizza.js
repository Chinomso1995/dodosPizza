import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Pizzas from './Pizzas/Pizzas';
class Pizza extends Component{
  
  
  render(){
    return (
      <Aux>
          <Pizzas/>
      </Aux>
    
    )
  }
}
export default Pizza;