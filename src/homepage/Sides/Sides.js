import React, { useContext } from 'react';
import styles from '../Sides/Sides.module.css'
import {ProductsContext } from '../../Context/ProductContext'

const Sides = ()=> {
  const {sideproducts} = useContext(ProductsContext)
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
                          <button>Add to basket</button>
                         </div>
                     </div>  })} 
        </div>
        </div>

  )
}

export default Sides;