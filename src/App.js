import React, {useState} from 'react';
import Title from './Components/Title';
import EntryList from './Components/EntryList';
import axios from "axios";
import Calendar from './Components/Calendar';
import Moods from './Components/Moods';
import './App.css'

// function App() {
//   const axios = require('axios')
//   const BASE_URL = "http://localhost:5000/mood-catcher";
//   useEffect(() => {
//     axios.get(`${BASE_URL}/Title`)
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
//   }
//   )};

  function App() {
    const[color, setColor] = useState('#efb6b2')
    const BASE_URL = "http://localhost:5000/mood-catcher";
    return (
      <div className="App">
        <Title />
        <div id = "appContainer">
          <div id = "calendarContainer">
            <Calendar tileColor = {color}/>
          </div>
          <div id = 'moodContainer'>
            <Moods colorAction = {setColor}/>
          </div>
        </div>
      </div>
    );
  }
  

export default App;
