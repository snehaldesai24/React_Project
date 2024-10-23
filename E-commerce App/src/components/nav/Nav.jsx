import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Actioncreator from "./Actioncreator";

function Nav() {
  const dispatch = useDispatch()
  //call useNavigate hook its return on function
  const navigate = useNavigate()

  const logout = () => {
    navigate("/")
    dispatch(Actioncreator());
  };

  return (

    <div class="nav">
      <div class="leftPanel flexContainer">
        <h1>Q-SHOP</h1>
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/306318469/original/aaed9f6c184a512084ffed4c8c706d504837a235/make-minimalist-custom-line-store-online-shop-e-commerce-logo-design.png"
          width={80}
          height={50}
        />
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/contact">Contact</Link>


      </div>
      <div className="thirdpanel">
        <Link to="/profile">
          <i class="bi icon bi-person-circle text-white"></i>
        </Link>
        <Link to="/cart"><i class="bi icon bi-cart4"></i></Link>

        <button className="btn btn-outline-info me-5" onClick={logout}>Logout</button>

      </div>
    </div>
  );
}

export default Nav;