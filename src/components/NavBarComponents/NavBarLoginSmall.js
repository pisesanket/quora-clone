import React, { useState,useEffect } from "react";
import images from "../images";

const NavBarLoginSmall = (props) =>{
    const [userDetail,setUserDetail] = useState({});
    function handleProfileClick(e){
        e.stopPropagation();
    
        props.setProfileModal(!props.isProfileModal)
    }
   
    async function callGetUserApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${localStorage.getItem('userId')}`, {
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
        if(JSON.parse(localStorage.getItem('isLoggedIn')===true)){

            callGetUserApi();
        }
    },[])
    return (<>
        <div id="nav-small-profile-div" onClick={handleProfileClick}>
            <img width={'24px'} height={'24px'} src={userDetail.profileImage} alt="" />
        </div>
    </>)

}

export default NavBarLoginSmall;