import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLogged] = useState(false);
    
    useEffect(()=>{
        
        const storedValue = localStorage.getItem('isLoggedIn');
        if (storedValue !== null) {

            setIsLogged(JSON.parse(storedValue));
            localStorage.setItem('isLoggedIn',storedValue);
            
        }else{
            localStorage.setItem('isLoggedIn',false)
        
        }
    },[])

    return <AuthContext.Provider value={{isLoggedIn,setIsLogged}}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;
