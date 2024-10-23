import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartService from "../service/cart/CartService";
import "./ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const cartData = useSelector((store) => {
        return store.ProductsReducer.cart;
    });

    const productdetail = useSelector((store) => {
        return store.ProductsReducer.data.filter((product) => product.id == id);
    });


    const addtoCart = () => {
        CartService(productdetail[0], dispatch);
    }

    const removeCart = (id) => {
        dispatch({
            type: "REMOVE-CART",
            payload: id
        });
    }

    return (
        <div className="productdetails">
            <div className="productImagePanel">
                <img src={productdetail[0].image} width={"100%"} height={400} alt="product" />
            </div>
            <div className="productContentPanel">
                <dl>
                    <dt><b>Product Name</b></dt>
                    <dd>{productdetail[0].title}</dd>

                    <dt><b>Price</b></dt>
                    <dd>{productdetail[0].price}</dd>

                    <dt><b>Description</b></dt>
                    <dd>{productdetail[0].description}</dd>

                    <dt><b>Category</b></dt>
                    <dd>{productdetail[0].category}</dd>

                    <dt><b>Rating</b></dt>
                    <dd>{productdetail[0].rating.rate}</dd>
                </dl>
                {
                    cartData.length === 0 ? <button className="btn btn-info mx-2" onClick={addtoCart}>Add To Cart</button>
                        : (cartData.filter((cartproduct) => cartproduct.id == id)).length > 0 ? <button className="btn btn-danger mx-2" onClick={() => { removeCart(id) }}>Remove Cart</button>
                            : <button className="btn btn-info mx-2" onClick={addtoCart}>Add To Cart</button>

                }


                <Link to="/products">
                    {" "}
                    <button className="btn btn-dark mx-4">Bact To Products</button>
                </Link>
            </div>

        </div>
    )
}

export default ProductDetails;