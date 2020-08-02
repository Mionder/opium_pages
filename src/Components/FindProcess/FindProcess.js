
import React, { Component } from "react";
import "./FindProcess.css";
import download from "./img/process-download.svg";
import advantages from "./img/advantages3.svg";
import heart from "./img/lqal.svg";

export default class FindProcess extends Component{
    render(){
        return(
            <div className="process">
            <div className="viollet-blur"></div>
            <div className="blue-blur"></div>
              <div className="find-orange-blur"></div>
            <div className="container">
                <div className="process-wrap">
                    <h4 className="process-part"> How we work </h4>
                    <div className="process-block">
                    <div className="process-block__item">
                        <span className="process-block__number"> 01</span>
                        <h5 className="process-block__name">Praparations</h5>
                        <p className="process-block__description">To get started we need business requirements, access to a clickable version of your app (if applicable), and ability to contact a responsible person</p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 02</span>
                        <h5 className="process-block__name">Testing</h5>
                        <p className="process-block__description"> We gather a testing group to perform a wide range of real-life actions. All necessary data is collected while the process is recorded on video</p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 03</span>
                        <h5 className="process-block__name">Data interpretetion</h5>
                        <p className="process-block__description">You get a comprehensive report that shows your product’s strong and weak points as well as possible causes of underperformance</p>
                    </div>
                    </div>
                </div>
                <div className="process-bottom">
                    <div className="process-bottom__left">
                        <h3 className="process-bottom__deliverables"> Deliverables </h3>
                        <a className="process-bottom__download process-bottom__download_des" href="#"><img className="process-bottom__download-img" src={download} alt="download icon" /> download</a>
                    </div>
                    <div className="process-bottom__right">
                        <p className="process-bottom__des">PDF description of all objects in the app as well as their data attributes, UI blueprints, customer journey scripts </p>
                        <div className="process-bottom__items">
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages} alt="" />
                                <p className="process-bottom__item_des">Test Report</p>
                            </div>
                        </div>
                        <a className="process-bottom__download process-bottom__download_mob" href="#"><img className="process-bottom__download-img" src={download} alt="download icon" /> download</a>
                    </div>
                </div>
            </div>
            <img className="process-heart find-process-heart" src={heart} alt="heart" />
        </div>
        )
    }
}