import React, { useEffect, useState } from "react";
import images from "../images";
import AddComment from "./AddComment";



const PostFooter = ({isCommentOn,setCommentOn,upvoteCount,commentCount,id}) =>{
    const [likeCount,setLikeCount] = useState(upvoteCount);
    const [isLiked,setIsLiked] = useState(false);
    const [upVoteIcon,setUpVoteIcon] = useState(images.upArrow);
    const [downVoteIcon,setDownIcon] = useState(images.downArrow);
    const [isUnliked, setIsUnliked] = useState(false);

    async function callApiForUpVote(){
      
        await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${id}`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': '18t89wnvvqxy'
            }
        }).then(res=>res.json).then(res=>{
    
        }).catch(err=>{});
    }
    async function callApiForDownVote(){
      
        await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${id}`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': '18t89wnvvqxy'
            }
        }).then(res=>res.json).then(res=>{
            console.log(res)
        }).catch(err=>{});
    }

    useEffect(()=>{
        if(isLiked===true&&isUnliked===false){
            callApiForUpVote();
        }else if(isLiked===false&&isUnliked===true){
            callApiForDownVote();
        }
    },[isLiked,isUnliked])

 

    function upVoteClick(){
        if(isLiked){
            setLikeCount(likeCount-1);
            setIsLiked(false);
            setUpVoteIcon(images.upArrow);
            
        }else{
            setIsLiked(true);
            setLikeCount(likeCount+1)
            setUpVoteIcon(images.upArrowActive)
            setDownIcon(images.downArrow);
            setIsUnliked(false);

        }
    }
    function downVoteClick(){
        if(isLiked){
            setIsLiked(false);
            setLikeCount(likeCount-1);
            setUpVoteIcon(images.upArrow);
            setDownIcon(images.downArrowActive);
            setIsUnliked(true);
        }else if(!isUnliked){
            setIsLiked(false);
            // setLikeCount(likeCount-1);
            setUpVoteIcon(images.upArrow);
            setDownIcon(images.downArrowActive);
            setIsUnliked(true);
        }
        else{
            setDownIcon(images.downArrow);
            setIsUnliked(false);
        }
    }
    function handleCommentClick(){
     
        setCommentOn({...isCommentOn,'commentId':id,'isOn':!isCommentOn.isOn})
    }
    return (<><div id="postFooter">
        <div id="post-footer-upVote-downVote" ><div id="post-footer-upVote" onClick={upVoteClick}><span id='post-footer-upVote-imgSpan'><img src={upVoteIcon} alt="" /></span><span id="post-footer-upVote-text">{`Upvote ${likeCount?likeCount:''}`}</span></div><div id="post-footer-downVote" onClick={downVoteClick}><img src={downVoteIcon} alt="" /></div></div>
        <div id="post-footer-comment" onClick={handleCommentClick}><div><span><img src={images.comment} alt="" /></span><span>{commentCount}</span></div></div>
        <div id="post-footer-share"><div><span><img src={images.share} alt="" /></span><span>{3}</span></div></div>
    </div>
    <div>
    </div>
    </>)
}


export default PostFooter;