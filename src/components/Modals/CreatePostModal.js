import React, { useEffect, useRef, useState } from "react";
import images from "../images";
import './styles/createPostModal.css'

const CreatePostModal = (props) =>{
    const [image,setImage] = useState('');
    const [activeDiv, setActiveDiv] = useState(1);
    const [content, setContent] = useState('');
    const [title,setTitle] = useState('');
    const inputImgRef = useRef();
    const [finalValue,setFinalValue] = useState({})
    const [message,setMessage] = useState('');
    // const contentEditableRef = useRef();
    

    function handleGalleryClick(){
        inputImgRef.current.click();
    }
    function handleInputImageClick(e){
        const file = e.target.files[0]
        if(file){
            const objUrl = URL.createObjectURL(file);
            setImage(objUrl);
        }
        
        
    }
    function handleCloseClick(){
        props.setCreatePostModal(false);
    }
    function handleTabClick(divNumber){
        setActiveDiv(divNumber);
    }
    // function handleOnblurConent(){
    //     if (content === ''){
    //         setContent('')
    //     }
    // }
    const contentEditableRef = useRef();

    function handleContentChange(e){
    
        setContent(e.target.value);
     
        
    }
    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handlePostClick(){
        setFinalValue({'title':title,'content':content,'image':image});
        
    }
    async function callCratePostApi(){
        fetch('https://academics.newtonschool.co/api/v1/quora/post/', { 
        method:"POST",  
        headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'projectID': '18t89wnvvqxy',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            'title': `${finalValue.title}`,
            'content': `${finalValue.content}`,
            'images': `${finalValue.image}`,
        })
        }).then(res=>res.json()).then(res=>{
            if(res.status=='success'){
                setTitle('')
                setContent('');
                setImage('');
                setMessage('Post created successfully!');
                alert('Post Created successfully')
                props.setCreatePostModal(false)
            }else{
                setMessage(res.message);
                alert('something went very wrong please try after some time')
                props.setCreatePostModal(false)

            }
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        
        if((finalValue.title!=''&&finalValue.content!='')&&(finalValue.title!=undefined&&finalValue.content!=undefined)){
            callCratePostApi();
        }
    },[finalValue])

    return (<div id="create-post-modal">
        <div id="create-post-modal-div">
            <div id="create-post-modal-header">
                <div id="create-post-modal-close">
                    <img onClick={handleCloseClick} style={{width:'24px',height:'24px'}} src={images.close} alt="" />
                </div>
                <div id="create-post-modal-tab">
                    <div id="create-post-modal-add-question" className={`${activeDiv === 1 ? 'active-tab-div' : ''}`} onClick={() => handleTabClick(1)}>Add Question</div>
                    <div id="create-post-modal-create-post" className={`${activeDiv === 2 ? 'active-tab-div' : ''}`} onClick={() => handleTabClick(2)}>Create Post</div>
                </div>
            </div>
            <div id="create-post-modal-content">
                <div id="create-post-modal-content-title">
                    <textarea  style={{minHeight:'100px',width:'100%'}} value={title} onInput={handleTitleChange} placeholder="Add Title..."></textarea>
                </div>
                <div id="create-post-modal-content-content">
                    <textarea   style={{minHeight:'260px',width:'100%'}} value={content}  onInput={handleContentChange} placeholder="Add Content..."></textarea> 
                </div>
                <div id="create-post-modal-content-image">
                    {(image!='')?<img width={'750px'} src={image} alt="" />:null}
                </div>
                <div style={(message=='Post created successfully!')?{color:'green'}:{color:'red'}}>
                    {message}
                </div>
            </div>
            <div id="create-post-modal-footer">
                <div id="create-post-modal-footer-image-btn"><img src={images.gallery} alt="" onClick={handleGalleryClick} style={{width:'24px',height:'24px'}}/><input ref={inputImgRef} onChange={handleInputImageClick} type="file" accept="image/*" style={{display:'none'}} /></div>
                <div id="create-post-modal-footer-post-btn" onClick={handlePostClick}>Post</div>
            </div>
        </div>
    </div>)
}

export default CreatePostModal;