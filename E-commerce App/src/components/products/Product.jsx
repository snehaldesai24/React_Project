import React from "react";
import { useNavigate } from "react-router-dom";
import CartService from "../service/cart/CartService";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {

  const {id, image, title, price, description}= product;

  const cartData = useSelector((store)=>{
    return store.ProductsReducer.cart;
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const addtoCart = ()=>{
    CartService(product, dispatch);
  }

  const removeCart = (id)=>{
    dispatch({
      type:"REMOVE-CART",
      payload:id
    });
  }

  return (
    <div className="card" key={id}>
      <div className="card-header">
        <img src={image} width={170} height={170} />
      </div>
      <div className="card-body">
        <h5 className="h5">{title}</h5>
        <p>${price}</p>
        <p className="movie_description">
        {description.slice(0, 20) + "......"}
          {/* {description} */}
        </p>
        <button className="btn btn-dark mx-2" onClick={()=>{navigateToProductDetails(id)}}>Product Details</button>
        
        {
          cartData.length === 0 ? <button className="btn btn-info mx-2" onClick={addtoCart}>Add To Cart</button> 
          : (cartData.filter((cartproduct)=>cartproduct.id == id)).length > 0 ? <button className="btn btn-danger mx-2" onClick={()=>{removeCart(id)}}>Remove Cart</button> 
          : <button className="btn btn-info mx-2" onClick={addtoCart}>Add To Cart</button>

        }

      </div>
    </div>
  );
}

export default Product;