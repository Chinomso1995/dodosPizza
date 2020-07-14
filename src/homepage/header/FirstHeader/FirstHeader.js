import React from 'react';
import styles from '../FirstHeader/FirstHeader.module.css';
import Logo from '../../../assets/logo.png';

const firstHeader = (props)=>{
  return(
    <div className={styles.FirstHeaderContainer} onScroll={props.onScroll}>
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
  
  )
}

export default firstHeader;
