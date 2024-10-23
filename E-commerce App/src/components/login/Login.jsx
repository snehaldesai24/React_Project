import React from "react";
import loginActionCreator from "./ActionCreator";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  let dispatch = useDispatch();

  const login =()=>{
    dispatch(loginActionCreator());
  };

  return (
    <div className="contact">
    <div className="my-5 mx-auto text-center shadow p-5"
      style={{ width: "500px" }}>
      <h2>Sign In</h2>
      <div className="my-4">
        <input type="text" placeholder="Enter Email Id" className="form-control" />
      </div>

      <div className="my-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button className="btn btn-primary px-5" onClick={login}>Sign In</button>
      </div>


      <div className="mt-4">
        <Link className="text-primary fw-bold nav-link" to="/signup">
          Create a Account
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Login;