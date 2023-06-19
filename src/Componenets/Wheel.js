import React from 'react';
import ZingTouch from 'zingtouch';
import '../assets/css/wheel.css'

class Wheel extends React.Component {
    constructor() {
        super();
        this.angle = 0;
    }
    render() {
        return (
            <div className="wheel-container" id="wheel-container">
                        <div className="wheel" id="wheel" >
                            <div className="controll" id="menu">
                                <div>MENU</div>
                            </div>
                            <div className="controll" id="forward">
                                <i className="fas fa-fast-forward"></i>
                            </div>
                            <div className="controll" id="play-pause">
                                <div>
                                    <i className="fas fa-play"></i>
                                    <i className="fas fa-pause"></i>
                                </div>
                            </div>
                            <div className="controll" id="reverse">
                                <i className="fas fa-fast-backward"></i>
                            </div>
                        </div>

                        <div className="blank" id="blank"></div>
                    </div>
        )
    }

    // control the wheel roatation action if rotation is more than 15 degrees and also check direction of rotation
    wheelControll = (e) => {
        // const { updateActiveMenu, currentMenu } = this.props;
        // console.log(e.detail)
        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
            // console.log("detail angle",e.detail.angle)
            // console.log("this angle",this.angle)
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                // updateActiveMenu(1, currentMenu);
            } else {
                // updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                // updateActiveMenu(1, currentMenu);
            } else {
                // updateActiveMenu(0, currentMenu);
            }

        }
    }

    // Bind components with zingtouch logic
    componentDidMount() {
        // const { changeMenuBackward ,togglePlayPause, seekSongForward, seekSongReverse} = this.props;
        const wheelControll = this.wheelControll;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const playPause = document.getElementById("play-pause");
        const reverse = document.getElementById("reverse");
        const forward = document.getElementById("forward");

        const longTapGesture = new ZingTouch.Tap({
            maxDelay:10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(menuIcon, 'tap', function (e) {
            // changeMenuBackward();
        });
        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelControll(e);
        });
        activeRegion.bind(playPause, 'tap', function (e) {
            // togglePlayPause();
        });

        activeRegion.bind(reverse, longTapGesture, function (e) {
            // seekSongReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) {
            // seekSongForward(e);
        });


    }

}

export default Wheel