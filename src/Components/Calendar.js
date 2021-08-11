import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';

// function daysInMonth(month) {
//     let year = (new Date()).getFullYear();
//     return new Date(year, month, 0).getDate();
//     }
    
    const months = ["","J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    // const grid = {};
    // for (let i = 0; i < months.length; i++) {
    //     grid[months[i]] = daysInMonth(i+1);
    // }
    // console.log(grid)

    // let days = new Array(7).fill(0);
    // let counter = 0;
    // days = days.map((element, index) => {
    //     if(index === 0 ){
    //         counter += 1
    //         return counter
    //     }else if(index === 1){
    //         counter += 4
    //         return counter
    //     }else{
    //         counter += 5
    //         return counter
    //     }
    // })
    // console.log(days)
    const squares = []
    for(let i = 0; i < 416; i++){
        squares.push(i)
    }

    const Calendar = (props) => {
        let counter2 = 0;
        let tileCounter = 0
    
        function getClass(event){
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
                            return <div id = {tileCounter} className="tile" style = {{backgroundColor: '#efb6b2'}} onClick = {getClass}></div>
                            //^^generates the rest of the tiles that arent numbers on the side or months
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
    export default Calendar;