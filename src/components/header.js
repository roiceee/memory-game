import React from 'react';
import Row from 'react-bootstrap/esm/Row';

function Header() {
    return ( 
        <Row className='mt-3'>
        <h2>Card Memory Game</h2>
        <h6>Get points by clicking on a card. You lose when you click a card more than once!</h6>
        </Row>
     );
}

export default Header;