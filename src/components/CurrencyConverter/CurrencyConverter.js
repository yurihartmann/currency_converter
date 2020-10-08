import React, {Component} from "react";
import "./CurrencyConverter.css";

export default class CurrencyConverter extends Component {
    render() {
        return (
            <div className='converter-div'>
                <div className='input-div'>
                    <h2>U$</h2>
                    <input type="number" value="100"/>
                </div>
            </div>
        )
    }
}