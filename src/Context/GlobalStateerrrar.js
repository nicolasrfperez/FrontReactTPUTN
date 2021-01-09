//import React,{Component} from "react";
import NetContext from "./NetContext";

function GlobalState(props){
   const  state={
        login:localStorage.getItem("login")
    }
   const  loginUser = token=>{
      function  setState(
          login=true
        ) 
        {
        localStorage.setItem("login",true);
        localStorage.setItem("token",token)
        {
    }
    const logoutUser = ()=>{
      function  setState(
            login=false
        )
        {
        localStorage.removeItem("login")
        localStorage.removeItem("token")
        }
    }
    
    
        return(
            <NetContext.Provider
                value={{
                    login:login,
                    loginUser:loginUser,
                    logoutUser:logoutUser
                }}
            >
                {props.children}
            </NetContext.Provider>
        )
            
            export default GlobalState
