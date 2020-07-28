import React, {useContext} from 'react';
import {CartContext} from  '../../../Context/OrderContext';
import Logo from '../../../assets/logo.png';
import Styles from '../Orderitem/Orderitem.module.css'

const CartItem = ({sideproducts, dessertproducts, drinkproducts, pizzaproducts}) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <div>
    <div className={Styles.OrderHeader}>
         <div>
          <img src={Logo} alt="logo"/>
          <h1>DODO PIZZA</h1>
         </div> 
        </div>  
        <h1 className={Styles.OrderContentContainerHeader}>My order</h1>
       <div className={Styles.OrderContentContainer}>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={pizzaproducts.image} alt="pizza"/>
               </div>
               <div>
                 <h1>{pizzaproducts.name}</h1>
                 <p>{pizzaproducts.ingredients}</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦{pizzaproducts.price}</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={sideproducts.image} alt="sides"/>
               </div>
               <div>
                  <h1>{sideproducts.name}</h1>
                  <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>1pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦{sideproducts.price}</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={dessertproducts.image} alt="desserts"/>
               </div>
               <div>
                  <h1>{dessertproducts.name}</h1>
                  <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>1 pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦{dessertproducts.price}</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={drinkproducts.image} alt="drinks"/>
               </div>
               <div>
                 <h1>{drinkproducts.name}</h1>
                 <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>
                              1 pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦{drinkproducts.price}</span></div>
            </div>
          </div>
          </div> 
          </div>    
  )
}

export default CartItem