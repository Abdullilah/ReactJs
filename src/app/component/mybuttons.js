import React from "react";
import {render} from "react-dom";
import {Btn1} from "./button1";
import {Btn2} from "./button2";
import {Btn3} from "./button3";

export class Mybuttons extends React.Component{
    
    render(){
        return(
            <div>
                <h1>My Buttons Page</h1>
                <Btn1 val={0}/>
                <br/><br/>
                <Btn2 val={0}/>
                <br/><br/>
                <Btn3 val={0}/>
            </div>  
        );
    }
    
}

