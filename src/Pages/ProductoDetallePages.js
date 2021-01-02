import React,{useState,useEffect} from "react"
import ProductoComponents from "../Components/ProductoComponents"
import {getProducto} from "../Services/ProductosServices";
function ProductoDetallePages(props){
    const [producto,setProducto] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(
        () => {
            async function fetchData() {
                const response = await getProducto(props)
                console.log(response);
                setProducto(response.data);
                setLoading(false);
            }
            fetchData();
        },);  
    return(
        <>
        {
            loading && <div>Loading ...</div>
        }
        {
            !loading && 
            <div>
                <ProductoComponents key={producto.id} producto={producto} verDetalle={false} />
            </div>
        }
        
        </>
    )
    
}
export default ProductoDetallePages