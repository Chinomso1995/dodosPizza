import React from 'react';
import Logo from '../../assets/logo.png';
import Pizza from '../../assets/pepperoni.jpg';
import Sides from '../../assets/sides/sausagerollone.jpeg';
import Desserts from '../../assets/desserts/vanillaicecream.jpeg';
import Drinks from '../../assets/drinks/fantaone.jpg';
import Styles from '../Orders/Orders.module.css';
import Footer from '../../homepage/Footer/Footer'
const orders = (props)=>{
  return(
    <div>
       <div className={Styles.OrderHeader}>
         <div>
          <img src={Logo} alt="logo"/>
          <h1>DODO PIZZA</h1>
         </div> 
        </div>  
        <h1 className={Styles.OrderContentContainerHeader}>My order</h1>
       <div className={Styles.OrderContentContainer}>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={Pizza} alt="pizza"/>
               </div>
               <div>
                 <h1>Pepperoni Fresh</h1>
                 <p>Pepperoni, mozzarella, green peppers, pizza sauce</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦2,700</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={Sides} alt="sides"/>
               </div>
               <div>
                  <h1>Sausage Roll</h1>
                  <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>1 pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦2,700</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={Desserts} alt="desserts"/>
               </div>
               <div>
                  <h1>Ice Cream Straciatella</h1>
                  <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>1 pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦2,700</span></div>
            </div>
          </div>
          <div className={Styles.OrderContent}>
            <div>
               <div style={{paddingRight: '80px'}}>
                 <img src={Drinks} alt="drinks"/>
               </div>
               <div>
                 <h1>Fanta</h1>
                 <p style={{textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap'}}>
                              1 pcs</p>
               </div>
            </div>
            <div className={Styles.OrderContentPrice}>
               <div><span>1</span></div>
               <div><span>₦2,700</span></div>
            </div>
          </div>
       </div> 
       <div className={Styles.OrderPlacement}>
         <h1>Dipping Sauces</h1>
         <h1>Total: ₦4500</h1>
         <div className={Styles.ButtonContainer}>
          <button>Back to menu</button>
          <button>Next</button>
         </div> 
       </div>
       <Footer/>
    </div>
  )
}
export default orders;