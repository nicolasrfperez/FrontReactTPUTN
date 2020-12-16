import React,{Component} from "react";
import OptionComponents from "./OptionComponents"
import { Navbar,  Nav} from 'react-bootstrap';
const styles={
    div:{
        backgroundColor:"red"
    }
    
}
class MenuComponents extends Component{
  render(){
    return (
      <Navbar bg="light" expand="lg" style={{marginBottom:'10px'}}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {this.props.options.map(option=><OptionComponents key={option.label} option={option} />)}
            </Nav>
        
        </Navbar.Collapse>
      </Navbar>
        
        
      
    );
  }
  
}

export default MenuComponents;
