import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import images from "../images";


const Input = (props) =>{
    const size = useWindowSize();
    const inputRef = useRef(null);
  
    useEffect(() => {
      function handleFocus() {
        props.setIsInputActive(true);
      }
  
      function handleBlur() {
        setTimeout(()=>{
            props.setIsInputActive(false);
        },1000)
      }
  
      const inputElement = inputRef.current;
  
      if (inputElement) {
        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);
      }
  
      return () => {
        if (inputElement) {
          inputElement.removeEventListener('focus', handleFocus);
          inputElement.removeEventListener('blur', handleBlur);
        }
      };
    }, [inputRef]);

    function changeInput(e){
        props.setSearchTerm(e.target.value);
    }

    return(
     <input ref={inputRef} value={props.searchTerm} onChange={changeInput} id='navbar-search-box'  style={{width:`${size.width/4.05}px`,height:`${size.width/41.17}px`,fontSize:`${size.width/100}px`}} type='text' placeholder={`Search Quora`}></input>
    )
}

export default Input;