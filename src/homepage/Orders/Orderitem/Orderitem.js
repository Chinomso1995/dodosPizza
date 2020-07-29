import React, {useContext} from 'react';
import {CartContext} from  '../../../Context/OrderContext';
import Styles from '../Orderitem/Orderitem.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const CartItem = ({product}) => {
  const {  increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <div>
    <div className={Styles.OrderContentContainer}>
         
      <div className={Styles.OrderContent}>
     <div>
     <div style={{paddingRight: '80px'}}>
      <img src={product.image} alt="pizza"/>
    </div>
    <div>
      <h1>{product.name}</h1>
      <p>{product.ingredients}</p>
    </div>
    </div>
    <div className={Styles.OrderContentPrice}>
    <div>
      { product.quantity > 1 &&
        <FontAwesomeIcon onClick={()=>decrease(product)} style={{marginRight: '30px', color: '#F57B1C', cursor: 'pointer'}} icon="minus-circle"/>}
      <span>{product.quantity}</span>
      {<FontAwesomeIcon onClick={()=>increase(product)} style={{marginLeft: '30px', color: '#F57B1C', cursor: 'pointer'}} icon="plus-circle"/>}
      </div>
    <div>
      <span>₦{product.price}</span>
      { product.quantity >= 1 &&
        <FontAwesomeIcon onClick={()=> removeProduct(product)}  style={{marginLeft: '30px', color: '#F57B1C', cursor: 'pointer'}} icon="trash"/>}
      </div>
   </div>
   </div>
   </div>            
        
        
        
    </div>
            
  )
}

export default CartItem;