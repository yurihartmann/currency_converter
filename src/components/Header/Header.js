import React, {Component} from "react";
import "./Header.css";
import logo from "./money-bill-alt-regular.svg"

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                <img src={logo} className="logo"/>
                <h1>Currency Converter</h1>
            </div>
        )
    }
}