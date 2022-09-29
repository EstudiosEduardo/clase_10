import React from "react";
import './Audio.css';

 function Audio (props) {
    return <audio  className={props.className}controls>
        <source src={props.src} type="audio/mpeg"/>
        Your browser does not support the audio element.
    </audio>
}
export default Audio;