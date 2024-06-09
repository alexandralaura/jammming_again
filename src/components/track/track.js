import React from 'react';

export default function Track(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <h3>{props.album}</h3>
            <h4>{props.id}</h4>
        </div>
    )
}