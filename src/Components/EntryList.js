import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Entries from './Entries';
import {handleTextChange} from './feature/appInit'
import { useDispatch ,useSelector} from 'react-redux'
import './entries.css'

const EntryList = (props) => {
    const [text, setText] = useState("")
    // const [entryId,setEntryID] = useState(0);
    // const [mood,setMood] = useState(0)
    const dispatch = useDispatch();
    const journalId = useSelector((state) => state.appInit.journalEntryId); 
    const journalText = useSelector((state) => state.appInit.text); 
    const journalMood = useSelector((state) => state.appInit.mood);
    const handleTitleChange = (e) => {
        dispatch(handleTextChange(e.target.value))
        setText(e.target.value)
        // console.log(text)
    }
    
    const handleSubmit= () => {
       console.log(journalId)
       console.log(journalText)
       console.log(journalMood)
        axios.post('http://localhost:5000/journal_entry',{
        
            "journal_id": journalId,
            "journal_text":journalText,
            "journal_mood": journalMood 
        }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

    }
        // fetch("http://localhost:5000/journal_entry",{
        //     headers: {"content-type":"application/json"},
        //     cors: "no-cors", 
        //     method: "POST", 
        //     body: JSON.stringify({
        //         "journal_month": 4,
        //         "journal_day": 5,
        //         "journal_title": "title",
        //         "journal_text":  "An updated Post!",
        //         "journal_mood":  "Happy"

        //     })
        // })
    // }
    const {entryData} = props;
    const mapAll = () => {
        return entryData.map((entry) => {
        return ( 
        <div>
            {entry.journal_title}
        </div>)
        })
    }

return (
    <section>
        {mapAll()}
        <div id = "entryContainer"> 
            <textarea id = 'entryBox' onChange={handleTitleChange} value={text} placeholder = "Lets talk about it..."></textarea>
            <button id = "submit" onClick={()=>handleSubmit()}>submit</button>
        </div>
    </section>
);};

export default EntryList;
