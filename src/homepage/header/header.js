import React from 'react';
import Logo from '../../assets/logo.png';
import styles from '../header/header.module.css'

const header = (props) => {
  return (
    <div className={styles.Header}>
      <img src={Logo} alt="logo"/>
      <ul>
        <li>Pizza</li>
        <li>Sides</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>Deals</li>
        <li>Pizza Builder</li>
      </ul>
    </div>
  )
}

export default header;