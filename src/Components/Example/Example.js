import React, { Component } from "react";
import "./Example.css";
export default class Example extends Component{
    render(){
        return(
            <div className="example">
                <div className="container">
                    <h3 className="example-testing">Example of testing report</h3>
                    <div className="example-wrapper">
                        <div className="h_iframe">
                            <img className="ratio" src="http://placehold.it/16x9"/>
                            <iframe src="https://www.youtube.com/embed/qAGPmxFOloI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="example-blur"></div>
            </div>
        )
    }
}