// Write your Character component here
import React, {useState, useEffect} from 'react';

export default function Character ({sprites, name, abilities, stats}){

    if (!sprites){
        return (
            <div>loading</div>
        )
    }

    // console.log(props.sprites.front_default)
    // const frontView = `"${props.sprites.front_default}"`

    return (
        <div>
            <img src = {sprites.front_default}></img>
            <h2>{name}</h2>
            {
                abilities.map(item => {
                return <div key={item.slot}>Ability: {item.ability.name}, Slot: {item.slot}</div>
                })
            }

            {
                stats.map((item,index) => {
                    return <div key = {index}>
                        <a href={item.stat.url}>{item.stat.name}: </a>
                        {item.base_stat}</div>
                })
            }
        </div>
    )
}