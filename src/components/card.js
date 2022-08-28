import React from "react";
import correctAudio from "../assets/audio/correct.mp3";
import gameOverAudio from "../assets/audio/game-over.mp3";
import useSound from "use-sound";

function Card({ setScore, cardObject, setWinModalShow, playerWon, resetGame}) {
  const [playCorrect] = useSound(correctAudio);
  const [playWrong] = useSound(gameOverAudio);

  const checkCard = (correctAudio, wrongAudio) => {
    if (playerWon) {
      return;
    }
    if (cardObject.isClicked === true) {
      setWinModalShow(true);
      resetGame();
      wrongAudio();
      return;
    }
    correctAudio();
    cardObject.isClicked = true;
    setScore((prevScore) => {
      return prevScore + 1;
    });
  };

  return (
    <div className="card-holder mx-0 my-1 d-flex">
      <img
        className="playing-card"
        src={cardObject.src}
        onClick={() => checkCard(playCorrect, playWrong)}
      ></img>
    </div>
  );
}

export default Card;
