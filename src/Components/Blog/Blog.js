import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./blog.css";
import heartImg from "./img/11.png";
import moreInfo from "./img/more.png";
export default class Blog extends Component{
    render(){
        return(
            <div className="blog">
                <div className="container">
                    <div className="blog-head">
                        <h2 className="blog-title">Blog</h2>
                        <img className="blog-heart" src={heartImg} alt="blog" />
                        <Link className="see-all" to="/blog"><span className="see_all-icon">see all</span>                        
                            {/* <img src={moreInfo} alt=""/> */}
                            <svg  width="35" height="18" viewBox="0 0 35 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 9H33.5M33.5 9L25.5 1M33.5 9L25.5 17" stroke="#5B24B3" stroke-width="2"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="blog-cards">
                        <a href="#" className="blog-cards_item">
                            <h5 className="blog-item_title">Standardization of color schemes through the eyes of a programmer</h5>
                            <p className="blog-item_info">Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers</p>
                            <a className="blog-item_link" href="#">
                                <svg className="blog-medium_icon" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span class="blog-cards__med-note">Read on Medium</span>
                            </a>
                            <div className="blog-cards-date">
                                <span>15 min read</span>
                                <span>May 24. 2020</span>
                            </div>
                        </a>
                        <a href="#" className="blog-cards_item">
                            <h5 className="blog-item_title">Standardization of color schemes through the eyes of a programmer</h5>
                            <p className="blog-item_info">Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers</p>
                            <a className="blog-item_link" href="#"> 
                                <svg className="blog-medium_icon" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span class="blog-cards__med-note">Read on Medium</span>
                            </a>
                            <div className="blog-cards-date">
                                <span>15 min read</span>
                                <span>May 24. 2020</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="blog-viollet-blur"></div>
                <div className="blog-blue-blur"></div>
    </div>
        )
    }
}