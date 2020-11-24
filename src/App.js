import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Header from './Components/Header'
import Menu from './Components/Menu'

class App extends Component{
  render(){
    const opciones = ["Inicio","Login","Registro"]
    return (
      <div className="App">
        <Home />
        <Menu options={opciones} title="Hola Mundo"/>
        
      </div>
      
    );
  }
  
}

export default App;
