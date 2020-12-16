import React,{useState} from "react"
import {Form,Button,Container} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {login} from "../Services/UsuariosServices"
import AlertCustom from "../Components/AlertCustom"
function LoginPages(){
    const [form,setForm] = useState({email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
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
                localStorage.setItem("token",data.data.token)
                setAlert({variant:"success",text:"Bienvenido/a"})
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
                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                
                <ButtonWithLoading text="Ingresar" loading={loading}/>
            </Form>
            <AlertCustom variant={alert.variant} text={alert.text} />
        </Container>
    )
    
}
export default LoginPages

