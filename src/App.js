import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import EntryList from './Components/EntryList';
import Entries from './Components/EntryList';
import axios from "axios";
import Calendar from './Components/Calendar';
import Moods from './Components/Moods';
import Welcome from './Components/Welcome'
import dc from './Components/dc2.png'; 
import './App.css'

const App = () => {
  const [entries, setEntries] = useState([])
  const[color, setColor] = useState('#efb6b2')
  const BASE_URL = "http://localhost:5000/";
  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then((response) => {
        setEntries(response.data)
      })
      .catch((err) => console.log(err));
  },
    []
  )

  setTimeout(() =>{
    document.getElementById('appContainer').style.opacity = "1"
    document.getElementById('moodContainer').style.opacity = "1"
    document.getElementsByClassName('title')[0].style.opacity = "1"
},5500)


  const removeEntry = index => {
    setEntries(
      entries.filter((entry, i) => {
        return i !== index
      })
    )
  }

  //https://imgur.com/PLnFkdP
  return (
    <div className="App">
      <img id = "dreamCatcher" src = {dc}/>
      <Welcome />
      <Title /> 
        <div id="appContainer">
        <div id="calendarContainer">
          <Calendar tileColor={color} />
        </div>
        <div id='moodContainer'>
          <Moods colorAction={setColor} />
          <Entries entryData={entries} removeEntry={removeEntry} />
        </div>
      </div>
    </div>
  )
};

export default App;