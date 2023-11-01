import React from "react";
import images from "../images";

import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";

import InputSmall from "./InputSmall";
import NavBarAddButtonSmall from "./NavBarAddButtonSmall";



const SmallTitle = (props) =>{




    return (<>
        <div id='nav-small-search-home-add'>
            <InputSmall isSmallSearch={props.isSmallSearch} setSmallSearch={props.setSmallSearch} />
            <Link to='/'><div id='logo' className='navbar-icons'><img src={images.quoraLogoWhite} alt="quora"/></div></Link>
            <NavBarAddButtonSmall setCreatePostModal={props.setCreatePostModal}/>
        </div>
    </>)
}

export default SmallTitle