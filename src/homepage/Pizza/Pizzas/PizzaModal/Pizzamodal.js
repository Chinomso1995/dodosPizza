import React, {useState, useContext} from 'react';
import styles from '../PizzaModal/Pizzamodal.module.css';
import Aux from '../../../../hoc/Auxillary/Auxillary'


export const PizzaProducts = (props) => [{id: props.key, name: props.name, ingredients: props.ingredients, price: props.price, image: props.image}]
const PizzaModal = (props) => {
  const [selected, setSelected] = useState('small')
  
  const toggleHandler = (event) => {
    setSelected(event.target.value);
  }
  
  let attachedClasses = [styles.ImageContainer]
  if (selected === 'small') {
    attachedClasses = [styles.ImageContainer, styles.Small]
  }
  if (selected === "medium") {
    attachedClasses = [styles.ImageContainer, styles.Medium]
  }
  if (selected === "large") {
    attachedClasses=[styles.ImageContainer, styles.Large]
  }
  return (
    <Aux>
      <div className={styles.Pizzamodal}>
        <div className={styles.ModalContainer}>
          <div className={attachedClasses.join(' ')}>
            <img  src={props.image} alt="pizzapicture"/>
          </div>
          <div className={styles.DetailsContainer}>
            <div>
              <div className={styles.TextDetails}>
                <h1>{props.name}</h1>
                <p>{props.ingredients}</p>
              </div>
              <div>
              <div className={styles.Form}>
              <form className={styles.switchButton}>
                <input type="radio" name="pizza" id="small" value="small" onChange={toggleHandler} checked={selected === 'small'}/>
                <label for="small">Small</label>
                <input type="radio" name="pizza" id="medium" value="medium" onChange={toggleHandler} checked={selected === 'medium'}/>
                <label for="medium">Medium</label>
                <input type="radio" name="pizza" id="large" value="large" onChange={toggleHandler} checked={selected === 'large'}/>
                <label for="large">Large</label>
              </form>
              </div>
              <div className={styles.orderButton}>
                <button>Add to basket for ₦{props.price}</button>
              </div>
            </div>
            </div>
          </div>  
          <div className={styles.Navbar} onClick={props.clicked}>
          <div></div>
          <div></div>
        </div>
        </div>
       
    </div>
    </Aux>
  )

}

export default PizzaModal;