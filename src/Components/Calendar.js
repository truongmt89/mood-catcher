import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';

function daysInMonth(month) {
    let year = (new Date()).getFullYear();
    return new Date(year, month, 0).getDate();
    }
    
    const months = ["","J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    const grid = {};
    for (let i = 0; i < months.length; i++) {
        grid[months[i]] = daysInMonth(i+1);
    }
    console.log(grid)

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
    let tileCounter = 0;

const Calendar = (props) => {
    let counter2 = 0;
    return (
        <div>
            <div id="calendar-container">
                <div className="calendar">
                    {squares.map((element, index) => {
                        if(index < 13){
                            return <div className = "days">{months[index]}</div>
                        }else if(index%13 === 0){
                            counter2 += 1
                            console.log(counter2)
                            return <div>{counter2}</div>
                        }
                        tileCounter+= 1
                        return <div id = {tileCounter - 372} className="tile"></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar;