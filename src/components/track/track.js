import React from 'react';

export default function Track(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <p>{props.id}</p>
        </div>
    )
}