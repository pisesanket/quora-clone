import React, { useEffect, useState } from "react";
import images from "../images";

const ProfileDetails = (props) =>{
    const [userDetail,setUserDetail] = useState({});
    

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
        <div id="profile-details">
            <div id="profile-details-title">Credentials & Highlights</div>
            <div id="profile-details-data">
                <div className="profile-detail-content"><img src={images.career} alt="" />{(userDetail.workExperience!=null&&userDetail.workExperience.designation!=undefined)?`${userDetail.workExperience.designation} at ${userDetail.workExperience.companyName}`:null}</div>
                <div className="profile-detail-content"><img src={images.graduation} alt="" />Studied at {(userDetail.education!=null&&userDetail.education.schoolName!=undefined)?`${userDetail.education.schoolName}`:null}</div>
                <div className="profile-detail-content"><img src={images.location} alt="" />Lives in {(userDetail.address!=null&&userDetail.address.city!=undefined)?`${userDetail.address.city} ${userDetail.address.state}`:null}</div>
            </div>
        </div>
    </>)
}

export default ProfileDetails;