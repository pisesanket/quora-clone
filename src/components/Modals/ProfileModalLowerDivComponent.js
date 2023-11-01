import React from "react";

const ProfileModalLowerDivComponent = (props) =>{

    return (<>
        <div onClick={props.onClick} id="ProfileModalLowerDivComponent">
            {props.text}
        </div>
    </>)
}



export default ProfileModalLowerDivComponent;