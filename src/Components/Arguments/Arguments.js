import React, { Component } from "react";
import "./Arguments.css";
import argument1 from "./img/1.svg";
import argument2 from "./img/2.svg";
import argument3 from "./img/3.svg";
import argument4 from "./img/4.svg";
import argument5 from "./img/5.svg";
import argument6 from "./img/6.svg";
import nargument1 from "./img/1-2.svg";
import nargument2 from "./img/2-2.svg";
import nargument3 from "./img/3-2.svg";
export default class Arguments extends Component{
    render(){
        return(
            <div className="arguments">
                <div className="container">
                    <div className="arguments-box">
                        <div className="arguments-need">
                            <h4>You need it when </h4>
                            <ul className="arguments-need__list">
                                <li><img className="arguments-need__image" src={argument1} alt="1" /> You begin to develop an app, intranet or a website</li>
                                <li><img className="arguments-need__image"  src={argument2} alt="2" />Your app, intranet or website is almost ready to launch</li>
                                <li><img className="arguments-need__image"  src={argument3} alt="3" />Your digital product is being redesigned</li>
                                <li><img className="arguments-need__image"  src={argument4} alt="4" />You are not satisfied with the performance</li>
                                <li><img className="arguments-need__image"  src={argument5} alt="5" />You are not aware of conversion funnel leaks </li>
                                <li><img className="arguments-need__image"  src={argument6} alt="6" />Your product has functions which are rarely to never used</li>
                            </ul>
                        </div>
                        <div className="arguments-dont">
                            <h4>You don’t need it when</h4>
                            <ul>
                                <li><img src={nargument1} alt="1" /> You’ve just completed a thorough UX testing</li>
                                <li> <img src={nargument2} alt="2" />You are working on a new product with us </li>
                                <li><img src={nargument3} alt="3" />You have no idea what UX testing is</li>
                            </ul>
                            <a href="#">then find out now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}