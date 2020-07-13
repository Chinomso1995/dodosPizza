import React, {Component} from 'react';
import Logo from '../../assets/logo.png';
import styles from '../header/header.module.css';


class header extends Component {
  state={
    showNav: true
  }
  handleScroll = e => {
    let element = e.target
    let showNavigation = this.state.showNav
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
     this.setState({element: !showNavigation})
    }
  }
  

  render(){
    
    
  return (
<div className={styles.Header}>
  <div>
    <div className={styles.FirstHeaderContainer}>
      <div>
        <div>
         <img src={Logo} alt="logo"/>
         <h1>DODO PIZZA</h1>
         <p>Fresh Delivery in Lagos</p>
         </div>
         <div>
           <h3>Call to order</h3>
           <h1>+234 812 106 9256</h1>
          </div>
        </div>
      <div>
         <button>Login</button>
      </div>
      </div>
    </div>
  
   <div className={styles.secondHeaderContainer}>
      <div>
       <ul>
        <li>Pizza</li>
        <li>Sides</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>Deals</li>
        <li>Pizza Builder</li>
       </ul>
      </div>  
      <div>
        <button>My Orders</button>
      </div>
    
  </div>
      
  </div> 
    
  )
}
} 


export default header;