import React, {Component} from 'react';
import styles from '../Pizzabuilder/Pizzabuilder.module.css';
import Pizzapan from '../assets/Pizzabuilder/pizzapan.png';
import Marinara from '../assets/Pizzabuilder/sauce-1.png';
import Ranchdressing from '../assets/Pizzabuilder/sauce-2.png';
import Bbqsauce from '../assets/Pizzabuilder/sauce-3.png';
import Hotsauce from '../assets/Pizzabuilder/sauce-4.png';
import Mozarella from '../assets/Pizzabuilder/cheese1.png';
import Extramozarella from '../assets/Pizzabuilder/cheese-2.png';
import soMuchMozz from '../assets/Pizzabuilder/cheese-3.png';
import Parmesan from '../assets/Pizzabuilder/cheese-4.png';
import Cheddarcheese from '../assets/Pizzabuilder/cheese-5.png';
import Extracheddar from '../assets/Pizzabuilder/cheese-6.png';
import Pepperoni from '../assets/Pizzabuilder/pepperoni.png';
import Sausage from '../assets/Pizzabuilder/sausage.png';
import Pineapple from '../assets/Pizzabuilder/pineapple.png';
import Peppers from '../assets/Pizzabuilder/peppers.png';
import Onions from '../assets/Pizzabuilder/onions.png';
import Tomatoes from '../assets/Pizzabuilder/tomatoes.png';
import Spinach from '../assets/Pizzabuilder/spinach.png';
import Mushrooms from '../assets/Pizzabuilder/mushrooms.png';
import Blackolives from '../assets/Pizzabuilder/olives.png';
import Ham from '../assets/Pizzabuilder/ham.png';
import Bacon from '../assets/Pizzabuilder/bacon.png';
import Chicken from '../assets/Pizzabuilder/chicken.png';

class PizzaBuilder extends Component {
  
  render (){
    return (
        <section className={styles.PizzaBuilder}>
             <div className={styles.PizzaBuilderHeading}>
               <h1>Create your own</h1>
               <h2>Show us what you got!</h2>
               <p>Didn't like our list of custom made Pizzas and think you could do something even better? Use the pizza builder to create your own pizza from a curated list of ingredients and send your order to us.</p>
             </div>
             <div>
               <div className={styles.Pizza}>
                 <div>
                   <div className={styles.Pizzapan}>
                     <img src={Pizzapan} alt="pizzapan"/>
                   </div>
                   <div className={styles.Sauce}>
                    <div>
                      <img src={Marinara} alt="marinara"/>
                    </div>
                    <div>
                      <img src={Ranchdressing} alt = "ranchdressing"/>
                    </div>
                    <div>
                      <img src={Bbqsauce} alt="bbqsauce"/>
                    </div>
                    <div>
                      <img src={Hotsauce} alt="hotsauce"/>
                    </div>
                   </div>
                   <div className={styles.Cheese}>
                      <div>
                        <img src={Mozarella} alt="mozarella"/>
                      </div>
                      <div>
                        <img src={Extramozarella} alt="extramozarella"/>
                      </div>
                      <div>
                        <img src={soMuchMozz} alt="somuchmozz"/>
                      </div>
                      <div>
                        <img src={Parmesan} alt="parmesan"/>
                      </div>
                      <div>
                        <img src={Cheddarcheese} alt="cheddarcheese"/>
                      </div>
                      <div>
                        <img src={Extracheddar} alt="extracheddar"/>
                      </div>
                     </div>
                     <div className={styles.Toppings}>
                     <div>
                       <img src={Pepperoni} alt="pepperoni"/>
                     </div>
                     <div>
                       <img src={Sausage} alt="sausage"/>
                     </div>
                     <div>
                       <img src={Pineapple} alt="pineapple"/>
                     </div>
                     <div>
                       <img src={Peppers} alt="peppers"/>
                     </div>
                     <div>
                       <img src={Onions} alt="onions"/>
                     </div>
                     <div>
                       <img src={Tomatoes} alt="tomatoes"/>
                     </div>
                     <div>
                       <img src={Spinach} alt="spinach"/>
                     </div>
                     <div>
                       <img src={Mushrooms} alt = "Mushrooms"/>
                     </div>
                     <div>
                       <img src={Blackolives} alt="blackolives"/>
                     </div>
                     <div>
                       <img src={Ham} alt="ham"/>
                     </div>
                     <div>
                       <img src={Bacon} alt="bacon"/>
                     </div>
                     <div>
                       <img src={Chicken} alt = "chicken"/>
                     </div>
                  </div>
                 </div> 
                 <div className={styles.Input}>
                   <div>
                     <h1>Sauce</h1>
                     <div>
                       <div>
                        <input type="radio" name="sauce" id="Marinara" value = "Marinara"/>
                        <label for="Marinara">Marinara</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="Ranchdressing" value = "Ranchdressing"/>
                        <label for="Ranchdressing">Ranch Dressing</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="bbqsauce" value = "bbqsauce"/>
                        <label for="bbqsauce">BBQ sauce</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="hotsauce" value = "hotsauce"/>
                        <label for="hotsauce">Hot sauce</label>
                       </div>
                     </div>
                   </div> 
                   <div>
                     <h1>Cheese</h1>
                     <div>
                       <div>
                        <input type="radio" name="cheese" id="Mozzarella" value = "Mozzarella"/>
                        <label for="Mozzarella">Mozzarella</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="extramozzarella" value = "extramozarella"/>
                        <label for="extramozzarella">Extra Mozzarella</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese"  id="somuchmozz" value = "somuchmozz"/>
                        <label for="somuchmozz">So Much Mozz</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="parmesan" value = "parmesan"/>
                        <label for="parmesan">Parmesan</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="cheddarcheese" value = "cheddarcheese"/>
                        <label for="cheddarcheese">Cheddar Cheese</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="extracheddar" value = "extracheddar"/>
                        <label for="extracheddar">Extra Cheddar</label>
                       </div>
                     </div>
                   </div>
                   <div>
                    <h1>Toppings</h1>
                    <div>
                      <div>
                       <input type="checkbox" name="pepperoni"  id="pepperoni" value = "pepperoni"/>
                       <label for="pepperoni">Pepperoni</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="sausage" id="sausage" value="sausage"/>
                       <label for = "sausage">Sausage</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="pineapple" id="pineapple" value="pineapple"/>
                       <label for = "pineapple">Pineapple</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="peppers" id="peppers" value="peppers"/>
                       <label for = "peppers">Peppers</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="sausage" id="sausage" value="sausage"/>
                       <label for = "sausage">Sausage</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="onions" id="onions" value="onions"/>
                       <label for = "onions">Onions</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="tomatoes" id="tomatoes" value="tomatoes"/>
                       <label for = "tomatoes">Tomatoes</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="spinach" id="spinach" value="spinach"/>
                       <label for = "spinach">Spinach</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="mushrooms" id="mushrooms" value="mushrooms"/>
                       <label for = "mushrooms">Mushrooms</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="blackolives" id="blackolives" value="blackolives"/>
                       <label for = "blackolives">Black Olives</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="ham" id="ham" value="ham"/>
                       <label for = "ham">Ham</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="bacon" id="bacon" value="bacon"/>
                       <label for = "bacon">Bacon</label>
                      </div> 
                      <div>
                       <input type="checkbox" name ="chicken" id="chicken" value="chicken"/>
                       <label for = "chicken">Chicken</label>
                      </div>
                       
                    </div>
                  </div>
                 </div>  
               </div>
             </div>
        </section>
    )
  }
}

export default PizzaBuilder;