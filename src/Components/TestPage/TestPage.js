import React, {Component} from "react";
import Header from "../Header/Header";
import DesignDepartment from "../DesignDepartment/DesignDepartment";
import Virtues from "../Virtues/Virtues";
import Blog from "../Blog/Blog";
import Discuss from "../Discuss/Discuss";
import Footer from "../Footer/Footer";

export default class MainPage extends Component{
    render(){
        return(
            <div className="main_page">
                <Header />
                <DesignDepartment />
                <Virtues />
                <Blog />
                <Discuss />
                <Footer />
            </div>
        )
    }
}