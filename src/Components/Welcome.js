import React, {useState,useEffect} from 'react'

import './welcome.css'
import $ from 'jquery'

const Welcome = (props) => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
    const getQuote = () =>{
        $.getJSON(url, function(data){
            setQuote(data.quoteText)
            setAuthor(data.quoteAuthor)
        })
    }

    if(!quote){
        getQuote()
    }
    setTimeout(() =>{
        if(document.getElementById('welcomeContainer')){
            document.getElementById('welcomeContainer').style.opacity = "0"
        }
        
    },4000)

    setTimeout(() =>{
        if(document.getElementById('welcomeContainer')){
            document.getElementById('welcomeContainer').style.display = "none"
        }
        
    },4500)

    return (
        <div id = "welcomeContainer">
            <div id = "welcome">
                <div id = 'quote'>
                    {quote}
                </div>
                <div id = "author">
                    {`― ${author}`}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
