
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PostHeader = ({channelId,authorId,channelImage,channelName,authorImage,authorName}) =>{
    const [userDetail,setUserDetail] = useState({})
    const [channelInfo,setChannelInfo] = useState({});
    const [authorInfo,setAuthorInfo] = useState({});
    const [followClick, setFollowClick] = useState(false);
    const [channleData,setChannelData] = useState({})
    async function callChannelInfo(){
        fetch(`https://academics.newtonschool.co/api/v1/quora/channel/${channelId}`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
       'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            setChannelData(res.data);
        }).catch(err=>{console.log(err)})
    }

    async function callGetUserApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${authorId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
    
            setUserDetail(res.data);

        }).catch(err=>{
            console.log(err);
        })

    }
 
    useEffect(()=>{
       
        
        setChannelInfo({'channelImage':channelImage,'channelName':channelName});
        setAuthorInfo({'authorImage':authorImage,'authorName':authorName});
    },[])


    function handleFollowButton(e){
        setFollowClick(!followClick);
    }
    return(
        <div id="postHeader">
            <div id="postHeader-channelProfileImage">
                <img src={(channelInfo.channelImage)?channelInfo.channelImage:null} alt="" />
            </div>
            <div id="postHeader-channelName-authorName">
                <div id="postHeader-channelName">
                    <span><Link to={`/channel/${channelId}`}>{(channelInfo.channelName)?channelInfo.channelName:null}</Link></span><span>.</span><span id="postHeader-channelName-followClick" style={{cursor:'pointer'}} onClick={handleFollowButton}>{followClick?'Following':'Follow'}</span>
                </div>
                <div id="postHeader-authorName">
                    <div> <Link to={`/profile/${authorId}`}><span id="postHeader-authorName-span">{(authorInfo.authorName)?`by ${authorInfo.authorName}`:null}</span></Link><span>.</span><span></span></div>
                </div>
            </div>
        </div>
    )
}

export default PostHeader;
