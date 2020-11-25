import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Header from './Components/Header'
import Menu from './Components/Menu'

class App extends Component{
  constructor(){
    super()
    //Define el state
    this.state={
      opciones:["Inicio","Login","Registro"],
      titulo:"Hola Mundo"
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
      opciones:["Inicio","Salir"],
    })
  }
  /*handleClickLogin(){

  }*/
  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate App",nextProps,nextState)
}

  render(){

    return (
      <div className="App">
        {this.state.titulo}
        <Home />
        <Menu options={this.state.opciones} click={this.handleClickLogin}>
          <div>
            <h1>{this.state.titulo}</h1>
          </div>
        </Menu>
        <button onClick={this.handleClickTitle.bind(this)}>Cambiar Title</button>
        
      </div>
      
    );
  }
  
}

export default App;
