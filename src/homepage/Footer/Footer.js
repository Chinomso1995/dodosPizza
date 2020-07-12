import React from 'react';
import styles from '../Footer/Footer.module.css';
import googlePlay from '../../assets/footerimages/googleplay.svg';
import appleStore from '../../assets/footerimages/applestore.svg';


const footer = () => {
  return (
    <section className={styles.FooterSection}>
       <div>
         <div className={styles.FooterContainer}>
           <div className={styles.FirstFooterSection}>
              <div>
               <h3>Dodo Pizza</h3>
               <h3>Dodo's Piza story</h3>
              </div>
              <div>
                <img src={googlePlay} alt="googleplay"/>
                <img src={appleStore} alt = "applePlay"/>
              </div>
           </div>
           <div>
              <h3>Call to order</h3>
              <h1>+234 812 106 9256</h1>
           </div>
           <div className={styles.LastFooterContainer}>
               <div>
                  <ul>
                    <li>DODO PIZZA</li>
                    <li></li>
                    <li>Terms and conditions</li>
                    <li>Dodo Pizza Story</li>
                  </ul>
               </div>
               <div>

               </div>
           </div>
         </div>
       </div>
    </section>
  )
}

export default footer;