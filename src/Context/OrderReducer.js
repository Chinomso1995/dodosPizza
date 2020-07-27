const Storage = (orderItems) => {
  localStorage.setItem('order', JSON.stringify(orderItems.length > 0 ? orderItems: []));
}

export const sumItems = orderItems => {
  Storage(orderItems);
  let itemCount = orderItems.reduce((total, product) => total + product.quantity, 0);
  let total = orderItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return { itemCount, total }
}

export const CartReducer = (state, action) => {
  switch (action.type) {
      case "ADD_ITEM":
          if (!state.orderItems.find(item => item.id === action.payload.id)) {
              state.orderItems.push({
                  ...action.payload,
                  quantity: 1
              })
          } 

          return {
              ...state,
              ...sumItems(state.orderItems),
              orderItems: [...state.orderItems]
          }
      case "REMOVE_ITEM":
          return {
              ...state,
              ...sumItems(state.orderItems.filter(item => item.id !== action.payload.id)),
              orderItems: [...state.orderItems.filter(item => item.id !== action.payload.id)]
          }
      case "INCREASE":
          state.orderItems[state.orderItems.findIndex(item => item.id === action.payload.id)].quantity++
          return {
              ...state,
              ...sumItems(state.orderItems),
              orderItems: [...state.orderItems]
          }
      case "DECREASE":
          state.orderItems[state.orderItems.findIndex(item => item.id === action.payload.id)].quantity--
          return {
              ...state,
              ...sumItems(state.orderItems),
              orderItems: [...state.orderItems]
          }
      case "CHECKOUT":
          return {
              orderItems: [],
              checkout: true,
              ...sumItems([]),
          }
      case "CLEAR":
              return {
                  orderItems: [],
                  ...sumItems([]),
              }
      default:
          return state

  }
}