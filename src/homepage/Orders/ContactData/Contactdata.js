import React, {useState, useContext} from 'react';
import styles from '../ContactData/Contactdata.module.css';
import axios from '../../../axios-orders';
import {CartContext} from '../../../Context/OrderContext';


const ContactData = (props)=>{
  const {cartItems} = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('')
  const sendIngredientsHandler = (event)=>{
    event.preventDefault();
    const order = {
      orderItem: cartItems,
      name: name,
      address: address
    }
    axios.post('/orders.json', order)
         .then(response=> console.log(response))
         .catch(error=>console.log(error));
    alert('Your Order has been processed, expect deliery in 30 mins')
  }
  const handleNameInputChange=(event) => {
      setName([event.target.name]= event.target.value);
     
  }
  const handleAddressInputChange=(event)=>{
    setAddress([event.target.address] = event.target.value);
  }
    return (
       <div className={styles.ContactModal}>
         <h1>Delivery Details</h1>
          <form onSubmit={sendIngredientsHandler}>
            <div className={styles.Firstinput}>
             <input 
             type="text" 
             placeholder="Name"
             name="name"
             value={name}
             onChange={(event)=> handleNameInputChange(event)}
             />
            </div>
            <div className={styles.Secondinput}>
             <input 
             type="text"
             placeholder="Address"
             name="address"
             value={address}
             onChange={(event)=> handleAddressInputChange(event)}
             />
            </div>
            <button type="submit">Order Now</button>
          </form>
         <div className={styles.Navbar} onClick={props.clicked}>
          <div></div>
          <div></div>
         </div>
       </div>
    )

}

export default ContactData;