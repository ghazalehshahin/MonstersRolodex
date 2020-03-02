import React from 'react';
import './card.styles.css';
export const Card=props=>(
    <div className='Card'>
        <img alt={`${props.x.name}'s information`} src={`https://robohash.org/${props.x.id}?set=set2&size=180x180`}/>
        <h2>
            {props.x.name}
        </h2>
        <p>
            {props.x.email}
        </p>
    </div>
)