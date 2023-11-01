import React, { useRef,useEffect, useContext, useState } from "react";
import images from "../images";
import ProfileModalLowerDivComponent from "./ProfileModalLowerDivComponent";
import { Link } from "react-router-dom";
import './styles/profileModal.css'
import ProfileModalSmallScreenClose from "./ProfileModalSmallScreenClose";
import { AuthContext } from "../../context/AuthProvider";


const ProfileModal = (props) =>{
    const {isLoggedIn,setIsLogged} = useContext(AuthContext);
    const [userDetail,setUserDetail] = useState({})

    const profileRef = useRef();
    useEffect(()=>{
        function checkOutsideProfileClick(e){
            
            if(profileRef.current&&!profileRef.current.contains(e.target)){
                props.setProfileModal(!props.isProfileModal);
            }
       
        }

        if(props.isProfileModal){

            document.addEventListener('click',checkOutsideProfileClick);
        }

        return ()=>{
            document.removeEventListener('click',checkOutsideProfileClick);
        }
    },[props.isProfileModal])
    async function callGetUserApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${localStorage.getItem('userId')}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            setUserDetail(res.data);
        }).catch(err=>{
            console.log(err);
        })

    }
    useEffect(()=>{
        callGetUserApi();
    },[])

    function handleLogoutClick(){
        
        setIsLogged(false);
        localStorage.setItem('isLoggedIn',false)
        localStorage.removeItem('userId');
        // localStorage.removeItem('isLoggedIn')
    }

    return (<>

        
        <div id="profile-modal" className="profile-modal-div" ref={profileRef}>
        <ProfileModalSmallScreenClose isProfileModal={props.isProfileModal} setProfileModal={props.setProfileModal}/>
            <div id="profile-modal-header">
                <Link to={`profile/${localStorage.getItem('userId')}`}>
                    <div id="profile-modal-link-section">
                        <img width={'30px'} height={'30px'} src={userDetail.profileImage} alt="" />
                        <div id="profile-modal-text">{userDetail.name}</div>
                    </div>
                </Link>
            </div>
            <div id="profile-modal-lower">
                <ProfileModalLowerDivComponent text='Bookmarks' />
                <ProfileModalLowerDivComponent text='Dark Mode' />
                <ProfileModalLowerDivComponent text='Change Password' />
                <ProfileModalLowerDivComponent onClick={handleLogoutClick} text='Logout' />
            </div>
        </div>
    </>)
}

export default ProfileModal;