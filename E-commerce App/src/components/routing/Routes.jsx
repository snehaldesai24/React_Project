import Home from "../home/Home";
import Logout from "../logout/Logout";
import PageNotFound from "../pagenotfound/PageNotFound";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import ProductDetails from "../products/ProductDetails";
import About from "../about/About";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import CreditCardPayment from "../cart/payment/CreditCardPayment";


export var routes = [
    { path: "/", component: <Home /> },
    { path: "/products", component: <Products /> },
    { path: "/productdetails/:id", component: <ProductDetails /> },
    { path: "/aboutus", component: <About /> },
    { path: "/contact", component: <Contact /> },
    { path: "/cart", component: <Cart /> },
    { path: "/profile", component: <Profile /> },
    { path: "/logout", component: <Logout /> },
    { path: "/checkout", component: <CreditCardPayment /> },
    { path: "*", component: <PageNotFound /> },
  ];