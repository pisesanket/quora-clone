import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelPageHeader from "../components/ChannelPage/ChannelPageHeader";
import ChannelPageContent from "../components/ChannelPage/ChannelPageContent";
import '../styles/channelPage.css';

const ChannelPage = () =>{
    const param = useParams();
    const [channelDetail,setChannelDetail] = useState({});
    async function channelApiCall(){
        await fetch(`https://academics.newtonschool.co/api/v1/quora/channel/${param.channelId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'projectID': '18t89wnvvqxy'
        }
        }).then(res=>res.json()).then(res=>{
            setChannelDetail(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        channelApiCall();
    },[])
    
    return <>
        <div id="channel-page">
            <div id="channel-page-top">
                <ChannelPageHeader channelId={channelDetail._id} channelName = {channelDetail.name} channelDesc = {channelDetail.description} channelImage={channelDetail.image} />
            </div>
      
            <div id="channel-page-bottom" className="container">
                <ChannelPageContent channelName = {channelDetail.name}  channelImage={channelDetail.image}  channelId={param.channelId} />
            </div>
        </div>
    </>
}

export default ChannelPage;