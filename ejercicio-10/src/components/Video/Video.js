import React from "react";
import './Video.css';

function Video (props) {
    console.log(props);
    return  <div className={props.className}>
    <video width={props.width} height={props.height} alt={props.alt} controls>
        <source src={props.src} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    </div>
}

export default Video;