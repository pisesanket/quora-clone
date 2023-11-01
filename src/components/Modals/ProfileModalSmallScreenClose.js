import React from "react";
import images from "../images";


const ProfileModalSmallScreenClose = (props) =>{
    function handleCloseModalClick(){
        props.setProfileModal(!props.isProfileModal);
    }

    return(<><div id="profile-modal-small-close">
            <div>Your Account</div>
            <img onClick={handleCloseModalClick} src={images.close} alt="" />
        </div></>)
}


export default ProfileModalSmallScreenClose;