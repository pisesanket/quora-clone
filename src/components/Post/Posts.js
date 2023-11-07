
import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import images from "../images";

import '../styles/post.css'
import AddComment from "./AddComment";
import MainComment from "./MainComment";
import ShowComment from "./ShowComment";





const Posts = (props) =>{
    const [data,setData]= useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isCommentOn ,setCommentOn] = useState({'commentId':null,'isOn':false});
    const [isCommentBoxUpdated,setCommentBoxUpdated] = useState(false);
    const [commentCount,setCommentCount] = useState(0);

    function apiCallForPost(){
         fetch(props.postUrl,{
            method:'GET',
            headers:{
                'projectID': '18t89wnvvqxy'
            }
        }).then(res=>res.json()).then((res)=>{
            
            setTimeout(() => {
                setData(res.data);
                setLoading(false);
            },3000);
        }).catch(err=>{console.log(err)});
    }

    useEffect(()=>{
        apiCallForPost();
        
    },[])

    if(isLoading){
        return <h1>...Loading</h1>
    }
    if(!data){
        
        return <h2>NO result found</h2>
    }
   
    return(<div id="postContainer">
        {
            data.map(postEntry=>{
               
                
                return (<><div key={postEntry._id} id="postDiv">
                    <PostHeader  channelId={(postEntry.channel._id)?postEntry.channel._id:postEntry.channel} authorId={postEntry.author._id?postEntry.author._id:postEntry.author} channelImage={postEntry.channel.image?postEntry.channel.image:props.channelImage} channelName={postEntry.channel.name?postEntry.channel.name:props.channelName} authorImage={postEntry.author.profileImage} authorName={postEntry.author.name} />
                    <PostInfo postTitle={postEntry.title} postDesc={postEntry.content} />
                    <PostImage postImage={(postEntry.images)?postEntry.images[0]:''}/>
                    <PostFooter isCommentOn={isCommentOn} setCommentOn={setCommentOn} upvoteCount={postEntry.likeCount} commentCount={postEntry.commentCount} id={postEntry._id} />
                </div>
                {isCommentOn.isOn&&(isCommentOn.commentId==postEntry._id)&&(<div>
                    <AddComment id={postEntry._id} isCommentOn={isCommentOn} isCommentBoxUpdated={isCommentBoxUpdated} setCommentBoxUpdated={setCommentBoxUpdated} setCommentOn={setCommentOn}/>
                    <div id="post-comments">
                        <ShowComment isCommentOn={isCommentOn} id={postEntry._id} isCommentBoxUpdated={isCommentBoxUpdated} setCommentBoxUpdated={setCommentBoxUpdated} />
                    </div>
                </div>)}
                </>)
            })
        }
    </div>)


}

export default Posts;