import React from "react";
import images from "../images";


const ChannelPageHeader = (props) =>{

    return (<>
        <div id="channel-page-header" className="container">
            <div id="channel-page-image"><img src={props.channelImage} alt="" /></div>
            <div id="channel-page-title">{props.channelName}</div>
            <div id="channel-page-desc-more"><div id="channel-page-desc">{props.channelDesc}</div><div id="channel-page-more"><img src={images.more} alt="" /></div></div>
        </div>
    </>)
}

export default ChannelPageHeader;