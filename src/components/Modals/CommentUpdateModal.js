import React, { useState } from "react";


const CommentUpdateModal=(props) =>{
        const [commentValue,setComment] = useState(props.content)

        function handleCommentChange(e){
            setComment(e.target.value)
        }
        function handleCancelClick(){
            props.setUpdate(false);
        }
        function handleOkClick(){

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