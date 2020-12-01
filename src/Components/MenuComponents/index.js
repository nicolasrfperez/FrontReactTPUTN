import React,{Component} from "react";
import OptionComponents from "./OptionComponents"

const styles={
    div:{
        backgroundColor:"red"
    }
    
}
class MenuComponents extends Component{
  render(){
    return (
      
        <div style={styles.div}>
            {this.props.options.map(option=><OptionComponents option={option} />)}
            <button onClick={this.props.click}>Login</button>
        </div>
        
      
    );
  }
  
}

export default MenuComponents;
