import React from "react"
import {Link} from 'react-router-dom'

const styles={
    li:{
        backgroundColor:"green"
    }
}
function OptionComponents(props){
    const {option} = props;
    return(
        <Link to={option.path}><li style={styles.li}>{option.label}</li></Link>
    )
    
}
export default OptionComponents