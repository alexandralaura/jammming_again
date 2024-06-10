import React from 'react';
import sty from './track.module.css';

export default function Track(props) {
    return (
        <div className={sty}>
            <p>{props.name}</p>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <p>{props.id}</p>
            <p>&#43; &#x2B; &plus;</p>
           
        </div>
    )
}