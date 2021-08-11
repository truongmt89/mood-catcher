import React from 'react';
import './moods.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinBeam, faSmile, faGrinStars, faFrown, faGrimace, faTired, faAngry } from '@fortawesome/free-solid-svg-icons'

const Moods = (props) => {
    function setColor(color){
        // console.log(event);
        // props.colorAction(event.target.style.backgroundColor)
        let selected = document.getElementsByClassName("selected")
        console.log(selected[0])
        if(selected.length){
            selected[0].style.backgroundColor = color
        }
        
    }
    

    return(
        <div>        
        <div className="hello">
        <h4>Hello there,
            how are you feeling today?
        </h4>
        </div>
            <div  id = 'moods'>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#7B9BE5")}>
                <FontAwesomeIcon icon={faGrinBeam} className="fa-grin-beam" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#FCF771")}>
                <FontAwesomeIcon icon={faSmile} className="fa-smile" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#33752C")}>
                <FontAwesomeIcon icon={faGrinStars} className="fa-grin-stars" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#9078B1")}>
                <FontAwesomeIcon icon={faFrown} className="fa-frown" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#0D3F7C")}>
                <FontAwesomeIcon icon={faGrimace} className="fa-grimace" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#4B021D")}>
                <FontAwesomeIcon icon={faTired} className="fa-tired" />
                </div>
                <div style = {{width: '50px', height: '50px'}}   onClick = {() => setColor("#A9112B")}>
                <FontAwesomeIcon icon={faAngry} className="fa-angry" />
                </div>
            </div>
        </div>
    )
    
}

export default Moods; 