
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
        console.log(comment)
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
        }).then(res => res.json()).then(res => { console.log(res) }).catch(err => { console.error(err) });
    }
    useEffect(()=>{
        if(finalMainComment!==''){
            console.log('hello');
            finalMainCommentAddApi();
            props.setCommentBoxUpdated(!props.isCommentBoxUpdated);
            setFinalMainComment('');
            setComment('')
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