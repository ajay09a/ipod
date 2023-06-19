import React, { Component } from 'react'
import '../assets/css/theme.css'

export class WheelColor extends Component {
  render() {
    const {active} = this.props;
    return (
        <div className="music">
            <h2>Wheel Color Select</h2>
            <ul>
                {["Black","White","Brown"].map((element,index)=>{
                    return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                })}
            </ul>
        </div>

    )
  }
}

export default WheelColor