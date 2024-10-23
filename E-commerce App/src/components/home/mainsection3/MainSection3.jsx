import React from "react";
import "./MainSection3.css";


function MainSection3(props){
    return(
        <div className="section3">
            <div>
                <img src={props.image} alt="product" />
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>BenQ GW2490 24 inch Full HD LED Backlit IPS Panel 99% sRGB, Eye-careU, Dual HDMI, Display Port, Bezel-Less, Eyesafe, VESA MediaSync, Brightness Intelligence, Low Blue Light, Speakers 2Wx2, VESA Wall mountable Monitor (GW2490)  (Response Time: 5 ms, 100 Hz Refresh Rate)</p>
                <button>Product Details</button>
            </div>

        </div>
    )
}

export default MainSection3;