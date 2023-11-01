import React from "react";
import LeftBarDivComponent from "./LeftBarDivComponent";
import images from "../images";
import '../styles/spacesLeftBar.css'

const PostLeftSideBar = (props) =>{

    return (<>
        <div id="left-side-bar"> 
            <div style={{backgroundColor:'#f1f2f2'}}> <LeftBarDivComponent setCreateSpaceModal={props.setCreateSpaceModal} img={images.addSpaceGrey} text='Create Space' /></div>
           
            {}
        </div>
    </>)
}



export default PostLeftSideBar;