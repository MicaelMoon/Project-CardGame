import React, {useState} from 'react';
import { CardProps } from './Card';
import { Card } from './Card';
import '../stylings/InGame.css';

type CardSlotProps = {
  card?: CardProps | null;
};

export const CardSlot: React.FC<CardSlotProps> = ({ card }) => {
  const [hasCard, cardChanged] = useState<Boolean>(false);
  
  return (
    <div className="card-slot">
      {card ? (
        <Card{...card} />
      ) : (
        <p>Empty Slot</p>
      )}
    </div>
  );
};
