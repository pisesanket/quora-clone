import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePageBig from "../components/ProfillePage/ProfilePageBig";
import { useWindowSize } from "@uidotdev/usehooks";
import ProfilePageSmall from "../components/ProfillePage/ProfilePageSmall";
import '../styles/profilePage.css'

const ProfilePage=()=>{
    const {userId} = useParams();
    const size = useWindowSize();
    const [params,setParam] = useState()
    useEffect(()=>{
        setParam(userId)
    },[])

    return (<>
        <div id="profile-page">
            <div className="container">
                <div id="profile-page-div">
                   {(size.width>1024)? <ProfilePageBig userId = {userId} />:<ProfilePageSmall userId={userId} />}
                </div>
            </div>
        </div>
    </>)
}

export default ProfilePage;