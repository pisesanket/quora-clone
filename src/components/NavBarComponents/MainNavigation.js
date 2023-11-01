import React, { Fragment } from "react";
import images from "../images";
import { Link, useLocation } from "react-router-dom";

const MainNavigation= () =>{
    const location = useLocation();
    return (
        <Fragment>

            <div id='navbar-icons-div'>
                
                    <Link to='/'><div id='home-icon' style={(location.pathname=='/')?{borderBottom:'3px solid #b92b27'}:{}} className='navbar-icons navbar-icons-small'><img  src={(location.pathname=='/')?images.homeActive:images.home} alt="home--v2"/></div></Link>
                    <Link to='/following'>  <div id='following-icon' style={(location.pathname=='/following')?{borderBottom:'3px solid #b92b27'}:{}} className='navbar-icons navbar-icons-small'><img src={(location.pathname=='/following')?images.followUpActive:images.followUp} alt="todo-list--v1"/></div></Link>  
                    <Link to='/answer'> <div id='spaces-icon' style={(location.pathname=='/answer')?{borderBottom:'3px solid #b92b27'}:{}} className='navbar-icons navbar-icons-small'><img  src={(location.pathname=='/answer')?images.editActive:images.edit} alt="conference-call--v1"/></div></Link>
                    <Link to='/spaces'><div id='spaces-icon' style={(location.pathname=='/spaces')?{borderBottom:'3px solid #b92b27'}:{}} className='navbar-icons navbar-icons-small'><img  src={(location.pathname=='/spaces')?images.teamActive:images.team} alt=""/></div></Link>
                    <Link to='/notifications'> <div id='notification-icon' style={(location.pathname=='/notifications')?{borderBottom:'3px solid #b92b27'}:{}} className='navbar-icons navbar-icons-small'><img src={(location.pathname=='/notifications')?images.bellActive:images.bell} alt="appointment-reminders--v1"/></div></Link>
            </div>
        </Fragment>
    )
}

export default MainNavigation;