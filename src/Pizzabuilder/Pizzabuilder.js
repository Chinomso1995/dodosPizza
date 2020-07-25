import React, {Component} from 'react';
import styles from '../Pizzabuilder/Pizzabuilder.module.css';
import Pizzapan from '../assets/Pizzabuilder/pizzapan.png';
import Marinara from '../assets/Pizzabuilder/sauce-1.png';
import Ranchdressing from '../assets/Pizzabuilder/sauce-4.png';
import Bbqsauce from '../assets/Pizzabuilder/sauce-2.png';
import Hotsauce from '../assets/Pizzabuilder/sauce-3.png';
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
import Footer from '../homepage/Footer/Footer';
import Aux from '../hoc/Auxillary/Auxillary';
import Radium from 'radium';
import axios from '../axios-orders';

class PizzaBuilder extends Component {
  state={
    checked: {},
    showSauceIngredients: false,
    showCheeseIngredients: false,
    showToppingsIngredients: false
  }
  toggleSauceHandler =(saucetype) => ()=>{
    this.setState({toggle: saucetype});
  }
  toggleCheeseHandler = (cheesetype)=> ()=>{
    this.setState({togglecheese: cheesetype});
  }
  handleCheckClick = (e)=>{
    let map = {...this.state.checked};
    map[e.target.name] = map[e.target.name] ? !map[e.target.name]:true
    this.setState({checked: map})
  }
  toggleSauceIngredientsHandler = ()=>{
    this.setState({showSauceIngredients: !this.state.showSauceIngredients})
  }
  toggleCheeseIngredientsHandler = ()=>{
    this.setState({showCheeseIngredients: !this.state.showCheeseIngredients})
  }
  toggleToppingsIngredientsHandler = ()=>{
    this.setState({showToppingsIngredients: !this.state.showToppingsIngredients})
  }
  sendingRequestHandler=()=>{
    const order = this.state.checked
    axios.post('/customorders.json', order)
         .then(response=> console.log(response))
  }
  render (){
    let sauceNavbarClasses = [styles.Navbar];
    let cheeseNavbarClasses = [styles.Navbar];
    let toppingsNavbarClasses = [styles.Navbar]
    if(this.state.showSauceIngredients){
      sauceNavbarClasses= [styles.Navbar, styles.SauceOpen]
    }
    if(this.state.showCheeseIngredients){
      cheeseNavbarClasses= [styles.Navbar, styles.CheeseOpen]
    }
    if(this.state.showToppingsIngredients){
      toppingsNavbarClasses= [styles.Navbar, styles.ToppingsOpen]
    }
    return (
      <Aux>
        <div className={styles.PizzaBuilder}>
             <div className={styles.PizzaBuilderHeading}>
               <h1>Create your own</h1>
               <h2>Show us what you got!</h2>
               <p>Didn't like our list of custom made Pizzas and think you could do something even better? Use the pizza builder to create your own pizza from a curated list of ingredients and send your order to us.</p>
             </div>
             <div>
               <div className={styles.Pizza}>
                 <div className={styles.Pizzapan}>
                   <img className={styles.Pizzapanimage}  src={Pizzapan} alt="pizzapan"/>
                   <div>
                     <div className={styles.Sauce} >
                     <div>
                      <img style={{
                        display: this.state.toggle === "Marinara"?"block":null, position:'absolute', 
                        zIndex: '100', 
                        height: '400px', 
                        width: '400px', 
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}  src={Marinara} alt="marinara"/>
                     </div>
                     <div>
                      <img style={{display: this.state.toggle === "Ranchdressing"?"block":null, position:'absolute',
                      zIndex: '100', 
                      height: '400px', 
                      width: '400px', 
                      top:'0', 
                      left: '0',
                      '@media(max-width:500px)':{
                        height: '200px',
                        width: '200px'
                      }}} src={Ranchdressing} alt = "ranchdressing"/>
                     </div>
                     <div>
                      <img style={{display: this.state.toggle === "bbqsauce"?"block":null, position:'absolute', 
                      zIndex: '100', 
                      height: '400px', 
                      width: '400px', 
                      top:'0', 
                      left: '0',
                      '@media(max-width:500px)':{
                        height: '200px',
                        width: '200px'
                      }}} src={Bbqsauce} alt="bbqsauce"/>
                    </div>
                    <div>
                      <img style={{display: this.state.toggle === "hotsauce"?"block":null, 
                      position:'absolute', 
                      zIndex: '100', 
                      height: '400px', 
                      width: '400px', 
                      top:'0', 
                      left: '0',
                      '@media(max-width:500px)':{
                        height: '200px',
                        width: '200px'
                      }}} src={Hotsauce} alt="hotsauce"/>
                    </div>
                   </div>
                   <div className={styles.Cheese}>
                      <div>
                        <img style={{display: this.state.togglecheese === "mozzarella"?"block":null, 
                        position:'absolute', 
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px', 
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}} src={Mozarella} alt="mozarella"/>
                      </div>
                      <div>
                        <img style={{display: this.state.togglecheese === "extramozarella"?"block":null, 
                        position:'absolute', 
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px', 
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}} src={Extramozarella} alt="extramozarella"/>
                      </div>
                      <div>
                        <img  style={{display: this.state.togglecheese === "somuchmozz"?"block":null, 
                        position:'absolute', 
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px',
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}src={soMuchMozz} alt="somuchmozz"/>
                      </div>
                      <div>
                        <img style={{display: this.state.togglecheese === "parmesan"?"block":null, 
                        position:'absolute', 
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px', 
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}} src={Parmesan} alt="parmesan"/>
                      </div>
                      <div>
                        <img style={{display: this.state.togglecheese === "cheddarcheese"?"block":null, 
                        position:'absolute',
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px',
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}}   src={Cheddarcheese} alt="cheddarcheese"/>
                      </div>
                      <div>
                        <img style={{display: this.state.togglecheese === "extracheddar"?"block":null, 
                        position:'absolute', 
                        zIndex: '200', 
                        height: '400px', 
                        width: '400px',
                        top:'0', 
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}  src={Extracheddar} alt="extracheddar"/>
                      </div>
                     </div>
                     <div className={styles.Toppings}>
                     <div>
                       <img style={{display: this.state.checked['pepperoni'] ? "block":null, position:'absolute', 
                       zIndex: '300', 
                       height: '400px', 
                       width: '400px',
                       top:'0', 
                       left: '0',
                       '@media(max-width:500px)':{
                        height: '200px',
                        width: '200px'
                      }}} src={Pepperoni} alt="pepperoni"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['sausage'] ? "block":null, position:'absolute', 
                       zIndex: '300',
                      height: '400px',
                      width: '400px',
                      top:'0',
                      left: '0',
                      '@media(max-width:500px)':{
                        height: '200px',
                        width: '200px'
                      }}}  src={Sausage} alt="sausage"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['pineapple'] ? "block":null, position:'absolute',
                      zIndex: '300',
                       height: '400px', 
                       width: '400px', 
                       top:'0',
                        left: '0',
                        '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        } }}  src={Pineapple} alt="pineapple"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['peppers'] ? "block":null, position:'absolute',
                        zIndex: '300',
                         height: '400px', 
                         width: '400px', 
                         top:'0',
                          left: '0',
                          '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}}  src={Peppers} alt="peppers"/>
                     </div>
                     <div>
                       <img  style={{display: this.state.checked['onions'] ? "block":null, position:'absolute',
                        zIndex: '300',
                         height: '400px', 
                         width: '400px', 
                         top:'0',
                          left: '0',
                          '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}} src={Onions} alt="onions"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['tomatoes'] ? "block":null, position:'absolute',
                        zIndex: '300',
                         height: '400px', 
                         width: '400px', 
                         top:'0', 
                         left: '0',
                         '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}  src={Tomatoes} alt="tomatoes"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['spinach'] ? "block":null, position:'absolute',
                        zIndex: '300', 
                        height: '400px',
                         width: '400px',
                          top:'0',
                           left: '0',
                           '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}}  src={Spinach} alt="spinach"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['mushrooms'] ? "block":null, position:'absolute',
                        zIndex: '300', 
                        height: '400px',
                         width: '400px', 
                         top:'0', 
                         left: '0',
                         '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}  src={Mushrooms} alt = "Mushrooms"/>
                     </div>
                     <div>
                       <img  style={{display: this.state.checked['mushrooms'] ? "block":null, position:'absolute',
                        zIndex: '300', 
                        height: '400px',
                         width: '400px', 
                         top:'0',
                          left: '0',
                          '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}} src={Blackolives} alt="blackolives"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['ham'] ? "block":null, position:'absolute',
                        zIndex: '300',
                         height: '400px',
                          width: '400px', 
                          top:'0', 
                          left: '0',
                          '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}}  src={Ham} alt="ham"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['bacon'] ? "block":null, position:'absolute', 
                       zIndex: '300',
                        height: '400px', 
                        width: '400px',
                         top:'0', 
                         left: '0',
                         '@media(max-width:500px)':{
                          height: '200px',
                          width: '200px'
                        }}}  src={Bacon} alt="bacon"/>
                     </div>
                     <div>
                       <img style={{display: this.state.checked['chicken'] ? "block":null, position:'absolute',
                        zIndex: '300',
                         height: '400px', 
                         width: '400px',
                          top:'0',
                           left: '0',
                           '@media(max-width:500px)':{
                            height: '200px',
                            width: '200px'
                          }}}  src={Chicken} alt = "chicken"/>
                     </div>
                  </div>
                 </div> 
                 </div>
                 <div className={styles.Input}>
                   <div>
                     <div className={styles.InputHeading}>
                       <h1 style={{color: 'black'}}>Sauce</h1>
                       <div onClick={this.toggleSauceIngredientsHandler} className={sauceNavbarClasses.join(' ')}>
                         <div></div>
                         <div></div>
                       </div>
                     </div>
                      <div style={{
                         "@media(max-width: 500px)":{
                           display: !this.state.showSauceIngredients ? null: "grid",
                           gridTemplateColumns: "1fr 1fr",
                           gridTemplateRows: "1fr 1fr"
                         }
                       }} className={styles.InputSauce}>
                       <div>
                        <input type="radio" name="sauce" id="Marinara" value = "Marinara"
                        onChange={this.toggleSauceHandler("Marinara")}
                        checked={this.state.toggle==="Marinara"}/>
                        <label for="Marinara">Marinara</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="Ranchdressing" value = "Ranchdressing"
                        onChange={this.toggleSauceHandler("Ranchdressing")}
                        checked={this.state.toggle==="Ranchdressing"}/>
                        <label for="Ranchdressing">Ranch Dressing</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="bbqsauce" value = "bbqsauce"
                        onChange={this.toggleSauceHandler("bbqsauce")}
                        checked={this.state.toggle==="bbqsauce"}/>
                        <label for="bbqsauce">BBQ sauce</label>
                       </div>
                       <div>
                        <input type="radio" name="sauce" id="hotsauce" value = "hotsauce"
                        onChange={this.toggleSauceHandler("hotsauce")}
                        checked={this.state.toggle==="hotsauce"}/>
                        <label for="hotsauce">Hot sauce</label>
                       </div>
                     </div>
                   </div> 
                   <div>
                      <div className={styles.InputHeading}>
                       <h1 style={{color: 'black'}}>Cheese</h1>
                       <div onClick={this.toggleCheeseIngredientsHandler} className={cheeseNavbarClasses.join(' ')}>
                         <div></div>
                         <div></div>
                       </div>
                      </div>
                       <div style={{
                        "@media(max-width: 500px)":{
                          display: !this.state.showCheeseIngredients ? null: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gridTemplateRows: "1fr 1fr 1fr"
                        }
                      }} className={styles.InputCheese}>
                       <div>
                        <input type="radio" name="cheese" id="mozzarella" value = "mozzarella"
                        onChange={this.toggleCheeseHandler("mozzarella")}
                        checked={this.state.togglecheese==="mozzarella"}/>
                        <label for="mozzarella">Mozzarella</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="extramozzarella" value = "extramozarella"
                        onChange={this.toggleCheeseHandler("extramozarella")}
                        checked={this.state.togglecheese==="extramozarella"}/>
                        <label for="extramozzarella">Extra Mozzarella</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese"  id="somuchmozz" value = "somuchmozz"
                        onChange={this.toggleCheeseHandler("somuchmozz")}
                        checked={this.state.togglecheese==="somuchmozz"}/>
                        <label for="somuchmozz">So Much Mozz</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="parmesan" value = "parmesan"
                        onChange={this.toggleCheeseHandler("parmesan")}
                        checked={this.state.togglecheese==="parmesan"}/>
                        <label for="parmesan">Parmesan</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="cheddarcheese" value = "cheddarcheese"
                        onChange={this.toggleCheeseHandler("cheddarcheese")}
                        checked={this.state.togglecheese==="cheddarcheese"}/>
                        <label for="cheddarcheese">Cheddar Cheese</label>
                       </div>
                       <div>
                        <input type="radio" name="cheese" id="extracheddar" value = "extracheddar"
                        onChange={this.toggleCheeseHandler("extracheddar")}
                        checked={this.state.togglecheese==="extracheddar"}/>
                        <label for="extracheddar">Extra Cheddar</label>
                       </div>
                     </div>
                   </div>
                   <div>
                     <div className={styles.InputHeading}>
                       <h1 style={{color: 'black'}}>Toppings</h1>
                       <div onClick={this.toggleToppingsIngredientsHandler} className={toppingsNavbarClasses.join(' ')}>
                         <div></div>
                         <div></div>
                       </div>
                     </div>
                      <div style={{
                        "@media(max-width: 500px)":{
                          display: !this.state.showToppingsIngredients ? null: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr"
                        }
                      }} className={styles.InputToppings}>
                      <div>
                       <input type="checkbox" name="pepperoni"  id="pepperoni" value = "pepperoni"
                       onChange={this.handleCheckClick}
                       checked={this.state.checked['pepperoni']}
                       />
                       <label for="pepperoni">Pepperoni</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="sausage" id="sausage" value="sausage"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['sausage']}
                      />
                       <label for = "sausage">Sausage</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="pineapple" id="pineapple" value="pineapple"
                       onChange={this.handleCheckClick}
                       checked={this.state.checked['pineapple']}
                       />
                       <label for = "pineapple">Pineapple</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="peppers" id="peppers" value="peppers"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['peppers']}
                       />
                       <label for = "peppers">Peppers</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="onions" id="onions" value="onions"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['onions']}
                       />
                       <label for = "onions">Onions</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="tomatoes" id="tomatoes" value="tomatoes"
                       onChange={this.handleCheckClick}
                       checked={this.state.checked['tomatoes']}
                      />
                       <label for = "tomatoes">Tomatoes</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="spinach" id="spinach" value="spinach"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['spinach']}
                       />
                       <label for = "spinach">Spinach</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="mushrooms" id="mushrooms" value="mushrooms"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['mushrooms']}
                       />
                       <label for = "mushrooms">Mushrooms</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="blackolives" id="blackolives" value="blackolives"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['blackolives']}
                       />
                       <label for = "blackolives">Black Olives</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="ham" id="ham" value="ham"
                        onChange={this.handleCheckClick}
                        checked={this.state.checked['ham']}
                       />
                       <label for = "ham">Ham</label>
                      </div>
                      <div>
                       <input type="checkbox" name ="bacon" id="bacon" value="bacon"
                       onChange={this.handleCheckClick}
                       checked={this.state.checked['bacon']}
                      />
                       <label for = "bacon">Bacon</label>
                      </div> 
                      <div>
                       <input type="checkbox" name ="chicken" id="chicken" value="chicken"
                        onChange={this.handleCheckClick}
                       checked={this.state.checked['chicken']}
                       />
                       <label for = "chicken">Chicken</label>
                      </div>   
                    </div>
                  </div>
                 </div>  
               </div>
               <button onClick={this.sendingRequestHandler}>ORDER NOW</button>
             </div>
          <Footer/>
        </div>
      </Aux>
    )}
}

export default Radium(PizzaBuilder);