

import React from "react";


const LeftBarDivComponent = (props) =>{
    function handleCreateSpaceClick(){
        props.setCreateSpaceModal(true);
    }
    return (<div onClick={handleCreateSpaceClick} id="left-bar-div-component">
        <img src={props.img} alt="" />
        <div id="left-bar-div-component-text">{props.text}</div>
    </div>)
}

export default LeftBarDivComponent;