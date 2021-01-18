import React,{useContext, useState} from "react"
import {Form,Container} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {login} from "../Services/UsuariosServices"
import AlertCustom from "../Components/AlertCustom"
import NetContext from "../Context/NetContext"

function LoginPages(){
    const context = useContext(NetContext);
    const [form,setForm] = useState({email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
    const history = useHistory();
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        setLoading(true)
        console.log(form);
        login(form)
        .then(data=>{
            console.log("Data",data)
            if(data.data.token){
                context.loginUser(data.data.token)
                setAlert({variant:"success",text:"Bienvenido/a"})
                history.push("/")
            }else{
                setAlert({variant:"danger",text:"Ha ocurrido un error"})
            }
            setLoading(false)
        },
        error=>{
            console.log("error",error)
            setLoading(false)
        })
        e.preventDefault()
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                
                <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
               
                <div className="col-6 col-m-3 col-lg-4">


                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
               </div> 
                <ButtonWithLoading text="Ingresar" loading={loading}/>
            </Form>
            <AlertCustom variant={alert.variant} text={alert.text} />
        </Container>
    )
    
}
export default LoginPages

