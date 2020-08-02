import React, { Component } from "react";
import "./virtues.css";
import virtue1 from "./img/block1.png";
import virtue2 from "./img/block2.png";

export default class Virtues extends Component{
    render(){
        return( 
            <div className="virtues">
                <div className="virtues-blue-blur"></div>
                <div className="virtues-viollet-blur"></div>
                <div className="container">
                    <div className="virtues-wrapper">
                        <a href="#" className="virtues-block">
                            <img className="virtues-block_img" src={virtue1} alt="UX/UI Design" />
                            <h3 className="virtues-block_title">UX/UI Design</h3>
                            <p className="virtues-block_subtitle">8 years experience with big brojects</p>
                        </a>
                        <a href="#" className="virtues-block">
                            <img className="virtues-block_img" src={virtue2} alt="Usability Testing" />
                            <h3 className="virtues-block_title">Usability Testing</h3>
                            <p className="virtues-block_subtitle">Help you find the weakest parts in your UX at early stage</p>
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
}