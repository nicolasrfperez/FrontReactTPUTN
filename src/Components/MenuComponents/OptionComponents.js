import React from "react"
import {Link} from 'react-router-dom'
function OptionComponents(props){
    const {option} = props;
    return(
        <Link to={option.path}><li>{option.label}</li></Link>
    )
    
}
export default OptionComponents