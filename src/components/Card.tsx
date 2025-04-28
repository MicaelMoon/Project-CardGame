import React from 'react';
import '../stylings/InGame.css';

export type CardProps = {
    id?:string;
    name: string;
    type?:string;
    attack:number;
    health:number;
    image?:string;
}

export const Card: React.FC<CardProps> = ({name, attack, health, type, image}) =>{
    return(
        <div className={'card'}>
            <p className='card-type'>{type}</p>
            {image && <img src={image} alt={name} className='card-image'/>}
            <p className='card-name'>{name}</p>
            <p className='card-attack'>{attack}</p>
            <p className='card-health'>{health}</p>
        </div>
    );
}