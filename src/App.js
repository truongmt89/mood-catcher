import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import axios from 'axios'
import Title from './Components/Title';
import EntryList from './Components/EntryList';
import Calendar from './Components/Calendar';
import Moods from './Components/Moods';
import Welcome from './Components/Welcome'
import dc from './Components/dc2.png'; 
import './App.css'
import Homepage from "./Homepage";
import Login from "./login";
import { useDispatch } from 'react-redux'
import {handleCalendarTileChange} from './Components/feature/appInit'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [calendarData, setCalendarData] = useState([]);
  const [entries, setEntries] = useState([])
  const [currID, setID] = useState(0)
  const[color, setColor] = useState('#efb6b2')
  const dispatch = useDispatch();

  const BASE_URL = "http://localhost:5000/";
  useEffect(() => {
    axios.get("http://localhost:5000/journal_entry")
    .then(function (response) {
      // dispatch(handleCalendarTileChange(response.data))
      // setCalendarData(response.data)
      // setData(response.data.users)
      setEntries(response.data)
      console.log(response.data)
    })
      .catch((err) => console.log(err));
  }, [])

  

  const removeEntry = index => {
    setEntries(
      entries.filter((entry, i) => {
        return i !== index
      })
    )
  }

  const updateLoggedIn = () => {
    setLoggedIn(!loggedIn)
  }

  function handleTileClick(event) {
            // dispatch(handleJournalEntryIdChange(event.target.id))
            
        }


  //callback function from tile 
  const getTileData = (id) => {
    console.log(id)
    setID(id)

    // in here will eventually live a modal component that pops up to either
    // display journal entry or populate a journal entry  
    // likely using conditional rendering
  }
  console.log(entries)
  return (
    <Router>
    <div className="App">
      <img id = "dreamCatcher" src = {dc}/>
      {/* { !loggedIn && <Login updateLoggedIn={updateLoggedIn}/>}
      { loggedIn && <Homepage/>}
      { loggedIn && <button onClick={updateLoggedIn}>Log Out</button>}
      { data && data.map((user, i) => {
        console.log(user,'this is our ')
        return (
          <div key={i}>
          {user.number}: {user.username}
          </div> )
        })} */}

       
      {/* <Welcome />
      <Title /> 
        <div id="appContainer">
        <div id="calendarContainer">
          <Calendar tileColor={color} journalEntry={entries} />
        </div> */}
        {/* <div id='moodContainer'>
          <Moods colorAction={setColor} />
          <EntryList entryData={entries} removeEntry={removeEntry} />
        </div> */}
      {/* </div> */}

        {}
        <Switch>
          <Route path = "/login">
            <Login loginState={setLoggedIn}/>
          </Route>
          <Route path = "/">
            {/* {!loggedIn ? <Redirect to="/login" /> : ''} */}
            <Welcome />
            <Title /> 
              <div id="appContainer">
              <div id="calendarContainer">
                <Calendar tileColor={color} journalEntry={entries} getTileData={getTileData}/>
              </div>
              <div id='moodContainer'>
                <Moods colorAction={setColor} />
                <EntryList id = {currID} entryData={entries} removeEntry={removeEntry} />
              </div>
            </div>
          </Route>
      </Switch>

      
    </div>
    </Router>
  )

};

export default App;