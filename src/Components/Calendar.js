import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';
import {handleJournalEntryIdChange} from './feature/appInit'
import { useDispatch,useSelector } from 'react-redux'

    
    const months = ["","J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

    const squares = []
    for(let i = 0; i < 416; i++){
        squares.push(i)
    }

    const Calendar = (props) => {
        let counter2 = 0;
        let tileCounter = 0
        const calendarTileData = useSelector((state) => state.appInit.calendarTile); 

    let dispatch = useDispatch()
        function handleTileClick(event){
            dispatch(handleJournalEntryIdChange(event.target.id))
            let oldSelect = document.getElementsByClassName("selected")
            if(oldSelect.length !== 0){
                oldSelect[0].classList.remove("selected")
            }
            event.target.classList.add("selected")
           
        }
    
        return (
            <div>
                <div id="calendar-container">
                    <div className="calendar">
                        {squares.map((element, index) => {
                            if(index < 13){
                                return <div className = "days">{months[index]}</div>//gives months at the top
                            }else if(index%13 === 0){
                                counter2 += 1
                                // console.log(counter2)
                                return <div>{counter2}</div>//gives side numbers
                            }
                            tileCounter += 1 //gives tile id
                            calendarTileData.map(index =>{
                               if(index.calendar_id === tileCounter){
                                  // component will be 
                                  // pass 
                                  // props.mood = index.mood 
                                  // props.text = index/journal_text
                                  // <TileComponent mood={index.mood} text={index.journal_text} />
                               }
                            })
                            // console.log(tileCounter,'this is our tileCounter')
                            // loop through our data coming in === calendarTileData
                            // if statement to check for the tileCounter ===  calendarTileData 
                            // if true  Render tileComponent within and pass along with mood and text value 
                            // else  return <div id = {tileCounter} className="tile" style = {{backgroundColor: '#efb6b2'}} onClick = {handleTileClick}></div>
                            return <div id = {tileCounter} className="tile" style = {{backgroundColor: '#efb6b2'}} onClick = {handleTileClick}></div>
                            //^^generates the rest of the tiles that arent numbers on the side or months
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
    export default Calendar;