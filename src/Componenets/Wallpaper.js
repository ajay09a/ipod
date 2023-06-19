import React, { Component } from 'react'

export class Wallpaper extends Component {
  render() {
    const {active} = this.props;
    return (
        <div className="music">
            <h2>Wallpaper Select</h2>
            <ul>
                {["Wallpaper 1","Wallpaper 2","Wallpaper 3", "Wallpaper 4"].map((element,index)=>{
                    return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                })}
            </ul>
        </div>

    )
  }
}

export default Wallpaper