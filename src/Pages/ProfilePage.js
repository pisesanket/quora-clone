import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageBig from "../components/ProfillePage/ProfilePageBig";
import { useWindowSize } from "@uidotdev/usehooks";
import ProfilePageSmall from "../components/ProfillePage/ProfilePageSmall";
import '../styles/profilePage.css'

const ProfilePage=()=>{
    const param = useParams();
    const size = useWindowSize();

    return (<>
        <div id="profile-page">
            <div className="container">
                <div id="profile-page-div">
                   {(size.width>1024)? <ProfilePageBig userId = {param.userId} />:<ProfilePageSmall userId={param.userId} />}
                </div>
            </div>
        </div>
    </>)
}

export default ProfilePage;