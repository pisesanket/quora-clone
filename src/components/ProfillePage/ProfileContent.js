import React from "react";
import Posts from "../Post/Posts";
const postUrl ='https://academics.newtonschool.co/api/v1/quora/post'
const ProfileContent = (props) =>{

    return (<>
        <div id="profile-content">
            <div id="profile-content-title-row">
                <div className="profile-content-row-item">Posts</div>
            </div>
            <div id="profile-content-title-posts">
                <Posts postUrl={postUrl}/>
            </div>
        </div>
    </>)
}

export default ProfileContent