// Write your Character component here
import React, {useState, useEffect} from 'react';

export default function Character ({height, name, mass, hair_color}){

    if (!name){
        return (
            <div>loading</div>
        )
    }

    // console.log(props.sprites.front_default)
    // const frontView = `"${props.sprites.front_default}"`

    return (
        <div>
            <h2>Name: {name}</h2>
            <ul>
    <li>Mass: {mass}</li>
    <li>Height: {height}</li>
    <li>Hair color: {hair_color}</li>
            </ul>
        </div>
        // <div>
        //     <img src = {sprites.front_default}></img>
        //     <h2>{name}</h2>
        //     {
        //         abilities.map(item => {
        //         return <div key={item.slot}>Ability: {item.ability.name}, Slot: {item.slot}</div>
        //         })
        //     }

        //     {
        //         stats.map((item,index) => {
        //             return <div key = {index}>
        //                 <a href={item.stat.url}>{item.stat.name}: </a>
        //                 {item.base_stat}</div>
        //         })
        //     }
        // </div>
    )
}