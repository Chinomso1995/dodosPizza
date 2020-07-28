import React, {useContext} from 'react';
import Styles from '../Orders/Orders.module.css';
import Footer from '../../homepage/Footer/Footer';
import {CartContext} from '../../Context/OrderContext'
import Orderitems from './Orderitem/Orderitem'
const Orders = ()=>{
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
  return( 
      <div>
        {
                            cartItems.length > 0 ?
                            <Orderitems/> :
                            <div style={{textAlign: 'center'}}>
                                Your cart is empty
                            </div>
                        }
                        
       <div className={Styles.OrderPlacement}>
         <h1>Dipping Sauces</h1>
         <h1>Total: ₦4500</h1>
         <div className={Styles.ButtonContainer}>
          <button>Back to menu</button>
          <button>Next</button>
         </div> 
       </div>
       <Footer/>
    </div>
  )
}
export default Orders;