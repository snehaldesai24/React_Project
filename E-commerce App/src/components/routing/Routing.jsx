import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import { useSelector } from "react-redux";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import Home from "../home/Home";

function Routing(){

    const isLoggedIn = useSelector((store)=>{
        return store.LoginReducer.isLoggedIn;
    })
    
    return(
        <Routes>
           {routes.map((ele, index) => {
        return (
          <Route
            key={index + 100}
            path={ele.path}
            element={isLoggedIn ? ele.component : <Login />}
          />
        );
      })} 

      <Route path={"/signup"} element={isLoggedIn ? <Home/> : <SignUp />}  />
    </Routes>
    )
}

export default Routing;