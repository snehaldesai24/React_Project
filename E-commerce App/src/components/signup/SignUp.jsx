import React from "react"
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <div className="contact">
    <div className="my-5 mx-auto text-center shadow p-5"
      style={{ width: "500px" }}>
      <h2>SignUp</h2>
      <div className="my-4">
        <input
          type="name"
          className="form-control"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div className="my-4">
        <input type="text" placeholder="Enter Email Id" className="form-control" required />
      </div>

      <div className="my-4">
        <input
          type="address"
          className="form-control"
          placeholder="Enter Address"
          required
        />
      </div>

      <div className="my-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          required
        />
      </div>

      <div className="my-4">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          required
        />
      </div>
      <div>
        <button className="btn btn-primary px-5">SignUp</button>
      </div>

      <div className="mt-4">
        <Link className="text-primary fw-bold nav-link" to="/signin">
          Already have a Account?
        </Link>
      </div>
</div>
</div>
);
}

export default SignUp;
        

/*
    //     <section className="contact">
    //   <form>
    //     <h2>SignUp Form</h2>
    //     <div className="input-box">
    //       <label>Full Name</label>
    //       <input type='text' className='field' placeholder='Enter Your Name' required />
    //     </div>

    //     <div className="input-box">
    //       <label>Email</label>
    //       <input type='text' className='field' placeholder='Enter Your Email' required />
    //     </div>

    //     <div className="input-box">
    //       <label>Address</label>
    //       <input type='text' className='field' placeholder='Enter Your Address' required />
    //     </div>

    //     <div className="input-box">
    //       <label>Password</label>
    //       <input type='text' className='field' placeholder='Enter Your Password' required />
    //     </div>

    //     <div className="input-box">
    //     <label>Conform Password</label>
    //     <input type='text' className='field' placeholder='Enter Your Password' required />
    //     </div>
         
    //     <button type='submit'>SignUp</button>
    //   </form>
    // </section>

   */ 
 