import React, { createContext, useState } from 'react';
import {Pizza} from '../homepage/Pizza/Pizzas/PizzaProducts/PizzaProducts'
import {Sides} from '../homepage/Sides/SidesProducts/SidesProducts'
import {Desserts} from '../homepage/Desserts/DessertsProducts/DessertsProducts';
import {Drinks} from '../homepage/Drinks/Drinksproducts/DrinksProducts'
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    const [pizzaproducts] = useState(Pizza)
    const [sideproducts] = useState(Sides);
    const [dessertproducts] = useState(Desserts)
    const [drinkproducts] = useState(Drinks)
    return ( 
        <ProductsContext.Provider value={{sideproducts, dessertproducts, drinkproducts, pizzaproducts}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;
