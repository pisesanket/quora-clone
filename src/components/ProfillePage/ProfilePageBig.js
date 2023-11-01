import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileDetails from "./ProfileDetails";


const ProfilePageBig = (props) =>{
    return (<>
        <div id="profile-page-left-bar">
            <ProfileHeader userId={props.userId} />
            <ProfileContent userId={props.userId} />
        </div>
        <div id="profile-page-right-bar">
            <ProfileDetails userId={props.userId} />
        </div>
    </>)
}


export default ProfilePageBig;