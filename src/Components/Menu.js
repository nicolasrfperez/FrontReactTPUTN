import React,{Component} from "react";


const styles={
    div:{
        backgroundColor:"red"
    }
    
}
class Menu extends Component{
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }
    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate",nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate App",prevProps,prevState)
      }
      shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps,nextState)
        return false;
      }
  render(){
    return (
      
        <div style={styles.div}>
            {this.props.children}
    {this.props.options.map(option=><li>{option}</li>)}
            <button onClick={this.props.click}>Login</button>
        </div>
        
      
    );
  }
  
}

export default Menu;
