import React, { useState ,useEffect, useRef} from "react";
import images from "../images";
import CommentMoreModal from "../Modals/CommentMoreModal";
import { Link } from "react-router-dom";



const SubComment = (props) =>{
    const subCommentRef = useRef();
    const [childAuthor, setChildAuthor] = useState({});
    const [isCommentMore,setIsComment] = useState(false);
    async function getChildUserDatail(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${props.author}`, {
         headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'projectID': '18t89wnvvqxy'
         }
         }).then(res=>res.json()).then(res=>{
            setChildAuthor(res.data);
             
         }).catch(err=>{})
     }


 
     useEffect(()=>{
         // console.log(props.children)
         getChildUserDatail()
        //  console.log(childAuthor)
     },[])

     function handleSubMoreClick(e){
        e.stopPropagation();
        setIsComment(!isCommentMore);
     }
     useEffect(() => {
        function checkOutsideClick(e) {
        
          if (subCommentRef.current && !subCommentRef.current.contains(e.target)) {
            setIsComment(false);
          }
        }
        if (isCommentMore) { // Only add event listener if Comment More is open
          document.addEventListener('click', checkOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', checkOutsideClick);
        };
      }, [isCommentMore]);

    return (<>
      <div id="sub-comment">
            <div id="sub-comment-img"><Link to={`/profile/${childAuthor._id}`}><img style={{cursor:'pointer'}} src={childAuthor.profileImage} alt="" /></Link></div>
            <div id="sub-comment-right">
                <div id="sub-comment-header"><Link to={`/profile/${childAuthor._id}`}><div id="sub-comment-header-name" style={{cursor:'pointer'}}>{childAuthor.name}</div></Link><div id="sub-comment-header-time"></div>{(props.author==localStorage.getItem('userId'))&&<div id="sub-comment-header-more" onClick={handleSubMoreClick}><img src={images.more} alt="" /></div>}</div>
                <div id="sub-comment-content">{props.content}</div>
                <div id="sub-comment-reply-div"></div>
            </div>
            {isCommentMore&&(<div id="comment-more-modal-div" ref={subCommentRef}>
                <CommentMoreModal />
            </div>)
            }
        </div>
    </>)
}


export default SubComment;