import React from "react";
import images from "../images";

const YourSpacesBox = (props) =>{
    function handleCreateSpace(){
        props.setCreateSpaceModal(true);
    }
    return (<>
        <div id="your-spaces-box">
            <div id="your-spaces-box-title">Your Spaces</div>
            <div id="your-spaces-box-navigations">
                <div id="your-spaces-box-create-space" onClick={handleCreateSpace}><img width={'18px'} src={images.addSpaceBlue} alt="" /> Create<span> a Space</span></div>
                <div id="your-spaces-box-discover-space"><img width={'18px'} src={images.exploreSpaceBlue} alt="" /> Discover<span> Spaces</span></div>
            </div>
            <div id="your-spaces-box-spacesList">
                
            </div>
        </div>
    </>)
}


export default YourSpacesBox;