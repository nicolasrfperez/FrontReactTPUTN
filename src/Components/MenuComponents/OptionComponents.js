import React from "react"
import {Link} from 'react-router-dom'
import {   Nav} from 'react-bootstrap';
const styles={
    li:{
        backgroundColor:"green"
    }
}
function OptionComponents(props){
    const {option} = props;
    return(
        
        <Nav.Link as={Link} to={option.path}>{option.label}</Nav.Link>
    )
    
}
export default OptionComponents