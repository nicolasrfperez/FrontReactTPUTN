//import React,{Component} from "react";
import { useState } from "react";
import NetContext from "./NetContext";




function GlobalState(props){
  login =  localStorage.getItem("login")

    const [loginState, setLogin] = useState({
     
    loginState:[
    
           loginUser = token=>{

        setLogin({
            login:true
        })
        localStorage.setItem("login",true);
        localStorage.setItem("token",token)
    

     logoutUser = ()=>{
        setLogin({
            login:false
        })
        localStorage.removeItem("login");
        localStorage.removeItem("token")
       
    
    ],
    
    })
  
        return(
            <NetContext.Provider
                setLogin={{
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