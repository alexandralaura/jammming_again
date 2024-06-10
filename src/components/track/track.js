import React, {useState} from 'react';
import sty from './track.module.css';

export default function Track(props) {
    const [result, addResult] = useState([]);
    function handleClick () {
           
    }
    return (
        <div className={sty}>
            <p>{props.name}</p>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <p>{props.id}</p>
            <button onClick={handleClick}>&#43;</button>
           
        </div>
    )
}