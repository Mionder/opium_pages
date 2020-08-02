import React, { Component } from "react";
import "./Example.css";
export default class Example extends Component{
    render(){
        return(
            <div class="example">
                <div class="container">
                    <h3 class="example-testing">Example of testing report</h3>
                    <div class="example-wrapper">
                        <div class="h_iframe">
                            <img class="ratio" src="http://placehold.it/16x9"/>
                            <iframe src="https://www.youtube.com/embed/qAGPmxFOloI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="example-blur"></div>
            </div>
        )
    }
}