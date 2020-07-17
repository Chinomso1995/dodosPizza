import React, {Component} from 'react';
import './Components/Fontawesome/Fontawesome'
import Homepage from './homepage/homepage';

import Aux from './hoc/Auxillary/Auxillary'



class App extends Component{
  render(){
    return (
    <Aux>
      <Homepage/>
    </Aux>
    )
  }
}

export default App;
