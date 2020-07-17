import React, {Component} from 'react';
import styles from '../Pizzas/Pizzas.module.css';
import chickenCurry from '../../../assets/chickencurry.jpeg';
import pepperoniFresh from '../../../assets/pepperonifresh.jpeg';
import chickenBbq from '../../../assets/chickenbbq.jpg';
import sharwarmaPizza from '../../../assets/sharwarmapizza.jpg';
import chickenSuya from '../../../assets/chickensuya.jpg';
import pepperoni from '../../../assets/pepperoni.jpg';
import beefSuya from '../../../assets/beefsuya.jpg';
import chickenSupreme from '../../../assets/chickensupreme.jpg';
import sweetChiliChicken from '../../../assets/sweetchillichicken.jpg';
import spicyMixedPizza from '../../../assets/spicymixedpizza.jpg';
import margherita from '../../../assets/margherita.jpg';
import superMeaty from '../../../assets/supermeaty.jpg';
import cheesyChicken from '../../../assets/cheesychicken.jpg';
import cheeseBurger from '../../../assets/cheeseburgerpizza.jpg';
import meatyOverload from '../../../assets/meatyoverload.jpg';
import meatyBbq from '../../../assets/meatybbq.jpg';
import hawaiian from '../../../assets/hawaiin.jpg';
import veggieOverload from '../../../assets/veggieoverload.jpg';
import Modal from './PizzaModal/Pizzamodal';
import Aux from '../../../hoc/Auxillary/Auxillary'

