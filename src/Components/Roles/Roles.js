import React, { Component } from "react";
import "./Roles.css";
export default class Roles extends Component{
    render(){ 
        return(
            <div className="roles">
            <div className="roles-blur"></div>
            <div className="container">
                <h3 className="roles-header">Roles</h3>
                <div className="roles-wrap">
                    <div className="roles-item">
                        <h5 className="roles-item__post">Design Director</h5>
                        <p className="roles-item__decs">The captain of the UX/UI spaceship. Responsible for strategic decisions and task control</p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">Busines Analyst</h5>
                        <p className="roles-item__decs">Collects and researches user data to create a great marketable product </p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">UX/UI designer (2х)</h5>
                        <p className="roles-item__decs"> Experts in humanizing technologies through intuitive user interfaces and flawless interactions  </p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">UX-tester</h5>
                        <p className="roles-item__decs">Examines all kinds of actions in the app and comprehensively presents the results </p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">Assistant</h5>
                        <p className="roles-item__decs">Backs up the whole team making for prolific cooperation</p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">Illustrator</h5>
                        <p className="roles-item__decs">The artist transforming ideas into visual concepts</p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">Graphic designer </h5>
                        <p className="roles-item__decs">Creates a stunning look for every graphic element, from UI components to presentations </p>
                    </div>
                    <div className="roles-item">
                        <h5 className="roles-item__post">Videographer</h5>
                        <p className="roles-item__decs">Records and edits real-life app tests and any video materials you may need throughout the project</p>
                    </div>
                </div>
            </div>
            <div className="roles-blur__blue"></div>
        </div>
        )
    }
}