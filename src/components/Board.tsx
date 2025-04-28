import React, { useState } from 'react'
import { CardSlot } from './CardSlot';
import { CardProps } from "./Card"

type BoardProps = {
  playerTurn?: boolean;
  friendlyDeck?: (CardProps | null)[];
  enemyDeck?: (CardProps | null)[];
}

export const Board: React.FC<BoardProps> = () =>{
  const [yourTurn, endYourTurn] = useState<boolean>(true);

  const endTurn = () => {
    endYourTurn(false); //Logic to pass player turn
  }

  const sampleDeck = [
    {name: "Goblin", attack: 2, health: 3, image: "/Golem/jpg", type: "minion"},
    null,
    null,
    { name: "Dragon", attack: 12, health: 12, image: "/Dragon.jpg", type: "minion"},
    { name: "Golem", attack: 8, health: 8, image: "/Golem.jpg", type:"minion" },
  ];
    
  return (
    <div className="board">
      <div className="player-board top-player">
        {[...sampleDeck].map((card, i) => (
          <CardSlot key={'friendly-slot-${i}'} card={card} />
        ))}
      </div>
    
      <button onClick={yourTurn ? endTurn : () => {}}></button>

      <div className="player-board bottom-player">

      </div>
    </div>
  );
}