import React, { useContext, useEffect, useState } from "react";
import '../styles/loginPage.css';
import images from "../components/images";
import SignUpModal from "../components/Modals/SignUpModal";
import { AuthContext } from "../context/AuthProvider";


const LoginPage = (props) => {
    const [loginDetail, setLoginDetail] = useState({});
    const[showSignUpModal,setSignModal] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [err,setError] = useState('');
    const {isLoggedIn,setIsLogged} = useContext(AuthContext);


    function handleLoginSubmitForm(e){
        e.preventDefault();
        setLoginDetail({'email':email,'password':password});
    }
    
    function onDetailChange(e){
        if(e.target.type==='email'){
            setEmail(e.target.value);
        }else if(e.target.type==='password'){
            setPassword(e.target.value);
        }
    }
    
    function signUpHandleClick(e){
        e.stopPropagation();
        setSignModal(true);
    }
    
    async function callLoginApi(){
    
        await fetch('https://academics.newtonschool.co/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'projectID': '18t89wnvvqxy'
                },
                body: JSON.stringify({
                    'email': loginDetail.email,
                    'password': loginDetail.password,
                    'appType': 'quora'
                })
            }).then(res=>res.json()).then(res=>{
                
                
                if(res.status==='success'){
                    localStorage.setItem('token',res.token);
                    localStorage.setItem('isLoggedIn',true);
                    localStorage.setItem('userId',res.data._id)
                    setIsLogged(true);
                }
            
            }).catch(err=>{
                setError(err.message);
            })
    }
    useEffect(()=>{
        if(loginDetail.email&&loginDetail.password){
        
            callLoginApi();
        }
    },[loginDetail])

    return <><div id="login-page">
        <div id="login-page-div">
            <div id="login-page-container">
                <div id="login-page-box">
                    <div id="login-page-box-header">
                        <div id="login-page-box-header-logo"><img src={images.quoraLogo} alt="" /></div>
                        <div id="login-page-box-header-slogan">A place to share knowledge and better understand the world</div>
                    </div>
                    <div id="login-page-box-content">

                        <form onSubmit={handleLoginSubmitForm}>
                            <label id="login-page-box-login-label" htmlFor="">Login</label>
                            <div id="login-page-box-login-emailBox">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" onChange={onDetailChange} value={email}/>
                            </div>  
                            <div id="login-page-box-login-passwordBox">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Your Password" onChange={onDetailChange} value={password}/>

                            </div>
                            <div id="login-form-footer"><div id="login-form-footer-signup" onClick={signUpHandleClick}>Sign up with email</div><button type="submit"  id="login-form-login-btn">Login</button></div>
                        </form>
                    </div>
                    <div id="login-page-box-footer">please insert all fields</div>
                </div>
            </div>
        </div>
        
    </div>
    {showSignUpModal&&(<>
        <SignUpModal showSignUpModal={showSignUpModal} setSignModal={setSignModal}/>
    </>)}</>
}

export default LoginPage;