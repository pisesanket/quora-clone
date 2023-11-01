import React, {useContext, useEffect, useState} from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import images from "../images";
import { AuthContext } from "../../context/AuthProvider";



const NavBarLoginAndAddPost = (props) =>{
    const size = useWindowSize();
    const {isLoggedIn,setIsLogged} = useContext(AuthContext);
    const [userDetail,setUserDetail] = useState({})
    function handleProfileClick(e){
        e.stopPropagation();
        props.setProfileModal(!props.isProfileModal);
    }
    function handleAddPost(){
        props.setCreatePostModal(true);
    }
    
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
        if(JSON.parse(localStorage.getItem('isLoggedIn')===true))
        callGetUserApi();
    },[])

    return(
        <div id='navbar-login-add-question'>
            {/* <div id="navbar-account-div">
                <div className="navbar-icons" ><img src={images.share}></img></div>
            </div> */}
            <div id="navbar-account-login-div">
                 <div onClick={handleProfileClick}><img style={{marginTop:'auto',marginBottom:'auto'}}  width={'24px'} height={'24px'} src={userDetail.profileImage} alt="" /></div>
            </div>
            <div id='navbar-add' className='navbar-icons' >
                <div onClick={handleAddPost} style={{fontSize:`${size.width/127.27}px`,fontWeight:`${size.width/2.33}`}} id='navbar-add-question-btn'>Add Question</div>
                <div onClick={handleAddPost} id='navbar-add-post-btn'>
                    <img src={`https://img.icons8.com/ios-glyphs/${size.width/70}/ffffff/expand-arrow--v1.png`} alt="expand-arrow--v1"/>
                </div>
            </div>  
        </div>
    )
}

export default NavBarLoginAndAddPost;