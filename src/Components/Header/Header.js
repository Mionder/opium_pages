import React, { Component } from "react";
import "./header.css";
import headerLogo from "./img/header-logo.png";
import headerLogosvg from "./img/header-logo.svg";
import {Link} from "react-router-dom";
export default class Header extends Component{
    render(){
        return(
            <div> 
                <header>
                    <div className="container">
                        <div className="header-wrapper header-desktop">
                            <div className="header-left">
                                <ul className="header_list">
                                    <Link to="/" className="list-item"><li>UX/UI Design</li></Link>
                                    <Link to="/blog-test" className="list-item"><li>Usability Testing</li></Link>
                                    <Link to="/blog" className="list-item"><li>Blog</li></Link>
                                </ul>
                            </div>
                            <div className="header-center">
                                <Link to="/mainpage"><img className="header_logo" src={headerLogo} alt="logo"/></Link>
                            </div>
                            <div className="header-right">
                                <ul className="header_list">
                                    <Link to="/about" className="list-item" href="#"><li>About us</li></Link>
                                    <Link to="/contacts" className="list-item" href="#"><li>Contacts</li></Link>
                                    <li><a className="list-item" href="mailto:ilove@opium.pro">ilove@opium.pro</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-wrap-mobile">
                        <div class="header-wrap__logo">
                            <a href="#"><img src={headerLogosvg} alt="logo" /></a>
                        </div>
                            <input id="burger" type="checkbox" />
                            <label htmlFor="burger">
                                <div class="menu__wrapper">
                                    <div class="menu__item--bento" tabindex="3">
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </label>
                            <nav>    
                            <div className="header-mob-open">
                                <ul>
                                    <li><a href="#"><img src={headerLogo} alt="logo"/></a></li>
                                </ul>
                                <ul>
                                    <Link to="/"><li>UX/UI Design</li></Link>
                                    <Link to="/blog-test"><li>Usability Testing</li></Link>
                                    <Link to="/blog"><li>Blog</li></Link>
                                    <Link to="/about"><li>About us</li></Link>
                                    <Link to="/contacts"><li>Contacts</li></Link>
                                    <li><a href="mailto:ilove@opium.pro">ilove@opium.pro</a></li>
                                </ul>  
                            </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}