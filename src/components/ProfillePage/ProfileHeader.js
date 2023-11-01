import React, { useEffect, useState } from "react";



const ProfileHeader =(props) =>{
    const [userDetail,setUserDetail] = useState({})

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
       

            callGetUserApi();
        
        
    },[])
    return (<>
        <div id="profile-header">
            <div id="profile-header-image"><img src={userDetail.profileImage} alt="" /></div>
            <div id="profile-header-name-follow">
                <div id="profile-header-name">{userDetail.name}</div>
                {(localStorage.getItem('userId')==props.userId)?null:<div id="profile-header-follow">follow</div>}
            </div>
        </div>
    </>)
}

export default ProfileHeader;