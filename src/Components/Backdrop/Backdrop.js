import React, {useState} from 'react';
import styles from '../Backdrop/Backdrop.module.css'
import Aux from '../../hoc/Auxillary/Auxillary'
const Backdrop = (props) =>{
 
  return(
    <Aux>
      <div className={styles.Backdrop} onClick={props.clicked}>
      
    </div>
    </Aux>
  )
}
export default Backdrop;
