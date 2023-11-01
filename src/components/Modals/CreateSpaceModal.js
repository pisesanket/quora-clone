import React, {useRef, useState} from "react";
import images from "../images";
import './styles/createSpaceModal.css';


const CreateSpaceModal = (props) =>{
    const [image,setImage] = useState('');
    const inputSpaceImgRef = useRef();
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [message,setMessage] = useState('');
    
    
    function handleGalleryClick(){
        inputSpaceImgRef.current.click();
    }
    function handleInputImageClick(e){
        const file = e.target.files[0]
        if(file){
            const objUrl = URL.createObjectURL(file);
            setImage(objUrl);
        }
    }
    async function callCreateSpaceApi(){
        
        await fetch('https://academics.newtonschool.co/api/v1/quora/channel/', {
            method:'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'projectID': '18t89wnvvqxy'
        },
        body: {
            "name": name,
            "description": desc ,
            "images": image,
            "title":''
        }
        }).then(res=>res.json).then(res=>{
            if(res.status==='success'){
                setMessage('Space Created Successfully');
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    function handleCreate(e){
        if(name!=''&&desc!=''){
            // callCreateSpaceApi();
            setMessage('Space Created Successfully');
            setName('');
            setDesc('');
            setImage('')
        }
    }
    
    function handleInputChange(e){
        if(e.target.id==='name'){
            setName(e.target.value);
        }else if(e.target.id==='desc'){
            setDesc(e.target.value);
        }
    }
        

    return (<>
        <div id="create-space-modal">
            <div id="create-space-modal-div">
                <div id="create-space-modal-header">
                    <img onClick={()=>{props.setCreateSpaceModal(false)}} src={images.close} style={{width:'24px'}} alt="" />
                </div>
                <div id="create-space-modal-content">
                    <div id="create-space-modal-title">Create a Space</div>
                    <div id="create-space-modal-slogan">Share your interests, curate content, host discussions, and more.</div>
                    <div id="create-space-modal-name">Name<span style={{color:'#b92b27'}}>*</span></div>
                    <div id="create-space-modal-name-desc">This can be changed in Space settings.</div>
                    <div id="create-space-modal-name-input"><input id="name" type="text" placeholder="Space's Name" value={name} onChange={handleInputChange}/></div>
                    <div id="create-space-modal-name-error"></div>
                    <div id="create-space-modal-description">Brief description<span style={{color:'#b92b27'}}>*</span></div>
                    <div id="create-space-modal-description-desc">Include a few keywords to show people what to expect if they join.</div>
                    <div id="create-space-modal-description-input"><input id="desc" type="text" placeholder="Space's Description" value={desc} onChange={handleInputChange} /></div>
                    <div id="create-space-modal-content-image">
                    {(image!='')?<img width={'100px'} src={image} alt="" />:null}
                    </div>
                    <div style={{color:'green'}}>{message}</div>
                </div>
                <div id="create-space-modal-footer">
                    <div id="create-space-modal-footer-image-btn"><img src={images.gallery} alt="" onClick={handleGalleryClick} style={{width:'24px',height:'24px'}}/><input ref={inputSpaceImgRef} onChange={handleInputImageClick} type="file" accept="image/*" style={{display:'none'}} /></div>
                    <div id="create-space-modal-footer-btn" onClick={handleCreate}>Create</div>
                </div>
            </div>
        </div>
    </>)
}


export default CreateSpaceModal;