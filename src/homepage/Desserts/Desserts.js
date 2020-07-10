import React from 'react';
import styles from '../Desserts/Desserts.module.css';
import cinnamonRollsOne from '../../assets/desserts/cinnamonrollsone.jpg';
import cinnamonRollsTwo from '../../assets/desserts/cinnamonrollstwo.jpg';
import iceCreamStraciatella from '../../assets/desserts/straciatella.jpeg';
import iceCreamStrawberry from '../../assets/desserts/strawberryicecream.jpeg';
import iceCreamVanilla from '../../assets/desserts/vanillaicecream.jpeg';
import iceCreamChocolate from '../../assets/desserts/chocolateicecream.jpeg';

const desserts = (props) => {
  return (
     <div className={styles.Desserts}>
       <h1>Desserts</h1>
       <div className={styles.DessertsContainer}>
         <div className={styles.DessertsCard}>
           <div>
             <img src={cinnamonRollsOne} alt="cinnamonrollsone"/>
             <h1>Cinnamon Rolls, 8 pcs</h1>
             <p>Specialty. Small rolls of Dodo dough with cinnamon and sugar</p>
           </div>
           <div>
             <h3>₦700</h3>
             <button>Add to basket</button>
           </div>
         </div>
         <div className={styles.DessertsCard}>
           <div>
             <img src={cinnamonRollsTwo} alt="cinnamonrollstwo"/>
             <h1>Cinnamon Rolls, 16 pcs</h1>
             <p>Specialty. Small rolls of Dodo dough with cinnamon and sugar</p>
           </div>
           <div>
             <h3>₦1,000</h3>
             <button>Add to basket</button>
           </div>
         </div>
         <div className={styles.DessertsCard}>
           <div>
              <img src={iceCreamStraciatella} alt="straciatellaicecream"/>
              <h1>Ice Cream Stracciatella 0.15L</h1>
           </div>
           <div>
             <h3>₦600</h3>
             <button>Add to basket</button>
           </div>
         </div>
         <div className={styles.DessertsCard}>
           <div>
             <img src={iceCreamStrawberry} alt="strawberryicecream"/>
             <h1>Ice cream Strawberry 0.15L</h1>
           </div>
           <div>
             <h3>₦600</h3>
             <button>Add to basket</button>
           </div>
         </div>
         <div className={styles.DessertsCard}>
           <div>
              <img src={iceCreamVanilla} alt="vanilla"/>
              <h1>Ice cream Vanilla 0.15L</h1>
           </div>
           <div>
             <h3>₦600</h3>
             <button>Add to basket</button>
           </div>
         </div>
         <div className={styles.DessertsCard}>
           <div>
             <img src={iceCreamChocolate} alt="chocolate"/>
             <h1>Ice cream Chocolate 0.15L</h1>
           </div>
           <div>
             <h3>₦600</h3>
             <button>Add to Basket</button>
           </div>
         </div>
       </div>
     </div>
  )
}

export default desserts;