 const CartActionCreator = (cartproducts)=>{
    return{
        type: "CART",
        payload: cartproducts,
    };

};
export default CartActionCreator;

// export const CartActionCreator1 = (cartproducts)=>{
//     return{
//         type: "REMOVE",
//         payload: cartproducts,
//     };

// };

