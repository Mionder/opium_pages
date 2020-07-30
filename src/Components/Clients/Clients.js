import React, { Component } from "react";
import Slider from "react-slick";
import "./Clients.css";
import client1 from "./img/client1.svg";
import client2 from "./img/clients2.svg";
import client3 from "./img/clients3.svg";
import client4 from "./img/clients4.svg";
import client5 from "./img/clients5.svg";
import client6 from "./img/clients6.svg";
import reward from "./img/reward.svg";
export default class Clients extends Component{
    render(){ 
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            variableWidth: true
          };
        return(
            <div className="cliens">
            <div className="blue-blur"></div>
            <div className="container">
                <h3 className="cliens-finished">With our cliens we successfully finished projects for such companies as </h3>
                <p className="cliens-addition">Due to NDAs, we cannot share details on certain projects or clients</p>
                    <div className="cliens-wrapper cliens-wrapper-desktop">
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client1} alt="clients 1" />
                            <p className="cliens-item__about">The symbol of Moscow fashion – Eastern Europe’s largest department store. A place where high-end boutiques meet haute cuisine and modern art</p>
                            <span className="cliens-item__winner"><img src={reward} alt="reward" />The winner of the Best Russian Intranet Awward </span>
                        </div>
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client4} alt="clients 4" />
                            <p className="cliens-item__about">Leading Russian business software developer. Official distributor of Microsoft, Novell, Borland, and more than 100 other well-known vendors</p>
                        </div>
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client3} alt="clients 3" />
                            <p className="cliens-item__about">A full-service commercial bank focusing on the client’s experience. Develops an omnichannel attitude to make more products available to a larger audience </p>
                        </div>
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client2} alt="clients 2" />
                            <p className="cliens-item__about">Russian monetary authority also functioning as a banking mega-regulator. Maintains pricing and financial stability, nurtures financial development </p>
                        </div>
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client5} alt="clients 5" />
                            <p className="cliens-item__about">The second-biggest Russian universal commercial bank. Initially servicing foreign trade operations, it quickly expanded to a large-scale financial group</p>
                        </div>
                        <div className="cliens-item">
                            <img className="clients-item__logo" src={client6} alt="clients 6" />
                            <p className="cliens-item__about">No. 1 natural gas exporter in the world. It supplies more than 20 countries and invests in energy projects worldwide</p>
                        </div>
                    </div>
            </div>
            <div className="clients-slider">
                <div className="container">
                    <Slider {...settings}>
                        <div className="clien">
                            <img className="clients-item__logo" src={client1} alt="clients 1" />
                            <p className="cliens-item__about">The symbol of Moscow fashion – Eastern Europe’s largest department store. A place where high-end boutiques meet haute cuisine and modern art</p>
                            <span className="cliens-item__winner"><img src={reward} alt="reward" />The winner of the Best Russian Intranet Awward </span>
                        </div>
                        <div className="clien">
                            <img className="clients-item__logo" src={client4} alt="clients 4" />
                            <p className="cliens-item__about">Leading Russian business software developer. Official distributor of Microsoft, Novell, Borland, and more than 100 other well-known vendors</p>
                        </div>
                        <div className="clien">
                            <img className="clients-item__logo" src={client3} alt="clients 3" />
                            <p className="cliens-item__about">A full-service commercial bank focusing on the client’s experience. Develops an omnichannel attitude to make more products available to a larger audience </p>
                        </div>
                        <div className="clien">
                            <img className="clients-item__logo" src={client2} alt="clients 2" />
                            <p className="cliens-item__about">Russian monetary authority also functioning as a banking mega-regulator. Maintains pricing and financial stability, nurtures financial development </p>
                        </div>
                        <div className="clien">
                            <img className="clients-item__logo" src={client5} alt="clients 5" />
                            <p className="cliens-item__about">The second-biggest Russian universal commercial bank. Initially servicing foreign trade operations, it quickly expanded to a large-scale financial group</p>
                        </div>
                        <div className="clien">
                            <img className="clients-item__logo" src={client6} alt="clients 6" />
                            <p className="cliens-item__about">No. 1 natural gas exporter in the world. It supplies more than 20 countries and invests in energy projects worldwide</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        )
    }
}