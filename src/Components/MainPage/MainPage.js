import React, {Component} from "react";
import Header from "../Header/Header";
import Experience from "../Experience/Experience";
import Clients from "../Clients/Clients";
import Profile from "../Profile/Profile";
import Process from "../Process/Process";
import Roles from "../Roles/Roles";
import Discuss from "../Discuss/Discuss";
import Footer from "../Footer/Footer";

export default class MainPage extends Component{
    render(){
        return(
            <div className="main_page">
                <Header />
                <Experience />
                <Clients />
                <Profile />
                <Process />
                <Roles />
                <Discuss />
                <Footer />
            </div>
        )
    }
}