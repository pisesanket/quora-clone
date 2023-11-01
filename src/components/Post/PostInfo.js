import React from "react";


const PostInfo =({postTitle,postDesc,postImage,})=>{
    // const [post]

    return(<>
    <div id="postInfo">
        <div id="postInfo-postTitle"><span>{postTitle}</span></div>
        <div id="postInfo-postDesc"><span>{postDesc}</span></div>
    </div>
    </>)
}

export default PostInfo;