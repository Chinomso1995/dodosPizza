import React, {Component} from 'react';
import styles from '../PizzaModal/Pizzamodal.module.css';
import pizzapicture from '../../../assets/meatybbq.jpg'

class pizzaModal extends Component {
  state = {
    selected: "small"
  }
  toggleHandler = (size)=> ()=>{
    this.setState({
			toggle: size
		});
  }
  render (){
    let attachedClasses = [styles.ImageContainer]
    if(this.state.toggle==='small'){
      attachedClasses = [styles.ImageContainer, styles.Small]
    }
    if(this.state.toggle==="medium"){
      attachedClasses = [styles.ImageContainer, styles.Medium]
    }
    if(this.state.toggle==="large"){
      attachedClasses=[styles.ImageContainer, styles.Large]
    }
    return (
      <div className={styles.Pizzamodal}>
          <div className={styles.ModalContainer}>
            <div className={attachedClasses.join(' ')}>
              <img  src={pizzapicture} alt="pizzapicture"/>
            </div>
            <div className={styles.DetailsContainer}>
              <div>
                <div className={styles.TextDetails}>
                  <h1>Chicken Curry</h1>
                  <p>Red onions, bell peppers, <br/> chicken, pineapple, mozarella, <br/> tomatosauce, curry, chilli peppers.</p>
                </div>
                <div>
                <div className={styles.Form}>
                <form className={styles.switchButton}>
                  <input type="radio" name="pizza" id="small" value="small" onChange={this.toggleHandler("small")}
					        checked={this.state.toggle==="small"}/>
                  <label for="small">Small</label>
                  <input type="radio" name="pizza" id="medium" value="medium" onChange={this.toggleHandler("medium")}
					        checked={this.state.toggle==="medium"}/>
                  <label for="medium">Medium</label>
                  <input type="radio" name="pizza" id="large" value="large" onChange={this.toggleHandler("large")}
					        checked={this.state.toggle==="large"}/>
                  <label for="large">Large</label>
                </form>
                </div>
                <div className={styles.orderButton}>
                  <button>Add to basket for ₦4,100</button>
                </div>
              </div>
              </div>
            </div>
            
          </div>
      </div>
    )
  }
}
export default pizzaModal;