import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Brain from "./img/brain.png";
import "./error.css";
export default class Error404 extends Component{
    render(){
        return(
            <div className="error404">
                <div className="error404-blue-blur"></div>
                <div className="error404-viollet-blur"></div>
                <Header />
                <div className="container">
                    <div className="error404_wrapper">
                        <div className="error404_block">
                            <h2 className="error_label">404</h2>
                            <img src={Brain} class="brain_img" alt="Brain"/>
                        </div>
                        <p className="error_subtitle">Sorry, this page is not found</p>
                        <a href="#" className="error_button">Return to homepage</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}