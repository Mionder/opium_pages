import React, { Component } from "react";
import "./Team.css";
import advantages1 from "./img/1.svg";
import advantages2 from "./img/2.svg";
import advantages3 from "./img/3.svg";
export default class Team extends Component{
    render(){ 
        return(
            <div className="team">
        <div className="team-blur__blue"></div>
        <div className="team-blur-viollet"></div>
        <h1 className="team-header">Your global outsourced team</h1>
        <div className="experience-advantages team-experience-advantages">
            <div className="experience-advantages__item">
                <img className="experience-advantages__img" src={advantages1} alt="advantages 1" />
                <p className="experience-advantages__description">12 years in IT</p>
            </div>
            <div className="experience-advantages__item">
                <img className="experience-advantages__img" src={advantages2} alt="advantages 2" />
                <p className="experience-advantages__description">Experience with top Russian companies</p>
            </div>
            <div className="experience-advantages__item">
                <img className="experience-advantages__img" src={advantages3} alt="advantages 3" />
                <p className="experience-advantages__description">Profeccionals only </p>
            </div>
        </div>
    </div>
        )
    }
}