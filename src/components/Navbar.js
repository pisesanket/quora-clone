import React,{ useContext, useEffect, useState } from 'react';
import '../styles/navbar.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Home from './Home'
import images from './images';
import { useWindowSize } from "@uidotdev/usehooks";
import MainNavigation from './NavBarComponents/MainNavigation';
import Input from './NavBarComponents/Input';
import NavBarLoginAndAddPost from './NavBarComponents/NavBarLoginAndAddPost';
import LoginPage from '../Pages/LoginPage';

import PostPage from './Post/PostPage';
import { AuthContext } from '../context/AuthProvider';
import NavBarLoginSmall from './NavBarComponents/NavBarLoginSmall';
import ProfileModal from './Modals/ProfileModal';
import CreatePostModal from './Modals/CreatePostModal';
import CreateSpaceModal from './Modals/CreateSpaceModal';
import SpacePage from './Spaces/SpacePage';
import ProfilePage from '../Pages/ProfilePage';
import ChannelPage from '../Pages/ChannelPage';
import SmallSearchBox from './NavBarComponents/SmallSearchBox';
import SmallTitle from './NavBarComponents/SmallTitle';
import SearchModal from './Modals/SearchModal';
import SearchPageResult from '../Pages/SearchPageResult';



const Navbar = (props) =>{
    const size = useWindowSize();
    const {isLoggedIn,setIsLogged} = useContext(AuthContext);
    const [isProfileModal,setProfileModal] = useState(false);
    const [isCreatePostModal,setCreatePostModal] = useState(false);
    const [isCreateSpaceModal,setCreateSpaceModal] = useState(false);
    const [isSmallSearch,setSmallSearch] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');


    
    if(isLoggedIn){
        return (
             <div >   
            <nav >
                <div  className='container'>
                    {(size.width>1024)?<div id='navbar-div'>
                        <Link to='/'><div id='logo' className='navbar-icons'><img src={images.quoraLogo} alt="quora"/></div></Link>
                        <div id='navbar-icons-search-login-div'>
                            <MainNavigation />
                            <Input setSearchTerm={setSearchTerm} searchTerm={searchTerm} setIsInputActive={setIsInputActive}/>
                            <NavBarLoginAndAddPost isCreatePostModal={isCreatePostModal} setCreatePostModal={setCreatePostModal}  isProfileModal={isProfileModal} setProfileModal={setProfileModal}/>
                        </div>
                    </div>:(<div id='navbar-smallScreen-div'>
                            {(isSmallSearch==false)?<SmallTitle isSmallSearch={isSmallSearch} setSmallSearch={setSmallSearch}  setCreatePostModal={setCreatePostModal}/>:
                                <SmallSearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm}  setIsInputActive={setIsInputActive}  isSmallSearch={isSmallSearch} setSmallSearch={setSmallSearch}  />}
                            
                            <div id='nav-small-icons'><MainNavigation /><NavBarLoginSmall isProfileModal={isProfileModal} setProfileModal={setProfileModal}/></div>
                        </div>)}
                {isProfileModal&&<ProfileModal isProfileModal={isProfileModal} setProfileModal={setProfileModal} />}
                {isCreatePostModal&&<CreatePostModal setCreatePostModal={setCreatePostModal}/>}
                {isCreateSpaceModal&&<CreateSpaceModal setCreateSpaceModal={setCreateSpaceModal} />}
                {isInputActive&&<SearchModal setSearchTerm={setSearchTerm} searchTerm={searchTerm}  setIsInputActive={setIsInputActive}/>}
    
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<PostPage setCreateSpaceModal={setCreateSpaceModal} />}></Route>
                <Route path='/spaces'  element={<SpacePage setCreateSpaceModal={setCreateSpaceModal}/>}></Route>
                <Route path='/profile/:userId' element={<ProfilePage />}></Route>
                <Route path='/channel/:channelId' element={<ChannelPage />}></Route>
                <Route path='/notifications' element={''}></Route>
                <Route path='/following' element={''}></Route>
                <Route path='/answer' element={''}></Route>
                <Route path="/search" element={<SearchPageResult />} />

            </Routes>
            </div>
            )
    
    
    }else{
        return(<LoginPage />)
    }

    }



export default Navbar;