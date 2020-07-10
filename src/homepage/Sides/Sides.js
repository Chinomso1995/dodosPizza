import React from 'react';
import styles from '../Sides/Sides.module.css'
import sausageRollOne from '../../assets/sides/sausagerollone.jpeg';
import sausageRollTwo from '../../assets/sides/sausagerolltwo.jpeg';
import classicDodster from '../../assets/sides/classicdodster.jpg';
import beefSuyaDodster from '../../assets/sides/beefysuyadodster.jpg';
import chickenBbqDodster from '../../assets/sides/chickenbbqdodster.jpg';
import potatoWedges from '../../assets/sides/potatowedges.jpg';
import chickenWingsOne from '../../assets/sides/chickenwingsbbq.jpg';
import chickenWingsTwo from '../../assets/sides/chickenwingsbbqtwo.jpg';
import buffaloWingsOne from '../../assets/sides/buffalowingsone.jpg';
import buffaloWingsTwo from '../../assets/sides/buffalowingstwo.jpg';
import cheeseRollsOne from '../../assets/sides/cheeserollsone.jpg';
import cheeseRollsTwo from '../../assets/sides/cheeserollstwo.jpg';
import chickenStripsOne from '../../assets/sides/chickenstripsone.jpeg';
import chickenStripsTwo from '../../assets/sides/chickenstripstwo.jpeg';

const slides = (props)=> {
  return(
    <div className={styles.Sides}>
      <h1>Sides</h1>
      <div className={styles.SidesContainer}>
        <div className={styles.SidesCard}>
          <div>
            <img src={sausageRollOne} alt="sausagerollone"/>
            <h1>Sausage Rolls, 8 pcs</h1>
            <p>Specialty. Small rolls of Dodo dough with cheese sauce, mozzarella & sausages</p>
          </div>
          <div>
            <h3>₦1,300</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={sausageRollTwo} alt="sausagerolltwo"/>
            <h1>Sausage Rolls, 16 pcs</h1>
            <p>Specialty. Small rolls of Dodo dough with cheese sauce, mozzarella & sausages</p>
          </div>
          <div>
            <h3>₦1,800</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={classicDodster} alt="classicdodster"/>
            <h1>Classic Dodster</h1>
            <p>Hot baked wrap with chicken, tomatoes, mozzarella and mayonnaise & ketchup</p>
          </div>
          <div>
            <h3>₦1,400</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={beefSuyaDodster} alt="beefsuyadodster"/>
            <h1>Beef Suya Dodster</h1>
            <p>Hot baked wrap with spicy meatballs, red onions, tomatoes, mozzarella and suya mayonnaise sauce</p>
          </div>
          <div>
            <h3>₦1,400</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={chickenBbqDodster} alt="chickenbbqdodster"/>
            <h1>Chicken BBQ Dodster</h1>
            <p>Hot baked wrap with chicken, tomatoes, mozzarella and BBQ sauce</p>
          </div>
          <div>
            <h3>₦1,400</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={potatoWedges} alt="potatowedges"/>
            <h1>Potato Wedges</h1>
            <p>Hot potatoes baked in oven</p>
          </div>
          <div>
            <h3>₦1,000</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={chickenWingsOne} alt="chickenwingsone"/>
            <h1>BBQ Chicken Wings, 5 pcs</h1>
            <p>Baked chicken wings marinated in BBQ sauce</p>
          </div>
          <div>
            <h3>₦1,500</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={chickenWingsTwo} alt="chickenwingstwo"/>
            <h1>BBQ Chicken Wings, 10 pcs</h1>
            <p>Baked chicken wings marinated in BBQ sauce</p>
          </div>
          <div>
            <h3>₦3,000</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={buffaloWingsOne} alt="buffalowingsone"/>
            <h1>Buffalo Chicken Wings, 5 pcs</h1>
            <p>Baked chicken wings marinated in buffalo sauce</p>
          </div>
          <div>
            <h3>₦1,500</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={buffaloWingsTwo} alt="buffalowingstwo"/>
            <h1>Buffalo Chicken Wings, 10 pcs</h1>
            <p>Baked chicken wings marinated in buffalo sauce</p>
          </div>
          <div>
            <h3>₦3,000</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={cheeseRollsOne} alt="cheeserollsone"/>
            <h1>Cheese Rolls, 8 pcs</h1>
            <p>Specialty. Small rolls of Dodo dough with mozzarella and cheese sauce</p>
          </div>
          <div>
            <h3>₦1,200</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={cheeseRollsTwo} alt="cheeserollstwo"/>
            <h1>Cheese Rolls, 16 pcs</h1>
            <p>Specialty. Small rolls of Dodo dough with mozzarella and cheese sauce</p>
          </div>
          <div>
            <h3>₦1,700</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={chickenStripsOne} alt="chickenstripsone"/>
            <h1>Chicken Strips, 4 pcs</h1>
            <p>Baked Chicken Strips</p>
          </div>
          <div>
            <h3>₦1,200</h3>
            <button>Add to basket</button>
          </div>
        </div>
        <div className={styles.SidesCard}>
          <div>
            <img src={chickenStripsTwo} alt="chickenstripstwo"/>
            <h1>Chicken Strips, 8 pcs</h1>
            <p>Baked Chicken Strips</p>
          </div>
          <div>
            <h3>₦1,900</h3>
            <button>Add to basket</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default slides;