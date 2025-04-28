import React, { useState } from 'react';
import { Spinner } from '../stylings/Spinner';

export const Home: React.FC = () =>{
    // Create a const where the first argument is a set to a boolean while the second one is the function that tells React to re-render my component

    const [isQueued, setIsQueued] = useState<boolean>(false);

    const handleClick = () => {
        setIsQueued(prev => !prev); // !isQueued ... kinda. It changes it based on the previous value.
    };

    return (
        <div>
        <h1>My Card Game</h1>
        <button onClick={handleClick}>
            {isQueued ? 'Exit queue' : 'Queue up'}
        </button>
        {isQueued && <Spinner size={50} />}
        </div>
    );
}