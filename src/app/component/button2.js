import React from "react";
import {render} from "react-dom";

export class Btn2 extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            value: this.props.val,
            bgColor: '#DDD',
            size: 14
        }
    }

    btnClicked(){
        this.setState({value: this.state.value + 1});
        if(this.state.value >= 5){
            this.setState({
                bgColor: '#FFFF00',
                size: 20
            });
        }
    }

    render(){
        return(
            <button onClick={this.btnClicked.bind(this)} style={
                    {
                        backgroundColor: this.state.bgColor,
                        fontSize: this.state.size
                    }
                }>{this.state.value}</button>
        );
    }
}

