import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Posts from "../components/Post/Posts";
import '../styles/SearchPageResult.css'

const SearchPageResult = () =>{
    const [authorName,setAuthorName] = useState();
    const [titleName,setTitleName] = useState();
    
    const location = useLocation();
    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search);
        setAuthorName(searchParams.get("author"));
        setTitleName(searchParams.get("title"));
    },[location])

    
    return (<>
        <div id="search-page-result">
            <div id="search-page-result-div" className="container">
                <div id="search-page-content">
                    <div id="search-page-header">Search Result:</div>
                    <div id="search-page-posts">
                        {titleName&&<Posts postUrl={`https://academics.newtonschool.co/api/v1/quora/post?search={"title":"${titleName}"}`}/>}
                        {authorName&&<Posts postUrl={`https://academics.newtonschool.co/api/v1/quora/post?search={"title":"${authorName}"}`}/>}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SearchPageResult