import React, { Component } from "react";
import "./Profile.css";
import profile1 from "./img/profile1.png";
import profile2 from "./img/profile2.png";
import profile3 from "./img/profile3.png";
export default class Profile extends Component{
    render(){ 
        return(
            <div className="profile">
            <div className="blue-blur"></div>
            <div className="container">
                <div className="profile-block">
                    <div className="profile-block__info">
                        <h4 className="profile-block__be">Be</h4>
                        <p className="profile-block__more">Due to NDAs we can’t show most of our designs. Here are some of them</p>
                        <a className="profile-block__link" href="#">Check out our Behance profile</a>
                    </div>
                    <div className="profile-block__photo">
                            <img className="profile-block__photo_first" src={profile1} alt="profile 1" />
                            <img className="profile-block__photo_second" src={profile2} alt="profile 2" />
                            <img className="profile-block__photo_third" src={profile3} alt="profile 3" />
                    </div>
                    <a className="profile-block__link_mob" href="#">Check out our Behance profile</a>
                </div>
            </div>
        </div>
        )
    }
}