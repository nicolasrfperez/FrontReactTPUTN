import React,{useState,useEffect} from "react"
import ProductoComponents from "../Components/ProductoComponents"
import {getProductos} from "../Services/ProductosServices";
import {Container,Spinner} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
function HomePages(){
    
    const [productos,setProductos] = useState([]);
    const [buscar,setBuscar] = useState("");
    const [loading,setLoading] = useState(true);
    useEffect(
        () => {

            async function fetchData() {
                setLoading(true);
                const response = await getProductos(buscar)
                console.log("Data",response)
                setProductos(response.data.docs);
                setLoading(false);
            }
            fetchData();
        }, [buscar]);  
    const handleChange = (e)=>{
        setBuscar(e.target.value)
    }
     
    return(
        <>
        <Container>
            <FormGroup label="Buscar" type="text" placeholder="Buscar" name="buscar" value={buscar} change={handleChange}/>
            {
                loading && 
                <div style={{position:"fixed",top:"50%",left:"50%"}}>
                        <Spinner  animation="grow" />
                        <Spinner  animation="grow" />
                        <Spinner  animation="grow" />
                </div>
            }
            {
                !loading && 
                <>
                
                    {productos.map(producto=><ProductoComponents key={producto.id} producto={producto} verDetalle={true} />)}
                </>
            }
        </Container>
        </>
    )    
}
export default HomePages