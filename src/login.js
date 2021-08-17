import React, { useState} from "react";
import './App.css';

function FakeLogin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [boxes, setBoxes] = useState([false, false, false]);

    let handleSubmit = (e) => {
        console.log(e);
        console.log("clicked");
        props.updateLoggedIn();
    }

    let updateBox = (e, boxNum) => {
        // let copy = [...boxes];
        // copy[boxNum] = e.target.checked;
        // setBoxes(copy);
        boxes[boxNum] = e.target.checked;
        setBoxes(boxes);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br />
                <fieldset>
                </fieldset>
                <input type="submit" value="login" />
                <br />
                <div>
                    {boxes.map((box, i) => {
                        return (
                            <div key={i}>box {i+1}: {box ? "true": "false"}</div>
                        )
                    })}
                </div>
            </form>
        </div>
      );
    }
    
    export default FakeLogin;