import React, {useContext} from 'react';
import {CartContext} from '../../../Context/OrderContext';
import CartItem from '../Orderitem/Orderitem';
 
const CartProducts = ()=>{
  const {cartItems} = useContext(CartContext);
  return(
    <div>
      {cartItems.map(product=> <CartItem key={product.id} product={product}/>)}
    </div>
  )
}

export default CartProducts;