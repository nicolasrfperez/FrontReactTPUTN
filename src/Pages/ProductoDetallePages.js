import React from "react"
function ProductoDetallePages(props){
    
    return(
        <div>
            ProductoDetallePages
            {props.match.params.id}
        </div>
    )
    
}
export default ProductoDetallePages