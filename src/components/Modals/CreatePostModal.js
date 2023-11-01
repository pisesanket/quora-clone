import React, { useRef, useState } from "react";
import images from "../images";
import './styles/createPostModal.css'

const CreatePostModal = (props) =>{
    const [image,setImage] = useState('');
    const [activeDiv, setActiveDiv] = useState(1);
    const [content, setContent] = useState('Add Content');
    const [title,setTitle] = useState('Add Title');
    const inputImgRef = useRef();
    

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
    function handleContentChange(e){
        setContent(e.target.innerHTML);
    }
    function handleTitleChange(e){
        setTitle(e.target.innerHTML);
    }
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
                    <div contentEditable={true} style={{minHeight:'100px'}} onChange={handleContentChange} dangerouslySetInnerHTML={{ __html: title }}></div>
                </div>
                <div id="create-post-modal-content-content">
                    <div contentEditable={true} style={{minHeight:'260px'}} onChange={handleContentChange} dangerouslySetInnerHTML={{ __html: content}} ></div> 
                </div>
                <div id="create-post-modal-content-image">
                    {(image!='')?<img width={'750px'} src={image} alt="" />:null}
                </div>
            </div>
            <div id="create-post-modal-footer">
                <div id="create-post-modal-footer-image-btn"><img src={images.gallery} alt="" onClick={handleGalleryClick} style={{width:'24px',height:'24px'}}/><input ref={inputImgRef} onChange={handleInputImageClick} type="file" accept="image/*" style={{display:'none'}} /></div>
                <div id="create-post-modal-footer-post-btn">Post</div>
            </div>
        </div>
    </div>)
}

export default CreatePostModal;