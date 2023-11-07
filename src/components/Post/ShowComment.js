import React, { useEffect, useState } from "react";

import MainComment from "./MainComment";

const ShowComment = (props) =>{
    const [commentData,setCommentData] = useState([]);

    async function fetcAllComment(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${props.id}/comments`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': '18t89wnvvqxy'
            }
        }).then(res=>res.json()).then(res=>{
            // console.log(commentData)
            setCommentData(res.data);
            // console.log(res.data);
        }).catch(err=>{})
    }
    // useEffect(()=>{
    //     fetcAllComment();
    //     // console.log(1);
        
    // },[])
    // useEffect(()=>{
    //     // console.log(2);

    //     fetcAllComment()
    // },[props.isCommentOn])
    useEffect(()=>{
    

        fetcAllComment();
    },[props.isCommentBoxUpdated])



    return (<>
        <div id="show-comment">
            {commentData.map((commentEntry)=>{
                return (<MainComment id={commentEntry._id} author={commentEntry.author} children={commentEntry.children} content={commentEntry.content} createdAt={commentEntry.createdAt} isCommentBoxUpdated={props.isCommentBoxUpdated} setCommentBoxUpdated={props.setCommentBoxUpdated}/>)
            })
            }
            
        </div>
    </>)
}


export default ShowComment;