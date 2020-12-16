import instance from "../Config/axios"

const service = "users";
export const create = (data)=>{
    return instance.post(service+"/web/registro",data)
}
export const login = (data)=>{
    return instance.post(service+"/web/login",data)
}