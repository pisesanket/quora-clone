import React, { useState } from "react";
import './styles/commentMoreModal.css';
import { useWindowSize } from "@uidotdev/usehooks";
import CommentDeleteModal from "./CommentDeleteModal";

const CommentMoreModal =(props) =>{
    const size = useWindowSize();
    const [isDelete,setDelete] = useState(false);


    function handleUpdateClick(e){
        e.stopPropagation();
        props.setUpdate(true);
        props.setMoreOpen(false);
    }

    function handleDeleteClick(e){
        e.stopPropagation();
        setDelete(true);
        // props.setMoreOpen(false);
    }

    return (<>
        <div id="comment-more-modal">
            <div onClick={handleUpdateClick}  id="comment-more-modal-update">Update</div>
            <div onClick={handleDeleteClick} id="comment-more-modal-delete">Delete</div>
        </div>
        {(isDelete)&&<div id="comment-more-modal-update-delete">
            {isDelete&&<CommentDeleteModal id={props.id} setMoreOpen={props.setMoreOpen} isCommentBoxUpdated={props.isCommentBoxUpdated} setCommentBoxUpdated={props.setCommentBoxUpdated} isDelete={isDelete} setDelete={setDelete}/>}
        </div>
        }
        
    </>)
}


export default CommentMoreModal;