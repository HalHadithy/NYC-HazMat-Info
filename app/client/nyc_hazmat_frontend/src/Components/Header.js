import React from 'react'
import { useNavigate } from 'react-router-dom'
//import bIndeed_logo from '../images/bIndeed_logo.png'



function Header (){
 
    let navigate = useNavigate(); 

    function handleHomeClick(){
        navigate('/');
        console.log("you clicked home!")
    }

 
    return(
        <div > 
            <h2 id="header" onClick={handleHomeClick}>
                Header
            </h2>

         </div>
    )

} 
export default Header