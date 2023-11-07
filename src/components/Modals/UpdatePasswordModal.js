import React, { useEffect } from "react";
import {useRef, useState} from "react";
import images from "../images";
import './styles/createSpaceModal.css';
const UpdatePasswordModal = (props) =>{
    const [password,setPassword] = useState('');
    const [firstPass,setFirst] = useState('');
    const [secondPass,setSecond] = useState('');
    const [message,setMessage] = useState('');
    const [userDetail,setUserDetail] = useState({});
    const [current ,setCurrent] = useState('');
    function handleInputChange(e){
        if(e.target.id==='first'){
            setFirst(e.target.value);
        }else if(e.target.id==='second'){
            setSecond(e.target.value);
        }else if(e.target.id==='current'){
            setCurrent(e.target.value)
        }
    }
    function handleUpdate(){
        if((firstPass)&&secondPass&&firstPass!==secondPass&&(current)){
            setMessage('Both field should be same');
        }else{
            setPassword(firstPass);
        }
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
        callGetUserApi();
    },[])
    async function callUpdatePassApi(){
        await fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`,
                'projectID': '18t89wnvvqxy'
            },
            body: JSON.stringify({
                name: `${userDetail.name}`,
                email: `${userDetail.email}`,
                passwordCurrent: `${current}`,
                password: `${password}`,
                appType: 'quora'
            })
        }).then(res=>res.json()).then(res=>{
            if(res.status==='success'){
                localStorage.setItem('token',res.token);
                alert('Password Updated Successfully');
                props.setUpdatePassword(false);
            }else{
                alert('something went wrong');
                props.setUpdatePassword(false);

            }

        })
    }
    useEffect(()=>{
        if(password){
            callUpdatePassApi();
        }
    },[password])
    return (
        <div id="create-space-modal">
            <div id="create-space-modal-div">
                <div id="create-space-modal-header">
                    <img onClick={()=>{props.setUpdatePassword(false)}} src={images.close} style={{width:'24px'}} alt="" />
                </div>
                <div id="create-space-modal-content">
                    <div id="create-space-modal-title">Update Password</div>
                    <div id="create-space-modal-name-input"><input id="current" type="password" placeholder="Enter Current" value={current} onChange={handleInputChange}/></div>

                    
                    <div id="create-space-modal-name-input"><input id="first" type="password" placeholder="Enter New Password" value={firstPass} onChange={handleInputChange}/></div>
                   
                    <div id="create-space-modal-description-input"><input id="second" type="password" placeholder="Confirm Password" value={secondPass} onChange={handleInputChange} /></div>
                    <div style={{color:'red'}}>{message}</div>
                    </div>
                <div id="create-space-modal-footer">
                    <div id="create-space-modal-footer-btn" onClick={handleUpdate}>Update</div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePasswordModal;