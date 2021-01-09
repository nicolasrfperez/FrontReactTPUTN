import React,{Component} from "react";
import NetContext from "./NetContext";

class GlobalState extends Component{
    state={
        login:localStorage.getItem("login")
    }
    loginUser = token=>{
        this.setState({
            login:true
        })
        localStorage.setItem("login",true);
        localStorage.setItem("token",token)
    }
    logoutUser = ()=>{
        this.setState({
            login:false
        })
        localStorage.removeItem("login")
        localStorage.removeItem("token")
    }
    render(){
        return(
            <NetContext.Provider
                value={{
                    login:this.state.login,
                    loginUser:this.loginUser,
                    logoutUser:this.logoutUser
                }}
            >
                {this.props.children}
            </NetContext.Provider>
        )
    }
}
export default GlobalState