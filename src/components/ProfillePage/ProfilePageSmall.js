import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileDetails from "./ProfileDetails";


const ProfilePageSmall =(props) =>{
    return (<React.Fragment>
        <ProfileHeader userId={props.userId} />
        <ProfileDetails userId={props.userId} />
        <ProfileContent userId={props.userId}/>
    </React.Fragment>)
}

export default ProfilePageSmall;