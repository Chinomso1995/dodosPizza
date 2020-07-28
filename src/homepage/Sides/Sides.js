import React, { useContext } from 'react';
import styles from '../Sides/Sides.module.css';
import {ProductsContext } from '../../Context/ProductContext';
import {CartContext} from '../../Context/OrderContext';

const Sides = ()=> {
  const {sideproducts} = useContext(ProductsContext);
  const {addProduct, cartItems, increase} = useContext(CartContext);
  const isInCart = sideproducts => {
    return !!cartItems.find(item => item.id === sideproducts.id);
  }
  return(
    <div className={styles.Sides} id='sides'>
      <h1>Sides</h1>
      <div className={styles.SidesContainer}>
            {sideproducts.map(side=>{
              return <div className={styles.SidesCard}>
                        <div>
                         <img src={side.image} alt="sausagerollone"/>
                         <h1>{side.name}</h1>
                         <p>{side.details}</p>
                        </div>
                        <div>
                          <h3>₦{side.price}</h3>
                          {
                             isInCart(side) && 
                             <button 
                             onClick={() => increase(side)}>Add more</button>
                            }
                         { !isInCart(side) &&
                         <button onClick={()=>addProduct(side)}>Add to basket</button>}
                         </div>
                     </div>  })} 
        </div>
        </div>

  )
}

export default Sides;