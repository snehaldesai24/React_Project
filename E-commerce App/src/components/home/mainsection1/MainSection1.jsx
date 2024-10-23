import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainSection1(){
    return(
        <div className="container">
            <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showArrows={true}
      >
            <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8d7c5a9f8990a71b.jpg?q=20"
                />
            </div>

            <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7409480987a9a093.jpg?q=20"
                />
           </div>

           <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec7cbdeb805025da.jpg?q=20"
                />
           </div>
           <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6167b56dad6d1330.jpg?q=20"
                />
            </div>

              <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20"
                />
               </div>
               <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8b4e46e572ce96b2.jpg?q=20"
                />
              </div>
               <div>
                <img
                width="100%"
                height="100%" 
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bdd0654e876b74e8.jpeg?q=20"
                />
               </div>
           </Carousel>
        </div>

    );
}

export default MainSection1;