import React,{Component} from "react"
class LoginPages extends Component{
    constructor(){
        super()
        this.state={
            productos:[
                {
                    id:1,
                    name:"moto g"
                },
               {
                   id:2,
                   name:"moto x"
               } 
            ]
        }
    }
    render(){
        return(
            <div>
                Login
            </div>
        )
    }
}
export default LoginPages