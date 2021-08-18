import React, {useEffect, useState} from "react";
import './App.css';
import './login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } 
  from "react-router-dom";

import dc1 from './Components/Dreamcatcher-1.png';
import dc2 from './Components/Dreamcatcher-2.png';

function FakeLogin(props) {

    function route(){
        props.loginState(true)
        window.location = 'localHost:3000/'
        console.log(window.location.href)
        console.log(props.state)
    }

    function dcAnimation(){
        
    }

    useEffect(() =>{
        props.loginState(true)
        document.getElementsByClassName('dc')[0].style.opacity = '1'
        document.getElementsByClassName('dc')[1].style.opacity = '0'

        let interval = setInterval(() =>{
            if( document.getElementsByClassName('dc')[0].style.opacity == '1'){
                document.getElementsByClassName('dc')[0].style.opacity = '0'
                document.getElementsByClassName('dc')[1].style.opacity = '1'
            }else{
                document.getElementsByClassName('dc')[1].style.opacity = '0'
                document.getElementsByClassName('dc')[0].style.opacity = '1'
            }
        },1000)

        return () => {
            clearInterval(interval)
        }

    },[])

    
  

    return (
        <div>
          
          <form action="/action_page.php" >
          <img className = 'dc' src = {dc1}/>
          <img className = 'dc' src = {dc2}/>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/>
                <label for="passwork">Password:</label>
                <input type="text" id="password" name="password"/>
            </form>

            <Link className="career-btn sourceSansPro-sanSerif"
                to="/"
                ><button style = {{height: '50px', width: '100px',marginTop: '100px'}}>Login</button>
            </Link>
            
                
            

        
        </div>
      );
    }
    
    export default FakeLogin;