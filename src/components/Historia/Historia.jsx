import React,{Component} from "react";
import data from "../data.json";

export default class Historia extends Component{
    render(){
        return(
            <h1 className="historia">{data[this.props.contador].historia}</h1>
        )
    }
}