import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
function RoutesAdminComponents(){
    return(
        <>
        <Route path="/" exact component={HomePages}/>
        <Route path="/login" exact component={LoginPages}/>
        </>
    )
}
export default RoutesAdminComponents;
