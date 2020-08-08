import React, { Component } from "react";
import $ from "jquery"
import "./designDepart.css";
export default class DesignDepartment extends Component{
    componentDidMount(){
        $(document).ready(function() {
            setTimeout(function(){ 
               $(".design-depart-fs").addClass('timeout');
               setTimeout(function(){ 
                    $(".desing-department_subtitle-fs").addClass('open');
                        setTimeout(function(){ 
                            $(".desing-department_title-fs span").addClass('open');
                                setTimeout(function(){ 
                                    $(".design-depart-fs").addClass('open');
                                    setTimeout(function(){ 
                                        $(".design-depart-fs").addClass('big');
                                    }, 200);
                                    setTimeout(function(){ 
                                        $(".desing-department_title-fs").addClass('next');
                                    }, 1500);
                                }, 800);
                        }, 500);
                    }, 500);
             }, 1000);
        });
    }
    render(){
        return(
            <div className="design-department">
                <h5>Opium Pro</h5>
                {/* <h1 className="desing-department_title">
                    External
                    <p className="desing-department_subtitle">design department</p>
                    For your IT-company
                </h1> */}
                <div class="design-depart-fs">
                    <h1 className="desing-department_title-fs">
                        <span>External</span>
                        <p className="desing-department_subtitle-fs">design department</p>
                        <span>For your IT-company</span>
                    </h1>
                </div>
            </div>
        )
    }
}