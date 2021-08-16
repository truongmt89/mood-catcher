import { createSlice } from "@reduxjs/toolkit";



const appInit = createSlice({
    name:"appInit",
    initialState:{
        mood:0,
        journalEntryId:0,
        text:"",
        calendarTile:[],
        currentMood:0,
        currentText:""
    },
    reducers:{
        handleTextChange:(state,action) =>{
            state.text = action.payload
        },
        handleMoodChange:(state, action) =>{
            state.mood = action.payload
        },
        handleJournalEntryIdChange: (state, action) =>{
            state.journalEntryId = action.payload
        },
        handleCalendarTileChange: (state,action) =>{
            state.calendarTile = action.payload
        },
        handleCurrentMoodChange: (state, action) =>{
            state.currentMood = action.payload
        },
        handleCurrentTextChange: (state, action) =>{
            state.currentText = action.payload
        }
    } 
})


export const {
    handleTextChange,
    handleMoodChange,
    handleJournalEntryIdChange,
    handleCalendarTileChange,
    handleCurrentMoodChange,
    handleCurrentTextChange
} = appInit.actions;


export default appInit.reducer