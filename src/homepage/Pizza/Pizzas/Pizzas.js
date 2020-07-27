import React, {useState, useContext} from 'react';
import styles from '../Pizzas/Pizzas.module.css';

import Modal from './PizzaModal/Pizzamodal';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../../Components/Backdrop/Backdrop';
import {ProductsContext} from '../../../Context/ProductContext'
const Pizzas =()=> {

    const [showModal, setModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null)
    const {pizzaproducts} =  useContext(ProductsContext)
    const toggleModalHandler = (p)=>{
    setModal(true);
    setSelectedPizza(p)  
    }
    return (
   <Aux>
     { setModal(true)?
       <Backdrop clicked={toggleModalHandler}/>: null}
    { setModal(true) ?
     <Modal 
     clicked={toggleModalHandler}
     ingredients={selectedPizza.ingredients} 
     price={selectedPizza.price} 
     image={selectedPizza.image} 
     name={selectedPizza.name}      
     />: null}*/
     <div className={styles.Pizza} id="pizza">
             <h1>Pizza</h1>
      <div className={styles.PizzaContainer}>
         {pizzaproducts.map(p=>{
           
    return <div>
      <div className={styles.PizzaCard}>
        <div className={styles.PizzaCardHeader}>
           <img src={p.image} alt="pizza"/>
           <h1>{p.name}</h1>
          <p>{p.ingredients}</p>
        </div>
        <div className={styles.PizzaCardFooter}>
           <h3>from ₦{p.price}</h3>
           <button onClick={()=>toggleModalHandler(p)}>Select</button>
        </div>  
    </div>
    </div>
  })}
      </div>
      </div>
 
  </Aux>
  )
}
export default Pizzas;