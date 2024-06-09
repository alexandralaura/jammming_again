import React from 'react';

import style from './searchBar.module.css';



export default function SearchBar(props) {
    return (
        <>
        <div>
          <h1>Lost input</h1>
          <form action="#"> 
            <label for ="name"></label>   
            <input className={style.input} type="text" name="name" id="name"/>
          </form>
         </div>
        </>
    )
};