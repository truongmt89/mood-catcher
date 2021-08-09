import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';

function daysInMonth(month) {
    let year = (new Date()).getFullYear();
    return new Date(year, month, 0).getDate();
    }
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const grid = {};
    for (let i = 0; i < months.length; i++) {
        grid[months[i]] = daysInMonth(i+1);
    }
    console.log(grid)

    let days = new Array(7).fill(0);
    let counter = 0;
    days = days.map((element, index) => {
        if(index === 0 ){
            counter += 1
            return counter
        }else if(index === 1){
            counter += 4
            return counter
        }else{
            counter += 5
            return counter
        }
    })
    console.log(days)
    const squares = []
    for(let i = 0; i < 372; i++){
        squares.push(i)
    }
const Calendar = (props) => {
    return (
        <div>
            <div id="months">
                {months.map((month, index) => {
                    return <div className="month"> {month} </div>   
                })} 
            </div>
            <div id="calendar-container">
                <div id="days">
                    {days.map((day, index) => {
                        return <div className="day"> {day} </div>   
                    })} 
                </div>
                <div className="calendar">
                    {squares.map((element, index) => {
                        return <div className="tile"></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar;