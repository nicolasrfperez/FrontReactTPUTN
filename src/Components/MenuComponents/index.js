//import React,{Component} from "react";
import OptionComponents from "./OptionComponents"
import { Navbar,  Nav} from 'react-bootstrap';
import NetContext from '../../Context/NetContext'

function MenuComponents(props){
  
    return (
      <NetContext.Consumer>
        {
          context=>(
            
            <Navbar bg="light" expand="lg" style={{marginBottom:'10px'}}>
              <Navbar.Brand href="#home">TP FINAL UTN</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                   
                    {
                      context.login &&
                      <>
                      <OptionComponents key="home" option={{label:"Home",path:"/"}} />
                      <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                      </>
                    }
                    {
                      !context.login &&
                      <>
                      <OptionComponents key="home" option={{label:"Registro",path:"/registro"}} />
                      <OptionComponents key="home" option={{label:"Login",path:"/login"}} />
                      </>
                    }
                  </Nav>
              
              </Navbar.Collapse>
            </Navbar>
          )
        }        
        
      </NetContext.Consumer>   
        
      
    );
  }
  


export default MenuComponents;
