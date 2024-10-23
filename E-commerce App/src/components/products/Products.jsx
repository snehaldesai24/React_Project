import React from "react";
import { useEffect } from "react";
import { getAllProducts, getDataCategoryWise } from "../service/ProductService";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();

  const productsData = useSelector((store) => {
    return store.ProductsReducer.data;
  });

  useEffect(() => {
    if (productsData.length === 0) {
      getAllProducts(dispatch);
    }
  }, []);
  return (
    <div>
      {productsData.length > 0 ? (
        <div>
          <div className="container pmain">
            <div className="options">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="products"
                  defaultChecked
                  onChange={() => {
                    getAllProducts(dispatch);
                  }}
                />
                <label>All</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "electronics");
                  }}
                />
                <label> Electronics</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "jewelery");
                  }}
                />
                <label> Jewelery</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "men's clothing");
                  }}
                />
                <label>MensWear</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "women's clothing");
                  }}
                />
                <label>WomensWear</label>
              </div>
            </div>

            <div className="products">
              {
                productsData.map((product) => {
                  return (
                    <Product
                      product= {product}
                      // key={product.id}
                      // title={product.title}
                      // image={product.image}
                      // id={product.id}
                      // price={product.price}
                      // description={product.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>

      ) : (
        <div className="mt-5">
          <h2 className="mt-5 text-danger text-center fw-bold">Something Went Wrong, Will Get Back Soon!!!</h2>
        </div>
      )
      }

    </div>



  );
}

export default Products;