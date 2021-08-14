import React from 'react';
import './moods.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinBeam, faSmile, faGrinStars, faFrown, faGrimace, faTired, faAngry } from '@fortawesome/free-solid-svg-icons'
import {handleMoodChange} from './feature/appInit'

import { useDispatch } from 'react-redux'



const Moods = (props) => {
    // const [selected,SetSelect] = useState(null);
    const dispatch = useDispatch()
    function setColor(color){
        // console.log(event);
        // props.colorAction(event.target.style.backgroundColor)
        let selected = document.getElementsByClassName("selected")
        console.log(selected[0])
        if(selected.length){
            selected[0].style.backgroundColor = color
        }
        
    }
    
    function grabMood(event){
        console.log(event.target.id,'this is our event')
        dispatch(handleMoodChange(event.target.id))
        switch (event.target.id) {
            case 1:
                setColor('#7B9BE5')
                break;
            case 2:
                setColor('#FCF771')
                break;
            case 3:
                setColor('#33752C')
                break;
            case 4:
                setColor('#9078B1')
                break;
            case 5:
                setColor('#0D3F7C')
                break;
            default:
                setColor('#4B021D')
                break;
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
                <div style = {{width: '40px', height: '40px'}}>
                    <FontAwesomeIcon  id={1}   onClick = {(e)=>grabMood(e)} icon={faGrinBeam} className="fa-grin-beam" />
                    <p className = "moodText excited">excited</p>
                </div>
                <div style = {{width: '40px', height: '40px'}} id={2}   onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faSmile} className="fa-smile" />
                    <p className = "moodText happy">happy</p>
                </div>
                <div style = {{width: '40px', height: '40px'}} id={3}   onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faGrinStars} className="fa-grin-stars" />
                    <p className = "moodText productive">productive</p>
                </div>
                <div style = {{width: '40px', height: '40px'}}  id={4}  onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faFrown} className="fa-frown" />
                    <p className = "moodText sad">sad</p>
                </div>
                <div style = {{width: '40px', height: '40px'}} id={5}   onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faGrimace} className="fa-grimace" />
                    <p className = "moodText anxious ">anxious</p>
                </div>
                <div style = {{width: '40px', height: '40px'}} id={6}   onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faTired} className="fa-tired" />
                    <p className = "moodText stressed ">stressed</p>
                </div>
                <div style = {{width: '40px', height: '40px'}} id={7}   onClick = {(e)=>grabMood(e)}>
                    <FontAwesomeIcon icon={faAngry} className="fa-angry" />
                    <p className = "moodText angry">angry</p>
                </div>
            </div>
        </div>
    )
    
}

export default Moods; 