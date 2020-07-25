import React from 'react';
import styles from '../Secondheader/SecondHeader.module.css';
import Logo from '../../../assets/logo.png';
import {Route, NavLink as NavLink2} from 'react-router-dom';
import{NavHashLink as NavLink1} from 'react-router-hash-link';
import Pizza from '../../Pizza/Pizza';
import pizzabuilder from '../../../Pizzabuilder/Pizzabuilder';
import Aux from '../../../hoc/Auxillary/Auxillary'
const secondHeader = (props) => {
  
  return (
  <Aux>
  <div className={styles.secondHeaderContainer}>
    <div>
     <ul>
      <li>{props.showLogo ? <img src={Logo} alt="logo"/> : ""}</li>
      <li ><NavLink1 smooth to="/pizza#pizza" activeClassName="active" exact>Pizza</NavLink1></li>
      <li><NavLink1 smooth to="/sides#sides" activeClassName="active" exact>Sides</NavLink1></li>
      <li><NavLink1 smooth to="/desserts#desserts" activeClassName="active" exact>Desserts</NavLink1></li>
      <li><NavLink1 smooth to="/drinks#drinks" activeClassName="active" exact>Drinks</NavLink1></li>
      <li><NavLink2 to= "/pizzabuilder">Pizza Builder</NavLink2></li>
     </ul>  
    </div> 
    <div>
      <button><NavLink2 to="/orders">My Orders</NavLink2></button>
    </div>
   </div>
  </Aux>
  )
}
export default secondHeader