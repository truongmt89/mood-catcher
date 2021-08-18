import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux'
import Tile from './Tile';
import EntryList from './EntryList'
    
    const months = ["","J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

    // list of all the ids for the squares
    const squares = []
    for(let i = 0; i < 416; i++){
        squares.push(i)
    }

    

    const Calendar = (props) => {
        let counter2 = 0;
        let tileCounter = 0
        const calendarTileData = useSelector((state) => state.appInit.calendarTile); 
        let entries = props.journalEntry
        let mood = ""
        let dispatch = useDispatch();


        setTimeout(() =>{
            if(document.getElementById('appContainer')){
                document.getElementById('appContainer').style.opacity = "1"
            }
        },5500)
    
        return (
            <div>
                <div id="calendar-container">
                   
                    <div className="calendar">
                        {squares.map((element, index) => {
                            // console.log(element, index,'check our data')
                            if(index < 13){
                                return <div key={element} className = "days">{months[index]}</div>//gives months at the top
                            }else if(index%13 === 0){
                                counter2 += 1
                                // console.log(counter2)
                                return <div key={element}>{counter2}</div>//gives side numbers
                            }
                            
                            tileCounter += 1 //gives tile id
                            
                            
                            // entries.map(entry => {
                                //     // retu÷rn "hi"
                                // })
                                
                                for (let i = 0; i < entries.length; i++) {
                                    if(entries[i].calendar_id === tileCounter){
                                        console.log("I'm in the tile")
                                        console.log(entries[i].journal_mood)
                                        mood = entries[i].journal_mood
                                        break;
                                        // add a prop to Tile 

                                    //       // component will be 
                                    //       // pass 
                                    //       // props.mood = index.mood 
                                    //       // props.text = index/journal_text
                                    //       // <TileComponent mood={index.mood} text={index.journal_text} />
                                    }else {
                                        mood = ""
                                    }
                                    
                            }
                            
                            return <Tile key={element} element={element} tileMood ={mood} tileCounter={tileCounter} getTileData={props.getTileData} />
                            // console.log(tileCounter,'this is our tileCounter')
                            // loop through our data coming in === calendarTileData
                            // if statement to check for the tileCounter ===  calendarTileData 
                            // if true  Render tileComponent within and pass along with mood and text value 
                            // else  return <div id = {tileCounter} className="tile" style = {{backgroundColor: '#efb6b2'}} onClick = {handleTileClick}></div>
                            //^^generates the rest of the tiles that arent numbers on the side or months
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
    export default Calendar;