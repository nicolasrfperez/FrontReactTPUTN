import React,{Component} from "react";

class Menu extends Component{
  render(){
    return (
      
        <div>
            {this.props.title}
    {this.props.options.map(option=><li>{option}</li>)}
        </div>
        
      
    );
  }
  
}

export default Menu;
