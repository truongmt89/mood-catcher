import React from 'react';
import EntryList from './EntryList'

const Tile = (props) => {
return (
<div key={props.element} id={props.tileCounter} className="tile" style = {{backgroundColor: '#4B021D'}} onClick = {props.handleTileClick}> </div>)
}


export default Tile;