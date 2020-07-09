import React from 'react';
import styles from '../../homepage/Pizza/Pizza.module.css';
import halfHalf from '../../assets/halfpizza.jpg';
import chickenCurry from '../../assets/chickencurry.jpeg';
import pepperoniFresh from '../../assets/pepperonifresh.jpeg';
import chickenBbq from '../../assets/chickenbbq.jpg';
import sharwarmaPizza from '../../assets/sharwarmapizza.jpg';
import chickenSuya from '../../assets/chickensuya.jpg';
import pepperoni from '../../assets/pepperoni.jpg';
import beefSuya from '../../assets/beefsuya.jpg';
import chickenSupreme from '../../assets/chickensupreme.jpg';
import sweetChiliChicken from '../../assets/sweetchillichicken.jpg';
import spicyMixedPizza from '../../assets/spicymixedpizza.jpg';
import margherita from '../../assets/margherita.jpg';
import superMeaty from '../../assets/supermeaty.jpg';
import cheesyChicken from '../../assets/cheesychicken.jpg';
import cheeseBurger from '../../assets/cheeseburgerpizza.jpg';
import meatyOverload from '../../assets/meatyoverload.jpg';
import meatyBbq from '../../assets/meatybbq.jpg';
import hawaiian from '../../assets/hawaiin.jpg';
import veggieOverload from '../../assets/veggieoverload.jpg';


const pizza = (props) => {
  return (
   <div className={styles.Pizza}>
     <h1>Pizza</h1>
     <div className={styles.PizzaContainer}>
       <div>
         <img src={halfHalf} alt="half-half"/>
         <h1>Half & Half pizza</h1>
         <p>Two pizzas in one</p>
         <div>
          <h3>from ₦4,800</h3>
          <button>Create</button>
         </div>
       </div>
       <div>
          <img src={chickenCurry} alt="chickencurry"/>
          <h1>Chicken Curry</h1>
          <p>Red onions, bell peppers, chicken, pineapple, mozzarella, tomato sauce, curry, chili peppers</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
         <img src={pepperoniFresh} alt="pepperonifresh"/>
          <h1>Pepperoni Fresh</h1>
         <p>Pepperoni, mozzarella, green peppers, pizza sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
         <img src={chickenBbq} alt="chickenbbq"/>
          <h1>Chicken BBQ</h1>
         <p>Chicken, red onions, corn, mozzarella, bbq sauce, tomato sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
         <img src={sharwarmaPizza} alt="sharwarma"/>
          <h1>Shawarma Pizza</h1>
         <p>Mayonnaise & ketchup, spicy chicken, red onions, tomatoes, mozzarella</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
         <img src={chickenSuya} alt="chickensuya"/>
          <h1>Chicken Suya</h1>
         <p>Mayonnaise, spicy sauce, spicy chicken, bell peppers, red onions, suya sauce, tomato sauce, mozzarella, suya spice</p>
        <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
          <img src={pepperoni} alt="pepperoni"/>
          <h1>Pepperoni</h1>
         <p>Pepperoni, mozzarella, tomato sauce</p>
        <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div>
         <img src={beefSuya} alt="beefsuya"/>
          <h1>Beef Suya</h1>
         <p>Mayonnaise, spicy sauce, spicy meatballs, bell peppers, red onions, mozzarella, suya sauce, tomato sauce, suya spice</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={chickenSupreme} alt="chickensupreme"/>
          <h1>Chicken Supreme</h1>
         <p>Spicy sauce, chicken and spicy chicken, mushrooms, bell peppers, olives, red onions, mozzarella, tomato sauce</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={sweetChiliChicken} alt="sweetchillichicken"/>
          <h1>Sweet Chili Chicken</h1>
         <p>Spicy sauce, chicken, chili pepper, mozzarella, sweet chili sauce, tomato sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={spicyMixedPizza} alt="spicymixed"/>
          <h1>Spicy Mixed Pizza</h1>
         <p>Spicy sauce, spicy meatballs, spicy chicken, chili pepper, corn, mozzarella, buffalo sauce, tomato sauce</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={margherita} alt="margherita"/>
          <h1>Margherita</h1>
         <p>Mozzarella, tomato sauce</p>
         <div>
          <h3>from ₦2,200</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={superMeaty} alt="supermeaty"/>
          <h1>Super Meaty</h1>
         <p>Chicken, pepperonni, sausages, mozzarella, tomato sauce</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={cheesyChicken} alt="cheesychicken"/>
          <h1>Cheesy Chicken</h1>
         <p>Chicken, tomatoes, cheddar, mozzarella, cheese sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={cheeseBurger} alt="cheeseburger"/>
          <h1>Cheeseburger Pizza</h1>
         <p>Beef, tomatoes, red onions, cheddar, mozzarella, mayonnaise & ketchup, tomato sauce</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={meatyOverload} alt="meatyoverload"/>
          <h1>Meaty Overload</h1>
         <p>Spicy sauce, pepperonni, spicy meatballs, chicken, sausages, mozzarella, tomato sauce</p>
         <div>
          <h3>from ₦3,400</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={meatyBbq} alt="meatybbq"/>
          <h1>Meaty BBQ</h1>
         <p>Beef, pepperonni, sausages, mozzarella, bbq sauce, tomato sauce</p>
         <div>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={hawaiian} alt="hawaiin"/>
          <h1>Hawaiian</h1>
         <p>Chicken, pineapple, mozzarella, sweet chili sauce, tomato sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div>
         <img src={veggieOverload} alt="veggie"/>
          <h1>Veggie Overload</h1>
         <p>Mushrooms, bell peppers, corn, olives, red onions, tomatoes, mozzarella, tomato sauce</p>
         <div>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
     </div>
   </div>
  )
}

export default pizza;