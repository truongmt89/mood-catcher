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
    const [currEntry, setcurrEntry] = useState(null)
    const journalId = useSelector((state) => state.appInit.journalEntryId); 
    const journalText = useSelector((state) => state.appInit.text); 
    const journalMood = useSelector((state) => state.appInit.mood);
    const handleTitleChange = (e) => {
        dispatch(handleTextChange(e.target.value))
        setText(e.target.value)
        // console.log(text)
    }
    
    const handleSubmit= () => {
        console.log(props.entryData)
       console.log(journalId)
       console.log(journalText)
       console.log(journalMood)
        axios.post('http://localhost:5000/journal_entry',{
        
            "calendar_id": journalId,
            "journal_text":journalText,
            "journal_mood": journalMood 
        }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

    }

    let textAreaValue = ""
    useEffect(() => {
        if(props.entryData.length === 0){
            return; 
        }else{
            let text = props.entryData.find((obj) => {
                return   obj.calendar_id === props.id
                })
                if (text !== undefined) {
                    setText(text.journal_text)
                }
            
        }
        
    }, [props.id, props.entryData])
       
    // }
    // const {entryData} = props;
    // const mapAll = () => {
    //     return entryData.map((entry) => {
    //     return ( 
    //     <div>
    //         {entry.journal_title}
    //     </div>)
    //     })
    // }

return  (
    <section>
        {/* {mapAll()} */}
        <div id = "entryContainer"> 
            <textarea id = 'entryBox' onChange={handleTitleChange} value = {text}></textarea>
            <button id = "submit" onClick={()=>handleSubmit()}>submit</button>
        </div>
    </section>
);};

export default EntryList;
