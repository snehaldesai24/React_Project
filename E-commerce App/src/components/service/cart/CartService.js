import CartActionCreator from "../../cart/action/CartActionCreator";

var CartService = (productdata, dispatch)=>{
    dispatch(CartActionCreator(productdata));

};

export default CartService;