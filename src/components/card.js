import React from 'react';

function Card({imageSrc, checkCard, cardKey}) {

    return ( 
        <div className='playing-card mx-0 my-1'>
            <img src={imageSrc} onClick={() => checkCard(cardKey)}></img>
        </div>
     );
}

export default Card;