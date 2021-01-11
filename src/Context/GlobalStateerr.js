//import React,{Component} from "react";
import NetContext from "./NetContext";


function GlobalState(props){
   
   
    let login=localStorage.getItem("login");
    
   const  loginUser = token=>{
        (
          login=true
        ) 
        
        localStorage.setItem("login",true);
        localStorage.setItem("token",token)
        
    }

    
    const logoutUser = ()=>{
        (
           login=false
        )
        
        localStorage.removeItem("login");
        localStorage.removeItem("token")
        
    }
    
    console.log(props.children);
        return (
            
            <NetContext.Provider
                value={{
                    login,
                    loginUser,
                    logoutUser
                }}
            >
                {props.children}
                
            </NetContext.Provider>
            
        )
    }

export default GlobalState