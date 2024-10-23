import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <form>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type='text' className='field' placeholder='Enter Your Name' required />
        </div>

        <div className="input-box">
          <label>Email</label>
          <input type='text' className='field' placeholder='Enter Your Email' required />
        </div>

        <div className="input-box">
          <label>Address</label>
          <input type='text' className='field' placeholder='Enter Your Address' required />
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea name='' id='' className='field mess' placeholder='Enter Your Message' required ></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}
export default Contact;

// import React, { useState } from 'react';
// import './Contact.css';

// function Contact() {
//   return (
//     <section className="contact">
//       <div className="container">
//         <div className="image-column">
//           <img src="https://images.indianexpress.com/2017/05/google-maps-759.jpg?w=414" alt="background image" />
//         </div>
//         <div className="form-column">
//           <form>
//             <h2>Contact Form</h2>
//             <div className="input-box">
//               <label>Full Name</label>
//               <input type='text' className='field' placeholder='Enter Your Name' required />
//             </div>

//             <div className="input-box">
//               <label>Email</label>
//               <input type='text' className='field' placeholder='Enter Your Email' required />
//             </div>

//             <div className="input-box">
//               <label>Address</label>
//               <input type='text' className='field' placeholder='Enter Your Address' required />
//             </div>

//             <div className="input-box">
//               <label>Your Message</label>
//               <textarea name='' id='' className='field mess' placeholder='Enter Your Message' required ></textarea>
//             </div>
//             <button type='submit'>Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;