import React from 'react';
import Title from './Components/Title';
import EntryList from './Components/EntryList';
import axios from "axios";
import Calendar from './Components/Calendar';


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
    const BASE_URL = "http://localhost:5000/mood-catcher";
    return (
      <div className="App">
        <Calendar/>
      </div>
    );
  }
  

export default App;
