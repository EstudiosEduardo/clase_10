import React from "react";
import './Imagen.css';

function Imagen (props) {
    return <img src={props.src} className={props.className} alt={props.alt}/>
}

export default Imagen;
