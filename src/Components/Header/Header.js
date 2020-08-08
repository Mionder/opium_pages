import React, { Component } from "react";
import $ from "jquery"
import "./header.css";
import headerLogo from "./img/header-logo.png";
import headerLogosvg from "./img/header-logo.svg";
import { Link } from "react-router-dom";
export default class Header extends Component{
    componentDidMount(){
        let currentPage;
        let windowWhere = window.location.href.toString();
        windowWhere = windowWhere.slice(22, windowWhere.length);
        switch (windowWhere) {
            case "find":
                currentPage = 1;
                break;
            case "":
                currentPage = 0;
                break;
            case "blog": 
                currentPage = 2;
                break;
            case "about": 
                currentPage = 3;
                break;
            case "contacts": 
                currentPage = 4;
                break;
            default:
                currentPage = 6;
                break;
        }
        $(document).ready(function() {
            $(".list-item").removeClass("list-item-active");
            $(`.list-item:eq(${currentPage})`).addClass("list-item-active");
           $(".menu__wrapper").on('click', function() {
               $(".menu__wrapper").toggleClass("rot");
               $(".header-wrap-mobile input + label").toggleClass("fixed");
           });
        });
    }
    
    render(){
        return(
            <div> 
                <header>
                    <div className="container">
                        <div className="header-wrapper header-desktop">
                            <div className="header-left">
                                <ul className="header_list">
                                    <li><Link to="/" activeclassname='active' className="list-item list-item-active">UX/UI Design</Link></li>
                                    <li><Link to="/find" activeclassname='active' className="list-item">Usability Testing</Link></li>
                                    <li><Link to="/blog" activeclassname='active' className="list-item">Blog</Link></li>
                                </ul>
                            </div>
                            <div className="header-center">
                                <Link to="/"><img className="header_logo" src={headerLogo} alt="logo"/></Link>
                            </div>
                            <div className="header-right">
                                <ul className="header_list">
                                    <li><Link to="/about" activeclassname="active" className="list-item" href="#">About us</Link></li>
                                    <li><Link to="/contacts" activeclassname="active" className="list-item" href="#">Contacts</Link></li>
                                    <li><a className="list-item" href="mailto:ilove@opium.pro">ilove@opium.pro</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-wrap-mobile">
                        <div className="header-wrap__logo">
                            <a href="#"><img src={headerLogosvg} alt="logo" /></a>
                        </div>
                            <input id="burger" type="checkbox" />
                            <label htmlFor="burger">
                                <div className="menu__wrapper">
                                    <div className="menu__item--bento" tabIndex="3">
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                        <div className="box"></div>
                                    </div>
                                </div>
                            </label>
                            <nav>
<div className="header-mob-open">
                                <ul>
                                    <li><Link to="/mainpage"><img src={headerLogo} alt="logo"/></Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/">UX/UI Design</Link></li>
                                    <li><Link to="/find">Usability Testing</Link></li>
                                    <li><Link to="/blog" >Blog</Link></li>
                                    <li><Link to="/about" >About us</Link></li>
                                    <li><Link to="/contacts">Contacts</Link></li>
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
