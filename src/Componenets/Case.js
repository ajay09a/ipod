import React from 'react';


// This component is the outer case of iPod it does nothing special just renders display and wheel component
class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor ,wallpaper, wallpaperItems, noty, setNoty, notifyText} = this.props;
        return (
            <div className="case-container">
                
            </div>
        )
    }
}

export default Case;