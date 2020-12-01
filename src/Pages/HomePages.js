import React,{Component} from "react"
import ProductoComponents from "../Components/ProductoComponents"
class HomePages extends Component{
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
                {this.state.productos.map(producto=><ProductoComponents producto={producto} />)}
                <button onClick={this.handleClick}>Filtrar productos</button>
            </div>
        )
    }
}
export default HomePages