import React, { Component } from "react";
import Header from "../Header/Header";
import Find from "../Find/Find";
import Example from "../Example/Example";
import Arguments from "../Arguments/Arguments";
import FindProcess from "../FindProcess/FindProcess";
import FindRoles from "../FindRoles/FindRoles";
import Discuss from "../Discuss/Discuss";
import Footer from "../Footer/Footer";

export default class FindPage extends Component{
    render(){
        return(
            <div className="findPage">
                <Header />
                <Find />
                <Example />
                <Arguments />
                <FindProcess />
                <FindRoles />
                <Discuss />
                <Footer />
            </div>
        )
    }
}