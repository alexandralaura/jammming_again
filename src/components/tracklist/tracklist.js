import React from 'react';

export default function Trackist({items}) {
   return (
    <div>
        {items.map((item, index) => (
            <Track name={item.name} artist={item.artist} album={item.album} key={index} />

        )

        )}
    </div>
   )

}