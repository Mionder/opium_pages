import React, { Component } from "react";
import "./Experience.css";
import advantages1 from "./img/advantages1.svg";
import advantages2 from "./img/86.svg";
import advantages3 from "./img/advantages3.svg";
export default class Experience extends Component{
    render(){ 
        return(
            <div className="experience">
            <div className="viollet-blur"></div>
            <h1>8 years in UX / UI with Big Projects</h1>
            <div className="experience-advantages">
                <div className="experience-advantages__item">
                    <img className="experience-advantages__img" src={advantages1} alt="advantages 1" />
                    <p className="experience-advantages__description">We do projects as a part of your IT-company</p>
                </div>
                <div className="experience-advantages__item">
                    <img className="experience-advantages__img" src={advantages2} alt="advantages 2" />
                    <p className="experience-advantages__description">We know what clients need and can liaise</p>
                </div>
                <div className="experience-advantages__item">
                    <img className="experience-advantages__img" src={advantages3} alt="advantages 3" />
                    <p className="experience-advantages__description">Product managers as your design-department</p>
                </div>
            </div>
            <div className="experience-btn">
                <a className="experience-btn__call" href="#">Schedule a call</a>
                <span className="experience-btn__addition">Or scroll further, no pressure</span>
            </div>
        </div>
        )
    }
}