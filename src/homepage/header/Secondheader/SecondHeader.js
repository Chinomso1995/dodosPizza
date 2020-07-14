import React from 'react';
import styles from '../Secondheader/SecondHeader.module.css';
import Logo from '../../../assets/logo.png';
const secondHeader = (props) => {
  return (
  <div className={styles.secondHeaderContainer}>
    <div>
     <ul>
      <li>{props.showLogo ? <img src={Logo} alt="logo"/> : ""}</li>
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
  )
}
export default secondHeader