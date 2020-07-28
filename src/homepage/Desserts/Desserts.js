import React, {useContext} from 'react';
import styles from '../Desserts/Desserts.module.css';
import {ProductsContext } from '../../Context/ProductContext';
import {CartContext} from '../../Context/OrderContext';
const Desserts = () => {
  const {dessertproducts} = useContext(ProductsContext);
  const {addProduct, cartItems, increase} = useContext(CartContext);
  const isInCart = dessertproducts => {
    return !!cartItems.find(item => item.id === dessertproducts.id);
}
  return (
     <div className={styles.Desserts} id="desserts">
       <h1>Desserts</h1>
       <div className={styles.DessertsContainer}>
             {dessertproducts.map(dessert=>{
               return <div className={styles.DessertsCard}> 
                         <div>
                           <img src={dessert.image} alt="cinnamonrollsone"/>
                           <h1>{dessert.name}</h1>
                           <p>{dessert.details}</p>
                         </div>
                         <div>
                           <h3>₦{dessert.price}</h3>
                           {
                             isInCart(dessert) && 
                             <button 
                             onClick={() => increase(dessert)}>Add more</button>
                            }
                         { !isInCart(dessert) &&
                         <button onClick={()=>addProduct(dessert)}>Add to basket</button>}
                         </div>
                      </div>
             })}
       </div>
     </div>
  )
}

export default Desserts;