import React from 'react'
import { useNavigate } from 'react-router-dom'
//import bIndeed_logo from '../images/bIndeed_logo.png'



function MapView ({mapData, setSelectedSite}){
 
    let navigate = useNavigate(); 

    function handleDotClick(){
            //onClick event on each little icon, we will put that on a dot when we get the mapbox in
            //navigate to the "/detailed_site_info" page 
            //and setSelectedSite

    }

 
    return(
        <div id="map-container">
            <div id="map">

            </div>

         </div>
    )

} 
export default MapView