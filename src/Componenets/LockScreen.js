import React, { Component } from 'react'

export class LockScreen extends Component {
  render() {
    return (
      <div>
          <div className="lock-display">
              <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
          <div className="bottom-div-lock">
              <h3>Press Centre Button to unlock!</h3>
          </div>
      </div>
    )
  }
}

export default LockScreen