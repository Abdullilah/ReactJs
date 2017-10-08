import React from "react";
import {render} from "react-dom";
import {Btn1} from "./button1";
import {Btn2} from "./button2";

export class HomePage extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Btn1 val={0}/>
                <br/><br/>
                <Btn2 val={0}/>
            </div>
        );
    }
    
}

