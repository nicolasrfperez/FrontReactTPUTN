import React,{Component} from "react"

class Producto extends Component{
    
    render(){
        return(
            <div>
                {this.props.producto.id}
                {this.props.producto.name}
            </div>
        )
    }
}
export default Producto