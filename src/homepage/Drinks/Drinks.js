import React, { useContext } from 'react';
import styles from '../Drinks/Drinks.module.css';
import {ProductsContext} from '../../Context/ProductContext'
import {CartContext} from '../../Context/OrderContext'
const Drinks = () => {
  const {drinkproducts} =  useContext(ProductsContext);
  const {addProduct, cartItems, increase} = useContext(CartContext);
  const isInCart = drinkproducts => {
    return !!cartItems.find(item => item.id === drinkproducts.id);
}
  return(
    <div className={styles.Drinks} id="drinks">
      <h1>Drinks</h1>
      <div className={styles.DrinksContainer}>
        {drinkproducts.map(drink=>{
          return  <div className={styles.DrinksCard}>
                    <div className={styles.ImageContainer}>
                       <img src={drink.image} alt="cocacola"/>
                    </div>
                    <div className={styles.DrinkHeader}>
                      <div>
                       <h1>{drink.name}</h1>
                       <p>{drink.details}</p>
                      </div>
                     <div className={styles.DrinkFooter}>
                      <h3>₦{drink.price}</h3>
                      {
                       isInCart(drink) && 
                       <button 
                       onClick={() => increase(drink)}>Add more</button>
                     }
                      { !isInCart(drink) &&
                        <button onClick={()=>addProduct(drink)}>
                          <span>from ₦{drink.price}</span>  
                           <span>Add to basket</span>
                        </button>}
                    </div>
                  </div>
                    
                </div>
        })}
      </div>
    </div>
  )
}

export default Drinks;