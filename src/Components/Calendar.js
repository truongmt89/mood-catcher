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

    const days = new Array(31).fill(null).map((_, i) => i+1);
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
    )
}

export default Calendar;