import React, {useState} from 'react';

export default function Playlist(props) {
    const [playlistname, setplaylistname] = useState("");
    function handleUserInput (e) {
         setplaylistname(e.target.value);
    }
    return (
    
    <div>    
    <input type="text" name="playlistname" id="playlistname" onChange={handleUserInput} value={playlistname}/>
    <button>Save To Spotify</button>
    
    <div>
        <h1>{playlistname}</h1>
    </div>
    </div>
    )
}