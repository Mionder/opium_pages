import React, { Component } from "react";
import "./discuss.css";
import phoneImg from "./img/phone.png";
export default class Discuss extends Component{
    render(){ 
        return(
            <div className="discuss">
                <div className="container">
                    <div className="discuss-wrap">
                        <div className="discuss-left">
                                <h3 className="discuss-left_title">Let’s discuss your ptoject!</h3>
                                <p className="discuss-left_subtitle">Leave your email and we’ll contact you to assign a call</p>
                                <a className="discuss-left_link" href="#">Schedule a call</a>
                        </div>
                        <div className="discuss-right">
                            <img src={phoneImg} alt="phone" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}