import React, {Component} from 'react';
import './Components/Fontawesome/Fontawesome'
import Homepage from './homepage/homepage';
import Pizzabuilder from './Pizzabuilder/Pizzabuilder'
import Aux from './hoc/Auxillary/Auxillary'
import Radium, {StyleRoot} from 'radium';
import {Route, Switch} from 'react-router-dom';
import Pizzas from './homepage/Pizza/Pizzas/Pizzas';
import Sides from './homepage/Sides/Sides';
import Desserts from './homepage/Desserts/Desserts';
import Drinks from './homepage/Drinks/Drinks'
import Orders from './homepage/Orders/Orders'

class App extends Component{
  render(){
    return (
      <Aux>
      <StyleRoot>
      <Switch>
       <Route path="/pizzabuilder" component={Pizzabuilder}/>
       <Route path="/orders" component={Orders}/>
       <Route path="/"  component={Homepage}/> 
       <Route path="/pizza#pizza" component={Pizzas}/>
       <Route path="/drinks#drinks" component={Drinks}/>
       <Route path="/sides#sides" component={Sides}/>
       <Route path = "/desserts#desserts" component={Desserts}/>  
      </Switch> 
      </StyleRoot>
     </Aux>

    )
  }
}

export default Radium(App);
