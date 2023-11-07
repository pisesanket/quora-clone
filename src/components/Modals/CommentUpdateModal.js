import React, { useEffect, useState } from "react";


const CommentUpdateModal=(props) =>{
        const [commentValue,setComment] = useState(props.content)
        const [finalComment,setFinalComment] = useState('');
        async function callApiForUpdate(){
            fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${props.id}`, {
                method:'PATCH',
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'projectID': '18t89wnvvqxy',
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    'content': `${finalComment}`
                })
                }).then(res=>res.json()).then(res=>{

                    
                    props.setCommentBoxUpdated(!props.isCommentBoxUpdated);
                    props.setUpdate(false);

                }).catch(err=>{
                    console.log(err);
                })
        }
        useEffect(()=>{
            
            if(finalComment){
                callApiForUpdate();
            }
        },[finalComment])
        function handleCommentChange(e){
            setComment(e.target.value)
        
        }
        function handleCancelClick(){
            props.setUpdate(false);
        }
        function handleOkClick(){
            setFinalComment(commentValue);

        }

        return (<>
        <div id="comment-update-modal">
            <input id="comment-update-input" type="text" value={commentValue} onChange={handleCommentChange}/>
            <div id="comment-update-modal-btns">
                <div id="comment-update-cancel" onClick={handleCancelClick}>Cancel</div>
                <div id="comment-update-update" onClick={handleOkClick}>Update</div>
            </div>
        </div>
        </>)
}


export default CommentUpdateModal;