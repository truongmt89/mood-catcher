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
        <h4>Hello BEAUTIFUL!
            Let me see that gorgeous face!
        </h4>
        </div>
            <div  id = 'moods'>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#7B9BE5")}>
                    <FontAwesomeIcon icon={faGrinBeam} className="fa-grin-beam" />
                    <p className = "moodText">excited</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#FCF771")}>
                    <FontAwesomeIcon icon={faSmile} className="fa-smile" />
                    <p className = "moodText">happy</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#33752C")}>
                    <FontAwesomeIcon icon={faGrinStars} className="fa-grin-stars" />
                    <p className = "moodText">productive</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#9078B1")}>
                    <FontAwesomeIcon icon={faFrown} className="fa-frown" />
                    <p className = "moodText">sad</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#0D3F7C")}>
                    <FontAwesomeIcon icon={faGrimace} className="fa-grimace" />
                    <p className = "moodText">anxious</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#4B021D")}>
                    <FontAwesomeIcon icon={faTired} className="fa-tired" />
                    <p className = "moodText">stressed</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}   onClick = {() => setColor("#A9112B")}>
                    <FontAwesomeIcon icon={faAngry} className="fa-angry" />
                    <p className = "moodText">angry</p>
                </div>
            </div>
        </div>
    )
    
}

export default Moods; 