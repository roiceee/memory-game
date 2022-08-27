import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './header';
import GameBoard from './gameBoard';


class App extends React.Component {

  render() {
    
    return (
      <Container className='text-white'>
      <Header/>
      <GameBoard/>
      </Container>
   );
  }
  
}

export default App;
