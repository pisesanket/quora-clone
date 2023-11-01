import React from "react";
import Posts from "../Post/Posts";


const ChannelPageContent = (props) =>{
    

    return (<>
        <div id="channel-page-content" >
            <div id="channel-content-title-row">
                <div className="channel-content-row-item">Posts</div>
            </div>
            <div id="channel-content-title-posts">
                <Posts channelImage={props.channelImage} channelName ={props.channelName} postUrl={`https://academics.newtonschool.co/api/v1/quora/channel/${props.channelId}/posts`}/>
            </div>
        </div>
    </>);
}

export default ChannelPageContent;