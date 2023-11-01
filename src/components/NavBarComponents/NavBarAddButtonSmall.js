import React from "react";
import images from "../images";

const NavBarAddButtonSmall = (props) =>{


    return (<>
        <div onClick={()=>{props.setCreatePostModal(true)}} id="add-section-div-small">
            <img src={images.add} alt="" />
            <div id="add-section-div-small-text">Add</div>
        </div>
    </>)
}

export default NavBarAddButtonSmall;