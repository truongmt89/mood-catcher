import React, { useEffect, useState } from 'react';
import Entries from './Entries';
import './entries.css'

const EntryList = (props) => {
    const [title, setTitle] = useState("")
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }
    const handleSubmit= () => {
        
        fetch("http://localhost:5000/journal_entry",{
            headers: {"content-type":"application/json"},
            method: "POST", 
            body: JSON.stringify({
                "journal_month": 4,
                "journal_day": 5,
                "journal_title": "title",
                "journal_text":  "An updated Post!",
                "journal_mood":  "Happy"

            })
        })
    }
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
            <textarea id = 'entryBox' onChange={handleTitleChange} value={title} placeholder = "Lets talk about it..."></textarea>
            <button id = "submit" onClick={()=>handleSubmit()}>submit</button>
        </div>
    </section>
);};

export default EntryList;
