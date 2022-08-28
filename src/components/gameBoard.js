import React, { useCallback, useEffect, useState } from "react";
import Card from "./card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import WinModal from "./winModal";
import shuffleArray from "../utils/shuffleArray";
import levelArr from "../data/levels";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { resetLevelArr } from "../data/levels";

function GameBoard() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(levelArr[levelIndex]);
  const [score, setScore] = useState(0);
  const [winModalShow, setWinModalShow] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);

  const generateCards = useCallback(() => {
    const cards = level.cards.map((card) => {
      return (
        <Card
          key={card.id}
          cardObject={card}
          setScore={setScore}
          setWinModalShow={setWinModalShow}
          playerWon={playerWon}
          resetGame={resetGame}
        />
      );
    });
    return cards;
  }, [level, playerWon]);

  const checkWin = useCallback(() => {
    if (levelIndex === levelArr.length - 1) {
      setPlayerWon(true);
      return true;
    }
    return false;
  }, [levelIndex]);

  const increaseLevel = useCallback(() => {
    if (checkWin()) {
      return;
    }

    setLevelIndex((prevLevelIndex) => {
      return prevLevelIndex + 1;
    });
  }, [levelIndex]);

  const resetGame = useCallback(() => {
    setLevelIndex(0);
    setScore(0);
    resetLevelArr();
    setPlayerWon(false);
  }, []);

  useEffect(() => {
    if (score === level.length) {
      increaseLevel();
    }
    shuffleArray(level.cards);

  }, [score]);

  useEffect(() => {
    setLevel(levelArr[levelIndex]);
  }, [levelIndex]);

  useEffect(() => {
    generateCards();
    setScore(0);
  }, [level]);

  useEffect(() => {
    if (!playerWon) {
      return;
    }
    setWinModalShow(true);
  }, [playerWon]);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h5>Level: {level.id}/{levelArr.length}</h5>
            <h6>
              Score: {score}/{level.length}
            </h6>
          </Col>
          <Col xs={7} md={10}>
            <Button variant="danger" onClick={resetGame}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-center">
          {generateCards()}
        </Row>
      </Container>
      <WinModal
        playerwon={playerWon.toString()}
        show={winModalShow}
        onHide={() => setWinModalShow(false)}
        className="border-0"
      />
    </>
  );
}

export default GameBoard;
