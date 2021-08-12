import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import EntryList from './Components/EntryList';
import Entries from './Components/EntryList';
import axios from "axios";
import Calendar from './Components/Calendar';
import Moods from './Components/Moods';
import './App.css'

const App = () => {
  const [entries, setEntries] = useState([])
  const[color, setColor] = useState('#efb6b2')
  const axios = require('axios')
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

  const removeEntry = index => {
    setEntries(
      entries.filter((entry, i) => {
        return i !== index
      })
    )
  }
  return (
    <div className="App">
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