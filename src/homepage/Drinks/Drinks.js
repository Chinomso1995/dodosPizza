import React, { useContext } from 'react';
import styles from '../Drinks/Drinks.module.css';
import {ProductsContext} from '../../Context/ProductContext'

const Drinks = () => {
  const {drinkproducts} =  useContext(ProductsContext)
  return(
    <div className={styles.Drinks} id="drinks">
      <h1>Drinks</h1>
      <div className={styles.DrinksContainer}>
        {drinkproducts.map(drink=>{
          return  <div className={styles.DrinksCard}>
                    <div>
                      <img src={drink.image} alt="cocacola"/>
                      <h1>{drink.name}</h1>
                      <p>{drink.details}</p>
                     </div>
                    <div>
                      <h3>₦{drink.fiveAliveTropicOne}</h3>
                      <button>Add to basket</button>
                    </div>
                  </div>
        })}
      </div>
    </div>
  )
}

export default Drinks;