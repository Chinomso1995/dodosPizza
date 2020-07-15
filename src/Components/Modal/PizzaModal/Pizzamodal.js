import React, {Component} from 'react';
import styles from '../PizzaModal/Pizzamodal.module.css';
import pizzapicture from '../../../assets/meatybbq.jpg'

class pizzaModal extends Component {
  state = {
    toggle: false
  }
  toggleHandler = ()=>{
    this.setState({
			toggle: !this.state.toggle
		});
  }
  render (){
    return (
      <div className={styles.Pizzamodal}>
          <div className={styles.ModalContainer}>
            <div className={styles.ImageContainer}>
              <img src={pizzapicture} alt="pizzapicture"/>
            </div>
            <div className={styles.DetailsContainer}>
              <div>
                <div className={styles.TextDetails}>
                  <h1>Chicken Curry</h1>
                  <p>Red onions, bell peppers, <br/> chicken, pineapple, mozarella, <br/> tomatosauce, curry, chilli peppers.</p>
                </div>
                <div>
                <form className={styles.switchButton}>
                  <input type="radio" name="pizza" id="small" value="small" onChange={this.toggleHandler}
					          checked={!this.state.toggle}/>
                  <label for="small">25cm</label>
                  <input type="radio" name="pizza" id="medium" value="medium" onChange={this.toggleHandler}
					          checked={this.state.toggle}/>
                  <label for="medium">30cm</label>
                  <input type="radio" name="pizza" id="large" value="large" onChange={this.toggleHandler}
					          checked={this.state.toggle}/>
                  <label for="large">35cm</label>
                </form>
              </div>
              </div>
            </div>
            
          </div>
      </div>
    )
  }
}
export default pizzaModal;