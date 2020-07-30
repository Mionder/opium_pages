import React, { Component } from "react";
import "./footer.css";
import Linkedin from "./img/Linkedin.svg";
import Telegram from "./img/Telegram.svg";
import Whatsapp from "./img/Whatsapp.svg";
import Facebook from "./img/Facebook.svg";
import Mail from "./img/Mail.svg";
import Behance from "./img/Behance.svg";
import YouTube from "./img/Vector.svg";
import Instagram from "./img/Instagram.svg";
import Medium from "./img/Medium.svg";
import Habr from "./img/Habr.svg";

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                        <nav className="footer-wrapper">
                        <div className="footer-left">
                            <ul className="footer_content">
                                <li className="footer_content-link"><a href="#">Main</a></li>
                                <li className="footer_content-link"><a href="#">About us</a></li>
                                <li className="footer_content-link"><a href="#">Contacts</a></li>
                            </ul>
                            <ul className="footer_content">
                                <li className="footer_content-link"><a href="#">UX/UI Design</a></li>
                                <li className="footer_content-link"><a href="#">Usability Testing</a></li>
                                <li className="footer_content-link"><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="footer-right">
                            <ul className="footer_content">
                                <li className="footer_content-title">Contact us</li>
                                <li className="footer_content-link fw">
                                    <img src={Linkedin} className="footer_content-logo" alt="no-logo"/>
                                    <a href="#">Linkedin</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Telegram} className="footer_content-logo" alt="no-logo"/>                             
                                    <a href="#">Telegram</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Whatsapp} className="footer_content-logo" alt="no-logo"/>                                                            
                                    <a href="#">Whatsapp</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Facebook} className="footer_content-logo" alt="no-logo"/>
                                    <a href="#">Facebook</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Mail} className="footer_content-logo" alt="no-logo"/>
                                    <a href="mailto:ilove@opium.pro">ilove@opium.pro</a>
                                </li>
                            </ul>
                            <ul className="footer_content">
                                <li className="footer_content-title">Follow us</li>
                                <li className="footer_content-link fw">
                                    <img src={Behance} className="footer_content-logo" alt="no-logo"/>

                                    <a href="#">Behance</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={YouTube} className="footer_content-logo" alt="no-logo"/>                                                            
                                    <a href="#">YouTube</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Instagram} className="footer_content-logo" alt="no-logo"/>                              
                                    <a href="#">Instagram</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Medium} className="footer_content-logo" alt="no-logo"/>
                                    <a href="#">Medium</a>
                                </li>
                                <li className="footer_content-link fw">
                                    <img src={Habr} className="footer_content-logo" alt="no-logo"/>
                                    <a href="#">Habr</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <p className="footer_quote">© Every time you brake copyright rules, <span> Hitler becomes more alive</span></p>
                </div>
            </footer>
        )
    }
}