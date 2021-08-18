import React from 'react';
import './title.css';


const Title = () => {

    setTimeout(() =>{
        if(document.getElementsByClassName('title')[0]){
            document.getElementsByClassName('title')[0].style.opacity = "1"
        }
        
    },5500)

    return (
        <div className="title">
            <h1>mood catcher</h1>
            <h2>mood.</h2>
            <p style = {{textShadow: "2px 2px 5px #4abdff", fontSize: "24px"}}>"One small positive journal post in the morning can change your whole day"</p>
        </div>
    )
}

export default Title;