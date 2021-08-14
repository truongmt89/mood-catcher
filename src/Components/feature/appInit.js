import { createSlice } from "@reduxjs/toolkit";



const appInit = createSlice({
    name:"appInit",
    initialState:{
        mood:0,
        journalEntryId:0,
        text:"",
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
        }
    }
})


export const {
    handleTextChange,
    handleMoodChange,
    handleJournalEntryIdChange
} = appInit.actions;


export default appInit.reducer