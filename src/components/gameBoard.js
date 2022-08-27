import React, {useEffect, useState } from "react";
import Card from "./card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
// import WinModal from "../utils/winModal";
import shuffleArray from "../utils/shuffleArray";
import levelArr from "../data/levels";

function GameBoard() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(levelArr[levelIndex]);
  const [score, setScore] = useState(0);
  // const [winModalShow, setWinModalShow] = useState(false);

  const checkCard = 
    (key) => {
      if (level.cards[key].isClicked === true) {
        // setLevelIndex(0);
        return;
      }
      level.cards[key].isClicked = true;
      setScore((prevScore) => {
        return prevScore + 1;
      });
    }

  const generateCards = () => {
    const cards = level.cards.map((card) => {
      return (
        <Card
          imageSrc={card.src}
          key={card.id}
          checkCard={checkCard}
          cardKey={card.id}
        />
      );
    });
    return cards;
  };

  const increaseLevel = () => {
    setLevelIndex((prevLevelIndex) => {
      return prevLevelIndex + 1;
    });
    setScore(0);
  };

  useEffect(() => {
    if (score === levelArr[levelIndex].length) {
      // setWinModalShow(true);
      increaseLevel();
    }
    
    shuffleArray(level.cards);
  });

  useEffect(() => {
    
    setLevel(levelArr[levelIndex])
    console.log(levelArr[levelIndex])
  },[levelIndex])

  useEffect(() => {
    generateCards();
  }, [level]);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <h5>Level: {levelArr[levelIndex].id}</h5>
          <h6>Score: {score}/{levelArr[levelIndex].length}</h6>
        </Row>
        <Row className="mt-4 d-flex justify-content-center">
          {generateCards()}
        </Row>
      </Container>
      {/* <WinModal show={winModalShow} onHide={() => setWinModalShow(false)} /> */}
    </>
  );
}

export default GameBoard;
