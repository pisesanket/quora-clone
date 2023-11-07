import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProfileHeader =(props) =>{
    const [userDetail,setUserDetail] = useState({})
    const [isfollowing,setFollowing] = useState(false);
    const params = useParams();
    const [isUnfollowing,setIsUnfollowing] = useState(false);
    // const [param,setParam] = useState({});
    
    async function callGetUserApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${props.userId}`, {
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
    // setParam(params);
    callGetUserApi();   
    },[])

    function handleFollowClick(e){
        setFollowing(!isfollowing);
    }

    async function callFollowApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/follow/${props.userId}`, {
            method:'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            if(res.message=="You're already following this user"){
                setFollowing(true);
            }
        })
    }
    async function callUnFollowApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/follow/${props.userId}`, {
            method:'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            if(res.message=="You're already following this user"){
                setFollowing(false);
            }
        })
    }
    // useEffect(()=>{
    //     if(isfollowing){
    //         callUnFollowApi();
    //     }else{
    //         callFollowApi();
    //     }
    // },[isfollowing])
    return (<>
        <div id="profile-header">
            <div id="profile-header-image"><img src={userDetail.profileImage} alt="" /></div>
            <div id="profile-header-name-follow">
                <div id="profile-header-name">{userDetail.name}</div>
                {(localStorage.getItem('userId')==props.userId)?null:<div onClick={handleFollowClick} id="profile-header-follow">{isfollowing?'following':'follow'}</div>}
            </div>
        </div>
    </>)
}

export default ProfileHeader;