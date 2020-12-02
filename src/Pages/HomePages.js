import React,{useState,useEffect} from "react"
import ProductoComponents from "../Components/ProductoComponents"
import {getProductos} from "../Services/ProductosServices";
function HomePages(){
    
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(
        () => {
            async function fetchData() {
                const data = await getProductos()
                setProductos(data.docs);
                setLoading(false);
            }
            fetchData();
        }, []);  
     
    return(
        <>
        {
            loading && <div>Loading ...</div>
        }
        {
            !loading && 
            <div>
                {productos.map(producto=><ProductoComponents key={producto.id} producto={producto} verDetalle={true} />)}
            </div>
        }
        
        </>
    )    
}
export default HomePages