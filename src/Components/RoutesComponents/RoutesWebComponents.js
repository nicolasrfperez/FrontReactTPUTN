import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
import RegistroPages from '../../Pages/RegistroPages'
import ProductoDetallePages from '../../Pages/ProductoDetallePages'
function RoutesWebComponents(){
    return(
        <>
        <Route path="/" exact component={HomePages}/>
        <Route path="/login" exact component={LoginPages}/>
        <Route path="/registro" exact component={RegistroPages}/>
        <Route path="/productos/:id" exact component={ProductoDetallePages}/>
        </>
    )
}
export default RoutesWebComponents;
