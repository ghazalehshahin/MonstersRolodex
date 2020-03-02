import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';
export const CardList=props=>(
    <div className="CardList">
        {props.monsters.map(x=>(<Card key={x.id} x={x}/>))}
    </div>
);