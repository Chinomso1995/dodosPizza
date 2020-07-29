import React, {useContext} from 'react';
import styles from '../Secondheader/SecondHeader.module.css';
import Logo from '../../../assets/logo.png';
import {Route, NavLink as NavLink2} from 'react-router-dom';
import{NavHashLink as NavLink1} from 'react-router-hash-link';
import Pizza from '../../Pizza/Pizza';
import pizzabuilder from '../../../Pizzabuilder/Pizzabuilder';
import Aux from '../../../hoc/Auxillary/Auxillary';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CartContext} from '../../../Context/OrderContext'
const SecondHeader = (props) => {
  const {  itemCount } = useContext(CartContext);
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
      { itemCount > 0 ?
        <button><NavLink2 to="/orders">My Orders | {itemCount}</NavLink2></button> :
        <button><NavLink2 to="/orders">My Orders</NavLink2></button>}
    </div>
   </div>
   <div className={styles.shoppingCart}>
     <NavLink2 to="/orders">
        <div className={styles.shoppingCartCounter}>
         <span>{itemCount}</span>
        </div>
       <div className={styles.shoppingCartPicture}>
        <FontAwesomeIcon style={{color: 'white', fontSize: '32px'}} icon="shopping-basket"/>
       </div> 
       </NavLink2>
    </div>
  </Aux>
  )
}
export default SecondHeader