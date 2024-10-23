const ProductInitialData ={
    data:[],
    cart: [],
};

const ProductsReducer =(state = ProductInitialData, action)=>{
    if(action.type === "PRODUCTS"){
        state = {
            ...state,
            data: action.payload,
        };
    }
    else if(action.type === "CART"){
        //increment dec cart quntity
        action.payload.count = 1;
        state ={
            ...state,
            cart: [...state.cart, action.payload],
        };

    }
    else if (action.type === "REMOVE-CART") {
    state = {
      ...state,
      cart: state.cart.filter((product) => product.id != action.payload),
    };
  }

  else if (action.type === "COUNT") {
    
     state.cart.splice(action.index,1,action.payload)
     state={
        ...state,
        cart:[...state.cart],
     }
  }
    return state;
};

export default ProductsReducer;