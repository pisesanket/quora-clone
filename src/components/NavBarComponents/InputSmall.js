import React from "react";
import images from "../images";


const InputSmall = (props) =>{

    function handleOnSearchClick(e){
        e.stopPropagation();
        props.setSmallSearch(!props.isSmallSearch);

    }

    return (<>
        <div id="search-small-div">
            <img onClick={handleOnSearchClick} src={images.magnifyingGlass} alt="" />
            <div onClick={handleOnSearchClick} id="search-small-div-text">Search</div>
        </div>

    </>)
}

export default InputSmall;