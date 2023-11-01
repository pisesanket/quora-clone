import React from "react";
import '../styles/PostPage.css'
import Posts from "./Posts";
import PostLeftSideBar from "./PostLeftSideBar";
import { useWindowSize } from "@uidotdev/usehooks";
const postUrl ='https://academics.newtonschool.co/api/v1/quora/post'
const PostPage = (props) =>{
    const size = useWindowSize();
    return (
        <div className="container">
            <div id='page-container' >
                <div id='left-sideBar' style={{height:size.height}}>
                    <PostLeftSideBar setCreateSpaceModal={props.setCreateSpaceModal} />
                </div>
                
                <div id="middleBar-content" style={{height:size.height}}><Posts postUrl={postUrl} /></div>
                <div id="right-sideBar" style={{height:size.height}}></div>

    
            </div>
      </div>
    )
}

export default PostPage;