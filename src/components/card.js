import React from 'react';
import correctAudio from "../assets/audio/correct.mp3";
import gameOverAudio from "../assets/audio/game-over.mp3";
import useSound from "use-sound";

function Card({imageSrc, setScore, cardObject}) {
    const [playCorrect] = useSound(correctAudio);
    const [playWrong] = useSound(gameOverAudio);

    const checkCard = 
        (correctAudio, wrongAudio) => {
          if (cardObject.isClicked === true) {
            // setLevelIndex(0);
            wrongAudio();
            return;
          }
          correctAudio();
          cardObject.isClicked = true;
          setScore((prevScore) => {
            return prevScore + 1;
          });
        }

    return ( 
        <div className='playing-card mx-0 my-1'>
            <img src={imageSrc} onClick={() => checkCard(playCorrect, playWrong)}></img>
        </div>
     );
}

export default Card;