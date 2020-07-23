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
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../../Components/Backdrop/Backdrop'

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
    selectedPizza: null
  }
  toggleModalHandler = (p)=>{
    this.setState({showModal: !this.state.showModal, selectedPizza: p});
    
  }
  render(){
  const pizza = this.state.pizzas;
  
  return (
   <Aux>
     { this.state.showModal?
       <Backdrop clicked={this.toggleModalHandler}/>: null}
   { this.state.showModal ?
    
     <Modal 
     clicked={this.toggleModalHandler}
     ingredients={this.state.selectedPizza.ingredients} 
     price={this.state.selectedPizza.price} 
     image={this.state.selectedPizza.image} 
     name={this.state.selectedPizza.name} 
     key={this.state.pizzas.id}       
     />: null}
    
     <div className={styles.Pizza} id="pizza">
             <h1>Pizza</h1>
      <div className={styles.PizzaContainer}>
         {pizza.map(p=>{
           
    return <div>
      <div className={styles.PizzaCard}>
        <div className={styles.PizzaCardHeader}>
           <img src={p.image} alt="pizza"/>
           <h1>{p.name}</h1>
          <p>{p.ingredients}</p>
        </div>
        <div className={styles.PizzaCardFooter}>
           <h3>from ₦{p.price}</h3>
           <button onClick={()=>this.toggleModalHandler(p)}>Select</button>
        </div>  
    </div>
    </div>
  })}
      </div>
      </div>
 
  </Aux>
  )

}
}
export default pizzas;