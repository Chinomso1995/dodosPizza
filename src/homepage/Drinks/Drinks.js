import React from 'react';
import styles from '../Drinks/Drinks.module.css';
import cocaColaOne from '../../assets/drinks/cocacolaone.jpg';
import cocaColaTwo from '../../assets/drinks/cocacolatwo.jpg';
import cocaColaThree from '../../assets/drinks/cocacolathree.jpg';
import fantaOne from '../../assets/drinks/fantaone.jpg';
import fantaTwo from '../../assets/drinks/fantatwo.jpg';
import spriteOne from '../../assets/drinks/spriteone.jpg';
import spriteTwo from '../../assets/drinks/spritetwo.jpg';
import heinekenBeer from '../../assets/drinks/heinekeenbeer.jpg';
import schweppesChapman from '../../assets/drinks/schweppeschapman.jpg';
import schweppesPineapple from '../../assets/drinks/schweppespineapple.jpg';
import schweppesVirginMojito from '../../assets/drinks/schweppesvirginmojito.jpg';
import evaWater from '../../assets/drinks/evastillwater.jpg';
import fiveAliveAppleOne from '../../assets/drinks/fivealiveapple.jpg';
import fiveAliveAppleTwo from '../../assets/drinks/fivealiveappletwo.jpg';
import fiveAliveOrangeOne from '../../assets/drinks/fivealiveorangeone.jpg';
import fiveAliveOrangeTwo from '../../assets/drinks/fivealiveorangetwo.jpg';
import fiveAliveTropicOne from '../../assets/drinks/fivealivetropicone.jpg';
import fiveAliveTropicTwo from '../../assets/drinks/fivealivetropictwo.jpg';
import americano from '../../assets/drinks/americano.jpeg';
import cafeLate from '../../assets/drinks/cafelate.jpeg';
import cappucino from '../../assets/drinks/cappucino.jpeg';


const drinks = (props) => {
  return(
    <div className={styles.Drinks} id="drinks">
      <h1>Drinks</h1>
      <div className={styles.DrinksContainer}>
        <div className={styles.DrinksCard}>
          <div>
            <img src={cocaColaOne} alt="cocacola"/>
            <h1>Coca-Cola</h1>
            <p>0.5 l</p>
          </div>
          <div>
             <h3>₦300</h3>
             <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={cocaColaTwo} alt="cocacola"/>
            <h1>Coca Cola</h1>
            <p>1 l</p>
          </div>
          <div>
            <h3>₦500</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={cocaColaThree} alt="cocacola"/>
            <h1>Coca-Cola Zero</h1>
            <p>0.5 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fantaOne} alt="fanta"/>
            <h1>Fanta</h1>
            <p>0.6 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fantaTwo} alt="fanta"/>
            <h1>Fanta</h1>
            <p>1 l</p>
          </div>
          <div>
            <h3>₦500</h3>
            <button>Add to Basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={spriteOne} alt="sprite"/>
            <h1>Sprite</h1>
            <p>0.6 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={spriteTwo} alt="sprite"/>
            <h1>Sprite</h1>
            <p>1 l</p>
          </div>
          <div>
            <h3>₦500</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={heinekenBeer} alt="beer"/>
            <h1>Beer Heineken</h1>
            <p>0.33 l</p>
          </div>
          <div>
            <h3>₦500</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
             <img src={schweppesChapman} alt="schweppes"/>
             <h1>Schweppes Chapman</h1>
             <p>0.33 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
             <img src={schweppesPineapple} alt="schweppes"/>
             <h1>Schweppes Pineapple</h1>
             <p>0.33 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={schweppesVirginMojito} alt="schweppes"/>
            <h1>Schweppes Virigin Mojito</h1>
            <p>0.33 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={evaWater} alt="water"/>
            <h1>Eva still water</h1>
            <p>0.75 l</p>
          </div>
          <div>
            <h3>₦200</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fiveAliveAppleOne} alt="fivealive"/>
            <h1>Juice 5 Alive Apple</h1>
            <p>0.35 l</p>
          </div>
          <div>
            <h3>₦200</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fiveAliveAppleTwo} alt="fivealive"/>
            <h1>Juice 5 Alive Apple</h1>
            <p>0.9 l</p>
          </div>
          <div>
            <h3>₦700</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fiveAliveOrangeOne} alt="fivealive"/>
            <h1>Juice 5 Alive Orange</h1>
            <p>0.3 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
             <img src={fiveAliveOrangeTwo} alt="fivealive"/>
             <h1>Juice 5 Alive Orange</h1>
             <p>0.85 l</p>
          </div>
          <div>
            <h3>₦700</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
             <img src={fiveAliveTropicOne} alt="fivealive"/>
             <h1>Juice 5 Alive Tropic</h1>
             <p>0.35 l</p>
          </div>
          <div>
            <h3>₦300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={fiveAliveTropicTwo} alt="fivealive"/>
            <h1>Juice 5 Alive Tropic</h1>
            <p>0.9 l</p>
          </div>
          <div>
            <h3>₦700</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={americano} alt="coffee"/>
            <h1>Americano</h1>
            <p>Espresso, hot water, 12 oz</p>
          </div>
          <div>
            <h3>₦1000</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={cafeLate} alt="coffee"/>
            <h1>Cafe Latte</h1>
            <p>Espresso, Steamed Milk, 12 oz</p>
          </div>
          <div>
            <h3>₦1200</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.DrinksCard}>
          <div>
            <img src={cappucino} alt="coffee"/>
            <h1>Cappuccino</h1>
            <p>Espresso, Steamed Milk, Foam Milk, 12 oz</p>
          </div>
          <div>
            <h3>₦1200</h3>
            <button>Add to basket</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default drinks;