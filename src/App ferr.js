//import React,{Component} from "react";
import './App.css';

import MenuComponents from './Components/MenuComponents/index'
import {BrowserRouter} from "react-router-dom"
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";

import GlobalState from "./Context/GlobalState";


function App(){

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
        name:"Nico",
        rol:"web"
      }
    };
  
  
 function handleClickLogin (){
    //Modifica el valor de state
    this.props.setState({
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
  



    return (
      <>
      <GlobalState>  
        <BrowserRouter>
        
          <MenuComponents options={this.state.opciones} click={handleClickLogin} />
          {
            this.state.usuario.rol==="admin" && <RoutesAdminComponents />
          }
          {
            this.state.usuario.rol==="web" && <RoutesWebComponents />
          }
          
        </BrowserRouter>
      </GlobalState>

      </>

      
    );
  }
  


export default App;
