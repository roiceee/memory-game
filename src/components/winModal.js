import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function WinModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="win modal" centered  >
      <Modal.Header closeButton>
        <Modal.Title id="win modal">
          {props.playerwon === "true"
            ? 'You Won! The passphrase is "san ka punta to the moon"'
            : "You lose! Don't click cards more than once!"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WinModal;
