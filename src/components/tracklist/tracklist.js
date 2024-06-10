import React from 'react';
import Track from '../track/track';

export default function Tracklist({items}) {
   return (
    <div>
        {items.map((item, index) => (
            <Track name={item.name} artist={item.artist} album={item.album} key={index} />

        )

        )}
    </div>
   )

}