import React, { useState } from "react";
import './styles/searchModal.css';
import { Link } from "react-router-dom";

const SearchModal =(props) =>{


    if(props.searchTerm!=''){
        return (<>
            <div id="search-modal">
                <div id="search-modla-div">
                    <Link to={`/search?author=${props.searchTerm}`}><div id="search-modal-author">Search by Author: <span>{props.searchTerm}</span></div></Link>
                    <Link to={`/search?title=${props.searchTerm}`}><div id="search-modal-title">Search by Title: <span>{props.searchTerm}</span></div></Link>
                </div>
            </div>
        </>)
    }else{
        return null;
    }
}


export default SearchModal;

