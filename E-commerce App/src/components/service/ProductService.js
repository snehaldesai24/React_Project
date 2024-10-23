import axios from "axios";
import ProductActionCreator from "../products/action/ProductActionCreator";

export const getAllProducts =(dispatch)=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        
        dispatch(ProductActionCreator(res.data));    
    })
    .catch((error)=>{
        console.log(error);
    });

};
export const getDataCategoryWise = (dispatch, categoryname) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => {
        dispatch(ProductActionCreator(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };