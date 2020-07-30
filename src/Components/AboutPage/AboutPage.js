import React, {Component} from "react";
import Header from "../Header/Header";
import Team from "../Team/Team";
import About from "../About/About";
import Discuss from "../Discuss/Discuss";
import Footer from "../Footer/Footer";

export default class MainPage extends Component{
    render(){
        return(
            <div className="about_page">
                <Header />
                <Team />
                <About />
                <Discuss />
                <Footer />
            </div>
        )
    }
}