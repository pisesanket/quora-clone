import React, { useEffect, useRef,useState } from "react";
import images from "../images";
import './styles/signUpModal.css'

function SignUpModal({showSignUpModal,setSignModal}){
    const [signupDetail,setSignUpDetail] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUpFormRef = useRef();
    
    function onChange(e){
        if(e.target.type==='text'){
            setName(e.target.value);
        }else if(e.target.type==='email'){
            setEmail(e.target.value)
        }else if(e.target.type==='password'){
            setPassword(e.target.value);
        }
    }
    function handleCloseClick(e){
        setSignModal(false);
    }

    function handleSignUpSubmitForm(e){

        e.preventDefault();
        if(email===''||name===''||password===''){
            setError('fill all details');
        }else{
            setSignUpDetail({'name':name,'email':email,'password':password})
        }
    }
    async function callSignUPApi(){
        await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               'projectID': '18t89wnvvqxy'
            },
            body: JSON.stringify({
                name: signupDetail.name,
                email: signupDetail.email,
                password: signupDetail.password,
                appType: 'quora'
            })
        }).then(res=>res.json()).then(res=>{
            if(res.status==='fail'){
                setError(res.message);
            }else if(res.status=='success'){
                setError('Account Created succesfully');
                // setSignModal(false)
            }else{
                setError('')
            }
        }).catch(err=>{
            console.log(err);
            // setError(err.message);
        })
    }
    
    useEffect(()=>{
        if(signupDetail.name&&signupDetail.password&&signupDetail.email){
            callSignUPApi();
            // console.log(error)
        }
    },[signupDetail])


    useEffect(()=>{
        function checkOutsideClick(e){
            if(signUpFormRef.current&&!signUpFormRef.current.contains(e.target)){
                setSignModal(false);
            }
        }
        document.addEventListener('click',checkOutsideClick);

        return ()=>{
            document.removeEventListener('click',checkOutsideClick);
        }
    },[])


    return (
        <div id="signup-modal">
        <div id='signup-modal-div'>
        <div id="signup-modal-container">
            <div id='signup-modal-box' style={{zIndex:'100',backgroundColor:'#fff'}} ref={signUpFormRef}>
                    <div id="signup-modal-close"><img onClick={handleCloseClick} src={images.close} alt="" /></div>
                    <form id="signup-modal-form" onSubmit={handleSignUpSubmitForm}>
                        <label id="signup-page-box-login-label" htmlFor="">Sign up</label>
                        <div id="signup-page-box-nameBox">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="What would you like to be called?" value={name} onChange={onChange}/>
                        </div>  
                        <div id="signup-page-box-emailBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" value={email} onChange={onChange} />
                        </div>                     
                        <div id="signup-page-box-passwordBox">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Your Password" value={password} onChange={onChange} />
                        </div>
                        {(error=='User already exists')?<div style={{padding:'10px',color:'red'}}>User Already Exists</div>:(error=='Account Created succesfully')?<div style={{padding:'10px',color:'green'}}>{error}</div>:<div style={{padding:'10px',color:'red'}}>{error}</div>}
                        
                        <div id="signup-form-footer"><button type="submit"  id="signup-form-login-btn" >Signup</button></div>
                    </form>                
                </div> 
            </div>
    </div>
    </div>);
}

export default SignUpModal;