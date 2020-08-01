import React, {useState, useContext} from 'react';
import Styles from '../Orders/Orders.module.css';
import Footer from '../../homepage/Footer/Footer';
import {CartContext} from '../../Context/OrderContext';
import {NavLink} from "react-router-dom"
import OrderProducts from './Orderproducts/Orderproducts';
import Logo from '../../assets/logo.png';
import Contactdata from './ContactData/Contactdata';
import Backdrop from '../../Components/Backdrop/Backdrop'
const Orders = ()=>{
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
  const [showContactData, setShowContactData] = useState(false);
  const toggleContactData = ()=>{
    setShowContactData(true)
  }
  const removeContactData = ()=>{
    setShowContactData(false)
  }
  return( 
      <div>
        <div className={Styles.OrderHeader}>
          <div>
           <img src={Logo} alt="logo"/>
           <h1>DODO PIZZA</h1>
           </div>   
        <h1 className={Styles.OrderContentContainerHeader}>My order</h1> 
      </div>
        {
          cartItems.length > 0 ?
          <OrderProducts/> :
          <div style={{textAlign: 'center'}}>
          Your cart is empty
          </div>
        }
                    
         { showContactData ?
           <Contactdata clicked={removeContactData}/>
           : null}
          { showContactData ?
            <Backdrop clicked={removeContactData}/>
            : null}
         <div className={Styles.OrderPlacement}>
         <h1>Dipping Sauces</h1>
         <h1>Total: ₦{total}</h1>
         <div className={Styles.ButtonContainer}>
          <button><NavLink to="/">Back to menu</NavLink></button>
          <button onClick={toggleContactData}>Next</button>
         </div> 
       </div>
       <Footer/>
    </div>
  )
}
export default Orders;