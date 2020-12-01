import React,{Component} from "react"
import {Link} from 'react-router-dom'
class ProductoComponents extends Component{
    
    render(){
        return(
            <div>
                {this.props.producto.id}
                {this.props.producto.name}
                <Link to={"/productos/"+this.props.producto.id}><button>Ver Detalle</button></Link>
            </div>
        )
    }
}
export default ProductoComponents