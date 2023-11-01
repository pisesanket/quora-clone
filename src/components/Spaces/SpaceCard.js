import React from "react";
import images from "../images";
import { Link } from "react-router-dom";


const SpaceCard = (props) =>{


    return (<>
        <div id="space-card">
            <div id="space-card-upper"></div>
            <div style={{height:'41px',display:'flex',justifyContent:'center',marginTop:'-20px'}} id="space-card-middle">
                <div><Link to={`/channel/${props.channelId}`} ><img width={'40px'} src={props.image} alt="" /></Link></div>
            </div>
            <div id="space-card-footer">
                
                <Link to={`/channel/${props.channelId}`} ><div id="space-card-footer-title">{props.name}</div></Link>

              
                <div id="space-card-footer-desc">{props.description}</div>

            </div>
        </div>
    </>)
}


export default SpaceCard;