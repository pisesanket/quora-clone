import React, { useRef,useEffect } from "react";



const CommentDeleteModal = (props) =>{

    const commentDeleteModalRef = useRef();

    useEffect(() => {
        function checkOutsideClick(e) {
        
          if (commentDeleteModalRef.current && !commentDeleteModalRef.current.contains(e.target)) {
            props.setDelete(false);
          }
        }
        if (props.isDelete) { // Only add event listener if Comment More is open
          document.addEventListener('click', checkOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', checkOutsideClick);
        };
      }, [props.isDelete]);

      function cancelClickHandle(){
        props.setDelete(false);
      }
      function okClickHandle(){
        
      }

    return (<>
        <div id="comment-delete-modal" ref={commentDeleteModalRef}>
            <div id="comment-delete-modal-upper">
                <div id="comment-delete-modal-delete">Delete</div>
                <div id="comment-delete-modal-confirm">Are you sure you want to delete this comment?</div>
            </div>
            <div id="comment-delete-modal-lower">
                <div id="comment-delete-modal-cancel" onClick={cancelClickHandle}>Cancel</div>
                <di id='comment-delete-modal-ok' onClick={okClickHandle}>OK</di>
            </div>
        </div>
    </>)

}


export default CommentDeleteModal;