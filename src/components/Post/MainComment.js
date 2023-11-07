import React, { useEffect, useRef, useState } from "react";
import images from "../images";
import SubComment from "./SubComment";
import CommentMoreModal from "../Modals/CommentMoreModal";
import CommentUpdateModal from "../Modals/CommentUpdateModal";
import { Link } from "react-router-dom";

const MainComment = (props) =>{
    const [author,setAuthor] = useState({});
    const [currentDate,setDate] = useState(new Date());
    const pastDate = new Date(props.createdAt);
    const [timeDifference,setTimeDiff] = useState(currentDate-pastDate);
    const [isCommentMoreOption,setCommentMore] = useState(false);
    const [isMoreOpen,setMoreOpen] = useState(false);
    const [isUpdateOpen,setUpdate] = useState(false);

    const commentMoreRef = useRef();

    async function getUserDatail(){
       await fetch(`https://academics.newtonschool.co/api/v1/quora/user/${props.author}`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
       'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            setAuthor(res.data);
        
        }).catch(err=>{})
    }

    useEffect(()=>{
        // console.log(props.children)
        getUserDatail()
    },[])

    function handleCommentMoreClick(e){
        e.stopPropagation();

        setMoreOpen(!isMoreOpen)
    }
    useEffect(() => {
        function checkOutsideClick(e) {
        
          if (commentMoreRef.current && !commentMoreRef.current.contains(e.target)) {
            setMoreOpen(false);
          }
        }
        if (isMoreOpen) { // Only add event listener if Comment More is open
          document.addEventListener('click', checkOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', checkOutsideClick);
        };
      }, [isMoreOpen]);


    function calculateTime(){
        if(Math.floor(timeDifference / 1000)>60){
            if((Math.floor(timeDifference / 1000)/60)>60){
                if(((Math.floor(timeDifference / 1000)/60)/60)>60){
                    return `${((Math.floor(timeDifference / 1000)/60)/60)/24}D`;
                }else{
                    return `${((Math.floor(timeDifference / 1000)/60)/60)}H`;
                }
            }else{
                return `${(Math.floor(timeDifference / 1000)/60)}M`;
            }
        }else{
            return `${Math.floor(timeDifference / 1000)}S`;
        }
    }

    function handleAuthorClick(){

    }

    return (<>
        <div id="main-comment" >
            <div id="main-comment-img"><Link to={`/profile/${props.author}`} ><img style={{cursor:'pointer'}} onClick={handleAuthorClick} src={author.profileImage} alt="" /></Link></div>
            <div id="main-comment-right">
                <div id="main-comment-header"><Link to={`/profile/${props.author}`} ><div id="main-comment-header-name" style={{cursor:'pointer'}} onClick={handleAuthorClick}>{author.name}</div></Link><div id="main-comment-header-time"></div>{(props.author==localStorage.getItem('userId'))&&<div className="main-comment-header-more" onClick={handleCommentMoreClick}><img src={images.more} alt="" /></div>}</div>
                {isUpdateOpen?<CommentUpdateModal id={props.id} content={props.content} isCommentBoxUpdated={props.isCommentBoxUpdated} setCommentBoxUpdated={props.setCommentBoxUpdated} setUpdate={setUpdate} />:<div id="main-comment-content">{props.content}</div>}
                <div id="main-comment-reply-div">{props.children.map((childrenEntry)=>{
                    return <SubComment id={childrenEntry._id} author={childrenEntry.author} content={childrenEntry.content}/>
                })}</div>
            </div>
            {isMoreOpen&&(<div id="comment-more-modal-div" ref={commentMoreRef}>
                <CommentMoreModal id={props.id} author={props.author} isCommentBoxUpdated={props.isCommentBoxUpdated} setCommentBoxUpdated={props.setCommentBoxUpdated} setMoreOpen={setMoreOpen} isUpdateOpen={isUpdateOpen} setUpdate={setUpdate}/>
            </div>)}
        </div>
    </>)
}


export default MainComment;