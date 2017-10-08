import React from "react";
import {render} from "react-dom";

export class Btn3 extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            value: this.props.val
        }
    }
    btnClicked(){
        this.setState({
            value: this.state.value+1
        });
    }
    render(){
        return(
            <button onClick={this.btnClicked.bind(this)}>{this.state.value}</button>
        );
    } 
}

