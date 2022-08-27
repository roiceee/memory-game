import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';


function WinModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="win modal"
      centered
      className='bg-dark'
    >
      <Modal.Header closeButton>
        <Modal.Title id="win modal">
          YOU WON!
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={props.onHide}>Play Again</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WinModal;