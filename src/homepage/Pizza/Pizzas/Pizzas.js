import React, {useState, useContext} from 'react';
import styles from '../Pizzas/Pizzas.module.css';

import Modal from './PizzaModal/Pizzamodal';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../../Components/Backdrop/Backdrop';
import {ProductsContext} from '../../../Context/ProductContext';
import {CartContext} from '../../../Context/OrderContext';
import Radium from 'radium';
const Pizzas =()=> {

    const [showModal, setModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null)
    const {pizzaproducts} =  useContext(ProductsContext);
    const {addProduct, increase} = useContext(CartContext);
    const toggleModalHandler = (p)=>{
    setModal(true);
    setSelectedPizza(p)  
    }
    const removeModalHandler = ()=>{
      setModal(false)
    }
    return (
   <Aux>
     {  showModal ?
       <Backdrop clicked={removeModalHandler}/>: null}
    { showModal ?
     <Modal 
     clicked={removeModalHandler}
     ingredients={selectedPizza.ingredients} 
     price={selectedPizza.price} 
     image={selectedPizza.image} 
     name={selectedPizza.name} 
     id={selectedPizza.id}     
     addProduct={()=>addProduct(selectedPizza)}
     increaseProduct={() => increase(selectedPizza)}/>: null}*/
     <div className={styles.Pizza} id="pizza">
             <h1>Pizza</h1>
      <div className={styles.PizzaContainer}>
         {pizzaproducts.map(p=>{
           
    return <div>
      <div className={styles.PizzaCard}>
           <div> 
           <img src={p.image} alt="pizza"/>
           </div>
        <div className={styles.PizzaCardHeader}>
          <div>
           <div>
            <h1>{p.name}</h1>
            <p>{p.ingredients}</p>
           </div> 
          <div className={styles.PizzaCardFooter}>
           <h3>from ₦{p.price}</h3>
           <button onClick={()=>toggleModalHandler(p)}>
             <span>from ₦{p.price}</span>
             <span>Select</span>
             </button>
          </div>  
          </div>
        </div>     
    </div>
    </div>
  })}
      </div>
      </div>
 
  </Aux>
  )
}
export default Radium(Pizzas);