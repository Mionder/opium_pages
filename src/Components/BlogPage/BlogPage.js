import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Discuss from "../Discuss/Discuss";
import "./blogPage.css";
export default class BlogPage extends Component{
    render(){
        return(
            <div className="blog_page">
                <Header />
                <div className="blog_page-blue-blur"></div>
                <div className="blog_page-viollet-blur"></div>
                <div className="container">
                        <h2 className="blog_page-title">Blog</h2>
                    <div className="blog_page_wrapper">
                        <div className="blog_page-item">
                            <div class="blog_page-item-img blog_page-item-first">
                            </div>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers</p>
                               <div class="blog_page-item_all">
                                <a href="https://medium.com/@opium.pro" className="blog_page-item_link">
                                    <svg className="" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                    </svg>
                                    <span>Read on Medium</span>
                                </a>
                               </div>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog_page-item">
                            <div class="blog_page-item-img blog_page-item-second">
                            </div>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Hi. I’m the CDO at Russian IT-company and I wanted to talk to you about the ways we conducted usability testing of our mobile application</p>
                                <div class="blog_page-item_all">
                                <a href="https://medium.com/@opium.pro" className="blog_page-item_link">
                                <svg className="" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span>Read on Medium</span>
                                </a>
                                </div>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog_page-item">
                           <div class="blog_page-item-img blog_page-item-third">
                           </div>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Hi. I’m the CDO at Russian IT-company and I wanted to talk to you about the ways we conducted usability testing of our mobile application</p>
                                <div class="blog_page-item_all">
                                <a href="https://www.youtube.com/watch?time_continue=2&v=qAGPmxFOloI&feature=emb_logo" className="blog_page-item_link">
                                    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.3819 3.286C29.0362 2.00107 28.0229 0.988179 26.7378 0.642188C24.3902 0 14.9997 0 14.9997 0C14.9997 0 5.60945 0 3.26185 0.617841C2.00153 0.963466 0.963503 2.00126 0.617799 3.286C0 5.63288 0 10.5 0 10.5C0 10.5 0 15.3917 0.617799 17.714C0.963869 18.9987 1.97681 20.0116 3.26203 20.3576C5.63417 21 15 21 15 21C15 21 24.3902 21 26.7378 20.3822C28.0231 20.0364 29.0362 19.0235 29.3823 17.7387C29.9999 15.3917 29.9999 10.5247 29.9999 10.5247C29.9999 10.5247 30.0246 5.63288 29.3819 3.286ZM12.0099 14.9964V6.00358L19.8186 10.5L12.0099 14.9964Z" fill="#212121"/>
                                    </svg>
                                <span>Watch on Youtube</span>
                                </a>
                                </div>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_page-blue-bl"></div>
                </div>
                <Discuss />
                <Footer />
            </div>
        )
    }
}