class pizzas extends Component {
  state ={
    pizzas: [
      {id:1, name: 'Chicken Curry', ingredients: 'Red onions, bell peppers, chicken, pineapple, mozzarella, tomato sauce, curry, chili peppers', price: '3100', image: chickenCurry },
      {id:2, name: 'Pepperoni Fresh', ingredients: 'Pepperoni, mozzarella, green peppers, pizza sauce', price: '2700', image: pepperoniFresh },
      {id:3, name: 'Chicken BBQ', ingredients: 'Chicken, red onions, corn, mozzarella, bbq sauce, tomato sauce', price: '2700', image: chickenBbq },
      {id:4, name: 'Shawarma Pizza', ingredients: 'Mayonnaise & ketchup, spicy chicken, red onions, tomatoes, mozzarella', price: '3100', image: sharwarmaPizza },
      {id:5, name: 'Chicken Suya', ingredients: 'Mayonnaise, spicy sauce, spicy chicken, bell peppers, red onions, suya sauce, tomato sauce, mozzarella, suya spice', price: '2700', image: chickenSuya },
      {id:6, name: 'Pepperoni', ingredients: 'Pepperoni, mozzarella, tomato sauce', price: '2700', image: pepperoni },
      {id:7, name: 'Beef Suya', ingredients: 'Mayonnaise, spicy sauce, spicy meatballs, bell peppers, red onions, mozzarella, suya sauce, tomato sauce, suya spice', price: '2700', image: beefSuya },
      {id:8, name: 'Chicken Supreme', ingredients: 'Spicy sauce, chicken and spicy chicken, mushrooms, bell peppers, olives, red onions, mozzarella, tomato sauce', price: '3100', image: chickenSupreme },
      {id:9, name: 'Sweet Chili Chicken', ingredients: 'Spicy sauce, chicken, chili pepper, mozzarella, sweet chili sauce, tomato sauce', price: '2700', image: chickenCurry },
      {id:10, name: 'Spicy Mixed Pizza', ingredients: 'Spicy sauce, spicy meatballs, spicy chicken, chili pepper, corn, mozzarella, buffalo sauce, tomato sauce', price: '3100', image: spicyMixedPizza },
      {id:11, name: 'Margherita', ingredients: 'Mozarella, tomato sauce', price: '2200', image: margherita },
      {id:12, name: 'Super Meaty', ingredients: 'Chicken, pepperonni, sausages, mozzarella, tomato sauce', price: '3100', image: superMeaty },
      {id:13, name: 'Cheesy Chicken', ingredients: 'Chicken, tomatoes, cheddar, mozzarella, cheese sauce', price: '2700', image: cheesyChicken },
      {id:14, name: 'Cheeseburger Pizza', ingredients: 'Beef, tomatoes, red onions, cheddar, mozzarella, mayonnaise & ketchup, tomato sauce', price: '3100', image: cheeseBurger },
      {id:15, name: 'Meaty Overload', ingredients: 'Spicy sauce, pepperonni, spicy meatballs, chicken, sausages, mozzarella, tomato sauce', price: '3400', image: meatyOverload },
      {id:16, name: 'Meaty BBQ', ingredients: 'Beef, pepperonni, sausages, mozzarella, bbq sauce, tomato sauce', price: '3100', image: meatyBbq },
      {id:17, name: 'Hawaiian', ingredients: 'Chicken, pineapple, mozzarella, sweet chili sauce, tomato sauce', price: '2700', image: hawaiian },
      {id:18, name: 'Veggie Overload', ingredients: 'Mushrooms, bell peppers, corn, olives, red onions, tomatoes, mozzarella, tomato sauce', price: '3100', image: veggieOverload }
    ],
    showModal: false,
  }
  removeModalHandler = (item)=>{
    this.setState({showModal: !this.state.showModal})
  }
  render(){
  return (
   <Aux>
   { this.state.showModal ?
     <Modal ingredients={this.state.pizzas.ingredients} image={this.state.pizzas.image} name={this.state.pizzas.name} key={this.state.pizzas.id}/>: null}
   <div className={styles.Pizza}>
     <h1>Pizza</h1>
     <div className={styles.PizzaContainer}>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={chickenCurry} alt="chickencurry"/>
          <h1>Chicken Curry</h1>
          <p>Red onions, bell peppers, chicken, pineapple, mozzarella, tomato sauce, curry, chili peppers</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button onClick={this.removeModalHandler}>Select</button>
        </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={pepperoniFresh} alt="pepperonifresh"/>
          <h1>Pepperoni Fresh</h1>
          <p>Pepperoni, mozzarella, green peppers, pizza sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={chickenBbq} alt="chickenbbq"/>
          <h1>Chicken BBQ</h1>
          <p>Chicken, red onions, corn, mozzarella, bbq sauce, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
         <img src={sharwarmaPizza} alt="sharwarma"/>
          <h1>Shawarma Pizza</h1>
          <p>Mayonnaise & ketchup, spicy chicken, red onions, tomatoes, mozzarella</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
        </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={chickenSuya} alt="chickensuya"/>
          <h1>Chicken Suya</h1>
          <p>Mayonnaise, spicy sauce, spicy chicken, bell peppers, red onions, suya sauce, tomato sauce, mozzarella, suya spice</p>
         </div>
        <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
        </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
           <img src={pepperoni} alt="pepperoni"/>
           <h1>Pepperoni</h1>
           <p>Pepperoni, mozzarella, tomato sauce</p>
         </div> 
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={beefSuya} alt="beefsuya"/>
          <h1>Beef Suya</h1>
          <p>Mayonnaise, spicy sauce, spicy meatballs, bell peppers, red onions, mozzarella, suya sauce, tomato sauce, suya spice</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={chickenSupreme} alt="chickensupreme"/>
          <h1>Chicken Supreme</h1>
          <p>Spicy sauce, chicken and spicy chicken, mushrooms, bell peppers, olives, red onions, mozzarella, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
         <img src={sweetChiliChicken} alt="sweetchillichicken"/>
          <h1>Sweet Chili Chicken</h1>
          <p>Spicy sauce, chicken, chili pepper, mozzarella, sweet chili sauce, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={spicyMixedPizza} alt="spicymixed"/>
          <h1>Spicy Mixed Pizza</h1>
          <p>Spicy          sauce, spicy meatballs, spicy chicken, chili pepper, corn, mozzarella, buffalo sauce, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={margherita} alt="margherita"/>
          <h1>Margherita</h1>
          <p>Mozzarella, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,200</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={superMeaty} alt="supermeaty"/>
          <h1>Super Meaty</h1>
          <p>Chicken, pepperonni, sausages, mozzarella, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={cheesyChicken} alt="cheesychicken"/>
          <h1>Cheesy Chicken</h1>
          <p>Chicken, tomatoes, cheddar, mozzarella, cheese sauce</p>
         </div> 
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={cheeseBurger} alt="cheeseburger"/>
          <h1>Cheeseburger Pizza</h1>
          <p>Beef, tomatoes, red onions, cheddar, mozzarella, mayonnaise & ketchup, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={meatyOverload} alt="meatyoverload"/>
          <h1>Meaty Overload</h1>
          <p>Spicy sauce, pepperonni, spicy meatballs, chicken, sausages, mozzarella, tomato sauce</p>
         </div> 
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,400</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={meatyBbq} alt="meatybbq"/>
          <h1>Meaty BBQ</h1>
          <p>Beef, pepperonni, sausages, mozzarella, bbq sauce, tomato sauce</p>
         </div> 
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦3,100</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={hawaiian} alt="hawaiin"/>
          <h1>Hawaiian</h1>
          <p>Chicken, pineapple, mozzarella, sweet chili sauce, tomato sauce</p>
         </div>
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
       <div className={styles.PizzaCard}>
         <div className={styles.PizzaCardHeader}>
          <img src={veggieOverload} alt="veggie"/>
          <h1>Veggie Overload</h1>
          <p>Mushrooms, bell peppers, corn, olives, red onions, tomatoes, mozzarella, tomato sauce</p>
         </div> 
         <div className={styles.PizzaCardFooter}>
          <h3>from ₦2,700</h3>
          <button>Select</button>
         </div>
       </div>
     </div>
   </div>
   </Aux>
  )
}
}
export default pizzas;