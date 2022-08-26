import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FourOhFour(){


    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 1400)

    }, [])


    return(
        <h1>Oops, this isn't a valid url!</h1>
    )
}

export default FourOhFour