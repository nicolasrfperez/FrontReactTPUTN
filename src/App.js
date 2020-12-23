import React,{Component} from "react";
import './App.css';

import MenuComponents from './Components/MenuComponents/index'
import {BrowserRouter} from "react-router-dom"
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";

import GlobalState from "./Context/GlobalState";
class App extends Component{
  constructor(){
    super()
    //Define el state
    this.state={
      opciones:[
        {
          path:"/",
          label:"Home"
        },
        {
          path:"/login",
          label:"Login"
        },
        {
          path:"/registro",
          label:"Registro"
        }
      ],
      usuario:{
        name:"Leandro",
        rol:"web"
      }
    }
  }
  
  handleClickTitle(){
    this.setState({
      titulo:"Chau Mundo"
    })
  }
  handleClickLogin = ()=>{
    //Modifica el valor de state
    this.setState({
      opciones:[{
        path:"/",
        label:"Home"
      },
      {
        path:"/login",
        label:"Login"
      }],
    })
  }
  

  render(){

    return (
      <>
      <GlobalState>  
        <BrowserRouter>
        
          <MenuComponents options={this.state.opciones} click={this.handleClickLogin} />
          {
            this.state.usuario.rol==="admin" && <RoutesAdminComponents />
          }
          {
            this.state.usuario.rol!=="admin" && <RoutesWebComponents />
          }
          
        </BrowserRouter>
      </GlobalState>

      </>

      
    );
  }
  
}

export default App;
