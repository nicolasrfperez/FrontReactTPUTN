import React,{Component} from "react"
import Producto from "../Components/Producto"
class Home extends Component{
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
    handleClick = ()=>{
        this.setState({
            productos:[
                
               {
                   id:2,
                   name:"moto x"
               } 
            ]
        })
    }
    render(){
        return(
            <div>
                {this.state.productos.map(producto=><Producto producto={producto} />)}
                <button onClick={this.handleClick}>Filtrar productos</button>
            </div>
        )
    }
}
export default Home