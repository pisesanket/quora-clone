import React, { useRef,useEffect, useState } from "react";



const CommentDeleteModal = (props) =>{
    const [finalDelete,setFinalDelete] = useState(false);
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
        setFinalDelete(true);
      }
      async function callDeleteApi(){
        fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${props.id}`, {
          method:'DELETE',
          headers:{
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'projectID': '18t89wnvvqxy',    
          }
          
          }).then(()=>{
            
              props.setDelete(false)
              props.setMoreOpen(false);
              props.setCommentBoxUpdated(!props.isCommentBoxUpdated);
              // props.setUpdate(false);

          }).catch(err=>{
              console.log(err);
          })
      }


      useEffect(()=>{
        if(finalDelete){
          callDeleteApi();
        }
      },[finalDelete])

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