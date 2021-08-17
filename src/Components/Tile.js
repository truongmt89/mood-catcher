import React from 'react';
import EntryList from './EntryList'

function getColorFromMood(mood){
    switch(mood){
        case "Excited":           
            return '#E9CC7F';
        case "Happy":
            return '#C4DFF5';
        case "Productive":
            return '#9292BA';
        case "Sad":
            return '#CEBECC';
        case "Anxious":
            return '#3085BB';
        case "Stressed":
            return '#706B8F';
        case "Angry":
            return '#80B5B3';
        default:
            return '#F8D8E8';
    }
}

const Tile = (props) => {

    const handleTileClick = (id) => {
        console.log(id)
        props.getTileData(id)
        console.log(props.tileMood)
    }

    return (
    <div key={props.element} id={props.tileCounter} className="tile" style = {{backgroundColor: getColorFromMood(props.tileMood)}} onClick = {() => handleTileClick(props.tileCounter)}> </div>)
    }


export default Tile;