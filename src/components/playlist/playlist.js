import React, {useState} from 'react';

export default function Playlist(props) {
    const [userInput, setUserInput] = useState("");
    function handleUserInput (e) {
         setUserInput(e.target.value);
    }
    return (
    
    <div>    
    <input type="text" name="playlistname" id="playlistname" onChange={handleUserInput} value={userInput}/>
    <button>Save To Spotify</button>
    
    <div>
        <h1>{userInput}</h1>
    </div>
    </div>
    )
}