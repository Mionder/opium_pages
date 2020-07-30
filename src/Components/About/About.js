import React, { Component } from "react";
import "./About.css";
import gorshok from "./img/gorshok.png";
import man from "./img/man.png";
export default class Profile extends Component{
    render(){ 
        return(
            <div className="about">
            <img className="about-lg" src={gorshok} alt="woman" />
            <div className="container">
                <div className="about-box">
                    <div className="about-photo">
                        <img src={man} alt="Denis Elianovsky" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-text__head">About us </h2>
                        <p>Our remote distributed team is a part of yours. Location independence allows us to hire loyal talent from anywhere on Earth. Free of needless routine, we stay productive and focused on your projects. Less operating costs means a better price for our clients</p>
                        <p>This model has some limitations. We may have less personal meetings, but we carefully plan any interactions and job milestones so everything is done on time. Still, we’re always open to your ideas – communication makes innovation</p>
                        <h5 className="about-text__name">Denis Elianovsky</h5>
                        <span className="about-text__founder">founder of Opium Pro</span>
                    </div>
                </div>
            </div>
            <div className="about-blue__viollet"></div>
            <div className="about-blue__blue"></div>
        </div>
        )
    }
}