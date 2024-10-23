import React from "react";
import Header from "./header/Header";
import MainSection1 from "./mainsection1/MainSection1";
import MainSection2 from "./mainsection2/MainSection2";
import MainSection3 from "./mainsection3/MainSection3";
import Footer from "./footer/Footer";

function Home(){
    return(
        <div>
            <Header/>
            <MainSection1/>
            <MainSection2/>
            <MainSection3
            image="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/i/x/5/gw2490-full-hd-24-2024-gw2490-benq-original-imagy6vfbvxjjhpu.jpeg?q=70"
            width="500"
            title="BenQ"
            />
            <MainSection3
            image="https://rukminim2.flixcart.com/image/300/300/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=90"
            title="SAMSUNG Galaxy Z Flip3 5G"
            />
            <Footer/>
        </div>
    
    )
}

export default Home;