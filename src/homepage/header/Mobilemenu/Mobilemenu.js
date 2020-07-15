import React from 'react';
import Logo from '../../../assets/logotransparent.svg';
import styles from '../Mobilemenu/Mobilemenu.module.css'

const mobileMenu = (props) => {
  return (
     <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuFirstSection}>
          <div>
            <img src={Logo} alt="logo"/>
            <h1>Dodo Pizza</h1>
          </div>
          <div className={styles.Navbar} onClick={props.clicked}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.mobileMenuSecondSection}>
          <ul>
            <li>Deals</li>
            <li>Delivery area</li>
            <li>Dodo Pizza Story</li>
            <li>Log in</li>
          </ul>
        </div>
        <div className={styles.mobileMenuThirdSection}>
            <h1>+234 812 106 9256</h1>
            <p>Call to order</p>
        </div>
     </div>
  )
};

export default  mobileMenu;