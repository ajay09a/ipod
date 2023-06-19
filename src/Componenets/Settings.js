import React, { Component } from 'react'
import '../assets/css/settings.css'

export class Settings extends Component {
  render() {
    const {active} = this.props;
    return (
        <div className="settings">
            <h2>Settings</h2>
            <ul>
                {active===0?<li className="active">Themes</li>:<li>Themes</li>}
                {active===1?<li className="active">Wheel Color</li>:<li>Wheel Color</li>}
                {active===2?<li className="active">Wallpaper</li>:<li>Wallpaper</li>}
            </ul>
        </div>

    )
  }
}

export default Settings