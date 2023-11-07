import React, { useEffect, useRef } from "react";

const SmallSearchBox = (props) =>{
    const inputSmallRef = useRef(null);
    const smallSearchRef = useRef();
    useEffect(()=>{
        function checkOutsideSearchClick(e){
            
            if(smallSearchRef.current&&!smallSearchRef.current.contains(e.target)){
                props.setSmallSearch(!props.isSmallSearch);
            }
       
        }

        if(props.isSmallSearch){

            document.addEventListener('click',checkOutsideSearchClick);
        }

        return ()=>{
            document.removeEventListener('click',checkOutsideSearchClick);
        }
    },[props.isSmallSearch])
  
    useEffect(() => {
      function handleFocus() {
        props.setIsInputActive(true);
      }
  
      function handleBlur() {
        setTimeout(() => {
            props.setIsInputActive(false);
            
        }, 2000);
      }
  
      const inputElement = inputSmallRef.current;
  
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
    }, [inputSmallRef]);

    function changeInput(e){
        props.setSearchTerm(e.target.value);
    }
    return (<>
         <div id='nav-small-search-home-add' ref={smallSearchRef} style={{height:'44px'}}><input ref={inputSmallRef} value={props.searchTerm} onChange={changeInput} placeholder='search title here' id='smallSearchBox' type="text" /></div>
    </>)
}

export default SmallSearchBox