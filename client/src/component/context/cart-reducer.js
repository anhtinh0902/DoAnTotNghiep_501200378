

const storeCartItem = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : [] ;
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumItems = cartItems => {
    return {
      itemCount: cartItems.reduce((total, prod) => total + prod.quantity , 0),
      total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
  }


const carReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
            case 'INCREASE':
                const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                console.log(increaseIndex);
                console.log(state.cartItems[increaseIndex].quantity);
                state.cartItems[increaseIndex].quantity++
                return {
                    ...state,
                    cartItems: [...state.cartItems],
                    ...sumItems(state.cartItems),
                }
        case 'DECREASE' :
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            const prod = state.cartItems[decreaseIndex];
            if (prod.quantity > 1) {
                prod.quantity--;
            }

            return {
                ...state,
        
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems),
            }
        case 'REMOVE_ITEM' : 
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCartItems],
                ...sumItems(newCartItems),
            }
        case 'CLEAR' :
            localStorage.removeItem('cart');
            return {
                cartItems: [],
                itemCount: 0,
                total: 0
            }
        default:
            return state;
    }
}

export default carReducer;