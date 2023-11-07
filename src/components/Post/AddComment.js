
import React, { useEffect, useState } from "react";
import images from "../images";

const AddComment =(props) =>{
    const [comment,setComment] = useState('');
    const [finalMainComment,setFinalMainComment] = useState('');
    function changeCommentHandle(e){
        setComment(e.target.value);
    }
    function handleAddCommentBtn(e){
        setFinalMainComment(comment);
    }
    async function finalMainCommentAddApi(){
        
        await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${props.id}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'projectID': '18t89wnvvqxy'
            }, 
            body: JSON.stringify({
                'content': `${finalMainComment}`,
            })
        }).then(res => res.json()).then(res => {
            props.setCommentBoxUpdated(!props.isCommentBoxUpdated);
         }).catch(err => { console.error(err) });
    }
    useEffect(()=>{
        if(finalMainComment!==''){
            finalMainCommentAddApi();
            // props.setCommentOn({...props.isCommentOn,'isOn':false});

            
            setFinalMainComment('');
            setComment('')
            // props.setCommentOn({...props.isCommentOn,'isOn':true});
        }
    },[finalMainComment])

    return(<>
        <div id="add-comment-box">
            <img src={images.homeActive} alt="" />
            <input onChange={changeCommentHandle} value={comment} type="text" placeholder="Add a comment..."/>
            <button onClick={handleAddCommentBtn}>Add Comment</button>
        </div>
    </>)

}


export default AddComment;