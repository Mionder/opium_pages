import React, { Component } from "react";
import "./Process.css";
import processdownload from "./img/process-download.svg";
import advantages1  from "./img/advantages1.svg";
import advantages2  from "./img/advantages2.svg";
import advantages3  from "./img/advantages3.svg";
import more  from "./img/more1.svg";
import fon  from "./img/lqal.svg";
export default class Process extends Component{
    render(){ 
        return(
            <div className="process">
            <div className="viollet-blur"></div>
            <div className="blue-blur"></div>
              <div className="orange-blur"></div>
            <div className="container">
                <h3 className="process-header">How we work</h3>
                <div className="process-wrap">
                    <h4 className="process-part"> 01. Analitics </h4>
                    <div className="process-block">
                    <div className="process-block__item">
                        <span className="process-block__number"> 01</span>
                        <h5 className="process-block__name">Data Consolidation</h5>
                        <p className="process-block__description">To learn everything about the product we explore the current version of your app and talk to your experts. Great results stem from an open dialogue between our teams </p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 02</span>
                        <h5 className="process-block__name">Wireframing</h5>
                        <p className="process-block__description">All gatherings transform into sketches of the future graphic interface. You get a clear overview of the concept </p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 03</span>
                        <h5 className="process-block__name">User Story Mapping</h5>
                        <p className="process-block__description">Researching key user groups and their pain points. Discovering how our app will get them corrected</p>
                    </div>
                    </div>
                </div>
                <div className="process-bottom">
                    <div className="process-bottom__left">
                        <h3 className="process-bottom__deliverables"> Deliverables </h3>
                        <a className="process-bottom__download process-bottom__download_des" href="#"><img className="process-bottom__download-img" src={processdownload} alt="download icon" /> download</a>
                    </div>
                    <div className="process-bottom__right">
                        <p className="process-bottom__des">PDF description of all objects in the app as well as their data attributes, UI blueprints, customer journey scripts </p>
                        <div className="process-bottom__items">
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages3} alt="advantages" />
                                <p className="process-bottom__item_des">BRD</p>
                            </div>
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages1} alt="advantages" />
                                <p className="process-bottom__item_des">Wireframe</p>
                            </div>
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages2} alt="advantages" />
                                <p className="process-bottom__item_des">USM</p>
                            </div>
                        </div>
                        <a className="process-bottom__download process-bottom__download_mob" href="#"><img className="process-bottom__download-img" src={processdownload} alt="download icon" /> download</a>
                    </div>
                </div>
                <div className="process-wrap process-wrap-sec">
                    <h4 className="process-part"> 02. Design </h4>
                    <div className="process-block">
                    <div className="process-block__item">
                        <span className="process-block__number"> 01</span>
                        <h5 className="process-block__name">Prototyping</h5>
                        <p className="process-block__description"> We bring mockups to life using Figma design and prototyping capabilities. Feel free to delve into brand new UI, inspect its features, and leave your questions</p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 02</span>
                        <h5 className="process-block__name">Early Usability Testing </h5>
                        <p className="process-block__description">A specially formed testing group performs a range of tasks in the app, evaluating time to complete them. Any problems found are analyzed right away. The testing process is recorded for your convenience </p>
                        <a className="process-block__more" href="#"><img src={more} alt="Learn more" /> Learn more</a>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 03</span>
                        <h5 className="process-block__name">Documentation</h5>
                        <p className="process-block__description">Describing every element of the design. From UI-components in each possible state to the logic of a color scheme. Videos for complicated animations included </p>
                    </div>
                    </div>
                </div>
                <div className="process-bottom process-bottom-sec">
                    <div className="process-bottom__left">
                        <h3 className="process-bottom__deliverables"> Deliverables </h3>
                        <a className="process-bottom__download process-bottom__download_des" href="#"><img className="process-bottom__download-img" src={processdownload} alt="download icon" /> download</a>
                    </div>
                    <div className="process-bottom__right">
                        <p className="process-bottom__des">Figma project and UI-kit, testing videos, complicated animation videos, PDF test report with comments</p>
                        <div className="process-bottom__items">
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages3} alt="Prototype" />
                                <p className="process-bottom__item_des">Prototype</p>
                            </div>
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages1} alt="Test Repor" />
                                <p className="process-bottom__item_des">Test Report</p>
                            </div>
                            <div className="process-bottom__item">
                                <img className="process-bottom__item_img" src={advantages2} alt="UI-kit" />
                                <p className="process-bottom__item_des">UI-kit</p>
                            </div>
                        </div>
                        <a className="process-bottom__download process-bottom__download_mob" href="#"><img className="process-bottom__download-img" src={processdownload} alt="download icon" /> download</a>
                    </div>
                </div>
                <div className="process-wrap process-wrap-last">
                    <h4 className="process-part"> 03. Аccompaniment </h4>
                    <div className="process-block">
                    <div className="process-block__item">
                        <span className="process-block__number"> 01</span>
                        <h5 className="process-block__name">Author’s Supervision</h5>
                        <p className="process-block__description">We ensure that your design solution is implemented without any deficiency. Just as it looked in the prototype </p>
                    </div>
                    <div className="process-block__item">
                        <span className="process-block__number"> 02</span>
                        <h5 className="process-block__name">UX Research </h5>
                        <p className="process-block__description">Tracking usability over time to provide users with a seamless experience</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="process-blur"></div>
            <img className="process-heart" src={fon} alt="heart" />
        </div>
        )
    }
}