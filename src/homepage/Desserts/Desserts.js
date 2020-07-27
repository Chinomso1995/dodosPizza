import React, {useContext} from 'react';
import styles from '../Desserts/Desserts.module.css';
import {ProductsContext } from '../../Context/ProductContext'
const Desserts = () => {
  const {dessertproducts} = useContext(ProductsContext)
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
                           <button>Add to basket</button>
                         </div>
                      </div>
             })}
       </div>
     </div>
  )
}

export default Desserts;