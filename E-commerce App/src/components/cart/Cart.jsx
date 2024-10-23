import { useSelector, useDispatch } from "react-redux";
import TotalAmount from "./totalamount/TotalAmount";

function Cart() {

  const dispatch = useDispatch();

  const cartdata = useSelector((store) => {
    return store.ProductsReducer.cart;
  })

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE-CART",
      payload: id
    });
  };

  const incCartCount = (product, index) => {
    product.count = product.count + 1;
    dispatch({
      type: "COUNT",
      payload: product,
      index: index,
    });
  };

  const decCartCount = (product, index) => {
    if (product.count > 1) {
      product.count = product.count - 1;
      dispatch({
        type: "COUNT",
        payload: product,
        index: index,
      });
    }
  };

  return (
    <div className="p-5 mt-2">
      {
        cartdata.length > 0 ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 shadow">
              {
              cartdata.map((cartproduct, index) => {
                return (
                  <div className="my-3 text-center"
                    key={cartproduct.id} style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                      <img src={cartproduct.image} width={70} height={70} />
                    </div>
                    <div>
                      <h4 className="h5">{(cartproduct.title).slice(0, 15)}</h4>
                    </div>
                    <div>
                      <p>${cartproduct.price}</p>
                    </div>
                    <div>
                      <button className="btn btn-success px-2 mx-2" onClick={() => { incCartCount(cartproduct, index); }}>+</button>
                      <span>{cartproduct.count}</span>
                      <button className="btn btn-danger px-2 mx-2" onClick={() => { decCartCount(cartproduct, index); }}>-</button>
                    </div>

                    <i class="bi bi-trash3-fill text-danger fs-2" onClick={() => {
                      removeCart(cartproduct.id)
                    }}></i>

                    {/* <button className="btn btn-danger btn-sm px-2 py-2" onClick={() => {
                    removeCart(cartproduct.id)
                  }}>Remove
              </button>  */}
                  </div>
                )
              })
            }

              </div>
              <div className="col-4">
                <TotalAmount/>
              </div>
            </div>

           
          </div>
        ) : (<div className="mt-5 display-3 text-center fw-bold text-warning">
            {" "}
            No Products Added in the Cart{" "}
          </div>
        )
      }

    </div>
  )
}

export default Cart;