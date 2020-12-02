import {environment} from "../Config"
export const getProductos = ()=>{
    return fetch(environment.endpointApi+"/productos")
    .then(res=>res.json())
}
export const getProducto = (id)=>{
    return fetch(environment.endpointApi+"/productos/"+id)
    .then(res=>res.json())
}