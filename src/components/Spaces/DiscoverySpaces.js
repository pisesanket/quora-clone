import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";


const DiscoverySpaces = () =>{

    const [spaces,setSpaces] = useState([]);

    async function getSpacesApiCall(){

        await fetch('https://academics.newtonschool.co/api/v1/quora/channel/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': '18t89wnvvqxy'
            }
          
        }).then(res=>res.json()).then(res=>{
            setSpaces(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getSpacesApiCall();
    },[])
    return (<>
        {
            spaces.map((spaceEntry)=>{
                return (<SpaceCard channelId={spaceEntry._id} name={spaceEntry.name} description={spaceEntry.description} image={spaceEntry.image} />)
            })
        }
        
    </>)
}


export default DiscoverySpaces