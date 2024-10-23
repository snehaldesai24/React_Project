import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="footer">
             <p>&copy; 2024 Q-Shope</p>
             <ul className="social-links">
        <li>
          <a href="https://twitter.com/mycompany">
            <i className="twitter-icon"></i>
            Twitter
          </a>
        </li>
        <li>
          <a href="https://facebook.com/mycompany">
            <i className="facebook-icon"></i>
            Facebook
          </a>
        </li>
        <li>
          <a href="https://instagram.com/mycompany">
            <i className="instagram-icon"></i>
            Instagram
          </a>
        </li>
      </ul>

        </div>
    )
}

export default Footer;