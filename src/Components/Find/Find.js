import React, { Component } from "react";
import "./Find.css";
import fiveOne from "./img/5-1.svg";
import fiveTwo from "./img/5-2.svg";
import fiveTree from "./img/5-3.svg";
export default class Find extends Component{
    render(){
        return(
            <div className="find">
                <div className="find-blur__blue"></div>
                <div className="find-blur-viollet"></div>
                <h1 className="find-header">Find the weakest parts in your UX at early stage</h1>
                <div className="experience-advantages team-experience-advantages find-experience-advantages">
                    <div className="experience-advantages__item">
                        <img className="experience-advantages__img" src={fiveOne} alt="advantages 1" />
                        <p className="experience-advantages__description">common scripts</p>
                    </div>
                    <div className="experience-advantages__item">
                        <img className="experience-advantages__img" src={fiveTwo} alt="advantages 2" />
                        <p className="experience-advantages__description">test iterations</p>
                    </div>
                    <div className="experience-advantages__item">
                        <img className="experience-advantages__img" src={fiveTree} alt="advantages 3" />
                        <p className="experience-advantages__description">Prespondents for each iteration</p>
                    </div>
                </div>
                <div className="experience-btn find-experience-btn">
                    <a className="experience-btn__call" href="#">Schedule a call</a>
                    <span className="experience-btn__addition">Or scroll further, no pressure</span>
                </div>
            </div>
        )
    }
}