import React from 'react';
import './moods.css';
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

    setTimeout(() =>{
        if(document.getElementById('moodContainer')){
            document.getElementById('moodContainer').style.opacity = "1"
        }
    },5500)
    
    function grabMood(color){
        //*****************CAN NOT GRAB ID OF FONT AWESOSME ICON ******************/
        // console.log(event.target.getAttribute('id'),'this is our event')
        // console.log(event.target.id, event.target)

        //I implemented the code backwards; the id dispatched depends on the color given.
        switch(color){
            case '#E9CC7F':
                dispatch(handleMoodChange(1))
                break;
            case '#C4DFF5':
                dispatch(handleMoodChange(2))
                break;
            case '#9292BA':
                dispatch(handleMoodChange(3))
                break;
            case '#CEBECC':
                dispatch(handleMoodChange(4))
                break;
            case '#3085BB':
                dispatch(handleMoodChange(5))
                break;
            case '#706B8F':
                dispatch(handleMoodChange(6))
                break;
            case '#80B5B3':
                dispatch(handleMoodChange(7))
                break;
        }
        // dispatch(handleMoodChange(event.target.id))
        setColor(color)
    }

    return(
        <div>   
        <div className="hello">
        <h4>Hello BEAUTIFUL!
            Let me see that gorgeous face!
        </h4>
        </div>
            <div  id = 'moods'>
                <div style = {{width: '50px', height: '40px',marginLeft: '10px'}}>
                    <FontAwesomeIcon onClick = {(e)=>grabMood(e)} icon={faGrinBeam} className="fa-grin-beam"    onClick = {()=>grabMood('#E9CC7F')} />
                    <p className = "moodText excited">excited</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faSmile} className="fa-smile"  onClick = {()=>grabMood('#C4DFF5')}/>
                    <p className = "moodText happy">happy</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faGrinStars} className="fa-grin-stars"  onClick = {()=>grabMood('#9292BA')}/>
                    <p className = "moodText productive">productive</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faFrown} className="fa-frown"   onClick = {()=>grabMood('#CEBECC')}/>
                    <p className = "moodText sad">sad</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faGrimace} className="fa-grimace"  onClick = {()=>grabMood('#3085BB')}/>
                    <p className = "moodText anxious ">anxious</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faTired} className="fa-tired"  onClick = {()=>grabMood('#706B8F')} />
                    <p className = "moodText stressed ">stressed</p>
                </div>
                <div style = {{width: '50px', height: '40px'}}>
                    <FontAwesomeIcon icon={faAngry} className="fa-angry"  onClick = {()=>grabMood('#80B5B3')} />
                    <p className = "moodText angry">angry</p>
                </div>
            </div>
        </div>
    )
    
}

export default Moods; 