import React from "react"
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
function ProductoComponents({producto,verDetalle}) {
    
    
    return(
        <Card style={{ width: '18rem',marginTop:"10px" }}>
            <Card.Img variant="top" src={producto.image_path} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                {producto.price_currency}
                </Card.Text>
                {
                    verDetalle &&
                    <Link to={"/productos/"+producto.id}><Button variant="primary">Ver Detalle</Button></Link>
                }
                
            </Card.Body>
        </Card>
    )
    
}
export default ProductoComponents