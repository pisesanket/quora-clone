import React from "react";
import images from "../images";
import '../styles/spacesPage.css'
import YourSpacesBox from "./YourSpacesBox";
import DiscoverySpaces from "./DiscoverySpaces";


const SpacePage = (props) =>{
    return (
        <div id="space-page" className="container">
            <div id="space-page-container" >
                <div id="spaces-page-content">
                    <div id="spaces-page-content-your-spaces-container">
                        <YourSpacesBox setCreateSpaceModal = {props.setCreateSpaceModal} />
                    </div>
                    <div id="spaces-page-content-discover-title-box">
                        <div id="spaces-page-content-discover-title">Discover Spaces</div>
                        <div id="spaces-page-content-discover-sub"><div id="spaces-page-content-discover-sub-title">Spaces you might like</div><div id="spaces-page-content-discover-sub-viewAll">view all</div></div>
                    </div>
                    <div id="spaces-page-discovery-container">
                        <DiscoverySpaces />
                    </div>
                    <div id="spaces-page-discovery-viewMore">
                        <div>view more <img width={'18px'} src={images.downArrowGrey} alt="" /></div>
                    </div>
                </div>
                <div id="spaces-page-add"></div>
            </div>
        </div>
    )
}

export default SpacePage;